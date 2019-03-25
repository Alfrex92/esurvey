import React from "react";
import styled, { css } from "styled-components";
import { spaceS, mainColor } from "../styles/utilities/tools";

// const delay = () => new Promise(done => setTimeout(done, 2000));
// add the hoverable condition if the user votes less than 3 times

const Player = ({
  voted,
  nickname,
  dispatch,
  totalVotes,
  avatar,
  likes,
  message,
  surveyOpen
}) => {
  const onClick = async () => {
    if (!voted && totalVotes >= 3) return;

    const type = voted ? "LIKE_DECREASE" : "LIKE_INCREASE";
    dispatch({ type, nickname });
  };
  return (
    <div>
      {totalVotes < 3 ? (
        <Avatar>
          <AvatarImg
            onClick={surveyOpen ? onClick : null}
            on={voted}
            hoverable={!voted}
            className="img"
            src={avatar}
            alt={`${nickname} avatar`}
          />
          {voted && (
            <AvatarSelection className="small">Your Selection</AvatarSelection>
          )}
        </Avatar>
      ) : (
        <Avatar>
          {(!surveyOpen && voted) &&
            <AvatarLikes className="small">Likes:{likes}</AvatarLikes>
          }
          <AvatarImg
            onClick={surveyOpen ? onClick : null}
            on={voted}
            hoverable={false}
            src={avatar}
            alt={`${nickname} avatar`}
          />
          {voted && (
            <AvatarSelection className="small">Your Selection</AvatarSelection>
          )}
        </Avatar>
      )}
      <p>{nickname}</p>
      <p>{message}</p>
    </div>
  );
};

const Avatar = styled.div`
  position: relative;
`;

const AvatarImg = styled.img`
  width: 9rem;

  height: 9rem;
  border-radius: 100%;
  border: 5px solid white;
  transition: transform 0.3s ease 0s;
  ${p =>
    p.on &&
    css`
      border-color: #ff9100;
    `}
  ${p =>
    p.hoverable &&
    css`
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease 0s;
      }
    `}
`;

const AvatarSelection = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: ${spaceS};
  transform: translateX(-50%);
  background-color: ${mainColor};
  font-weight: 700;
`;

// FIX! this style can be simplified
const AvatarLikes = styled.p`
  position: absolute;
  top: -8px;
  left: 50%;
  padding: ${spaceS};
  transform: translateX(-50%);
  background-color: ${mainColor};
  font-weight: 700;
`;

export default Player;

//         const totalVotes = calculateTotalVotes(players, country);  <img src={this.props.avatar} alt={`${this.props.nickname} avatar`} onClick={this.handleVote.bind(this, this.props.nickname, this.props.likes, this.props.vote)} />
