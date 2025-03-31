import { Image, Tag } from "antd";
import styled from "styled-components";

const CommentText = styled.div`
  width: max-content;
  max-width: calc(100% - 100px);
  border-radius: 8px;
  margin-left: 5px;
  padding: 0 10px;
  color: #161616;
  &>.header{
    display: flex;
    align-items: center;
  }
  &>.header>.author{
    font-weight: 700;
    font-size: small;
  }
  &>.header>.time{
    font-weight: 400;
    font-size: xx-small; 
    margin-left: 5px;
    color: rgb(102, 102, 102);
  }
  &>.context{
    font-size: x-small;
    height: max-content;
    max-height: 60px;
    overflow-y: scroll;
  }
  &>.comment-tag{
    font-size: xx-small;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin-top: 5px;
    width: max-content;
    max-width: 80px;
    color: rgb(102, 102, 102);
  }
`;

const CommentItem = ({ userName, userImg, timeStamp, comment, likes, handleClick }) => {
  /* LIKES ICON */
  const userId = 1; //need to replace!!!

  const likes_cnt = likes.length;
  var like_icon;
  if (likes_cnt === 0) {
    like_icon = "🌱";
  } else if ( likes_cnt <= 5 ) {
    like_icon = "🌿";
  } else if ( likes_cnt <= 10 ) {
    like_icon = "☘";
  } else if ( likes_cnt <= 25 ) {
    like_icon = "🍀";
  } else {
    like_icon = "🌳";
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        padding: "12px 3px",
      }}
    >
      <Image
        width={35}
        style={{borderRadius: "50%", marginTop: "4px"}}
        src={userImg}
      />
      <CommentText>
        <div className='header'>
          <span className='author'>{userName}</span>
          <span className='time'>{timeStamp}</span> {/*5:20PM | 04.08 2023*/}
        </div>
        <div className='context'>{comment}</div>
        <Tag
          className={"comment-tag"}
          color={(likes.includes(userId)) ? "#626d4b": "rgb(238, 238, 238)"}
          onClick={handleClick}
        >
          {like_icon}
        </Tag>
      </CommentText>
    </div>
  );
};

export { CommentItem }
