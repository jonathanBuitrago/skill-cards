import React from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardImageContainer,
  StyledCardImage,
  StyledCardMasterInfo,
  StyledCardRating,
  StyledCardPosition,
  StyledCardProject,
  StyledCardProjectImage,
} from "./card.styled";
const Card = ({ user }) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardMasterInfo>
          <StyledCardRating>{user.rating}</StyledCardRating>
          <StyledCardPosition>{user.position}</StyledCardPosition>

          <StyledCardProject>
            <StyledCardProjectImage src={user.project} />
          </StyledCardProject>
        </StyledCardMasterInfo>
        <StyledCardImageContainer>
          <StyledCardImage src={user.avatar} />
        </StyledCardImageContainer>
      </StyledCardHeader>
    </StyledCard>
  );
};

export default Card;
