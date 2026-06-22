import { useAuth0 } from '@auth0/auth0-react';
import { Collapse, Form, Input, message, Modal } from 'antd';
import { CommentItem } from 'components/CommentItem';
import { UserImg } from 'components/UserImg';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { addCommentLikes, createRecordComments } from './../../../../axios';

const { Panel } = Collapse;

const CommentContainer = styled.div`
  height: 60vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 5px 0;
`;

const CommentPost = styled(Collapse)`
  & .ant-collapse-content{
    border-bottom: 1px solid rgb(238, 238, 238) !important;
  }
`;

const CommentModal = ({ title, postId, context, isCommentModalOpen, setIsCommentModalOpen, comments, setComments, userName }) => {
  const [ form ] = Form.useForm();
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);
  const { user } = useAuth0();


  /* MODAL DROPABLE */
  const handleCancel = (e) => {
    setIsCommentModalOpen(false);
  };
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  /* HANDLE FORM SUMBIT */
  const onFinish = async (values) => {
    message.success("💪🐸：感謝您的貢獻");
    const data = await createRecordComments(values);
    setComments(data);
  };

  const onFinishFailed = () => {
    message.error("🐸💧：您沒有輸入任何內容");
  };

  /* LIKES */
  const handleClick = async (commentId) => {
    const userId = 1; // need to replace!!!
    const data = await addCommentLikes(postId, commentId, userId);
    setComments(data);
  };

  return (
    <Modal
      open={isCommentModalOpen}
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
          //onFocus={() => {}}
          //onBlur={() => {}}
        >
          {title}的貼文
        </div>
      }
      footer={
        <div style={{display: "flex"}}>
          <UserImg width={"30px"}/>：
          <Form
            form={form}
            name="comment"
            initialValues={{
              postId: postId,
              userName: user?.name,
              userImg: user?.picture,
            }}
            labelCol={{span: 24,}}
            wrapperCol={{span: 24,}}
            style={{ width: "100%" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name="postId" style={{ display: "none" }}/>
            <Form.Item name="userName" style={{ display: "none" }}/>
            <Form.Item name="userImg" style={{ display: "none" }}/>
            <Form.Item
              name="comment"
              rules={[
                {
                  required: true,
                  message: '請輸入您的留言!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      }
      onCancel={handleCancel}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <CommentContainer>
        <CommentPost 
          ghost
          //expandIcon={({ isActive }) => isActive ? <IconYouWant /> : <IconYouWant />}
        >
          <Panel>
            <p>{context}</p>
          </Panel>
        </CommentPost>
        { comments.map(( comment ) => {
            return (
              <CommentItem
                userName={comment.userName}
                userImg={comment.userImg}
                timeStamp={comment.createdAt}
                comment={comment.comment}
                likes={comment.likes}
                handleClick={() => handleClick(comment._id)}
              />
            )
          })
        }
      </CommentContainer>
    </Modal>
  );
};

export { CommentModal };
