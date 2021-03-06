import React from 'react';
import styled from 'styled-components';

function Avatar(props) {
  return(
    <AvatarPic position={props.comment.timeStamp / props.duration * 100} src={props.comment.avatarpicURL}/>
  )
}

const AvatarPic = styled.img`
  height: 20px;
  width: 20px;
  left: ${prop => prop.position}%;
  position: absolute;
`;

export default Avatar;