import React from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';

const CustomizedTag = styled(Tag)`
  border-radius: 27px;
  width: max-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: 7px;
  margin: 0 5px;
  font-size: xx-small;
`;

const statusColor = {
  0: "#161616",
  1: "#626D4B",
  2: "#940C25",
  3: "#666666",
  4: "#104F44",
}

const statusText = {
  0: "其他",
  1: "蛙調",
  2: "待移除",
  3: "已移除",
  4: "詢問",
}

const StatusTag = ({ status }) => {
  return (
    <CustomizedTag color={statusColor[status]}>
      {statusText[status]}
    </CustomizedTag>
  );
}

const tagRender = ({ label, value, closable, onClose }) => {
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <CustomizedTag
      color={statusColor[label]}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </CustomizedTag>
  );
};

export { StatusTag, tagRender }
