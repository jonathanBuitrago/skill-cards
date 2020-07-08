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
  StyledCardBottom,
  StyledCardProjectImage,
  StyledCardName,
  StyledCardFeatureValue,
  StyledCardFeature,
  StyledCardFeatures,
  StyledCardFeatureTitle,
  StyledCardColumns,
} from "./card.styled";
const Card = ({ user }) => {
  const renderFeatures = () => {
    return (
      <StyledCardColumns>
        <StyledCardFeatures border={true}>
          {user.features.slice(0, 3).map((feature) => (
            <StyledCardFeature>
              <StyledCardFeatureValue>{feature.value}</StyledCardFeatureValue>
              <StyledCardFeatureTitle>{feature.title}</StyledCardFeatureTitle>
            </StyledCardFeature>
          ))}
        </StyledCardFeatures>
        <StyledCardFeatures>
          {user.features.slice(3, 6).map((feature) => (
            <StyledCardFeature>
              <StyledCardFeatureValue>{feature.value}</StyledCardFeatureValue>
              <StyledCardFeatureTitle>{feature.title}</StyledCardFeatureTitle>
            </StyledCardFeature>
          ))}
        </StyledCardFeatures>
      </StyledCardColumns>
    );
  };

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
      <StyledCardBottom>
        <StyledCardName>{user.nick}</StyledCardName>
        {renderFeatures()}
      </StyledCardBottom>
    </StyledCard>
  );
};

export default Card;
