import styled from "styled-components";
import CardBG from "../../assets/images/card-bg.png";

export const StyledCard = styled.div`
  width: 300px;
  height: 485px;
  background-image: url(${CardBG});
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 3.8rem 0;
  z-index: 2;
  transition: 200ms ease-in;
  position: relative;
  margin: 2rem;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  color: #e9cc74;
  padding: 0 1.5rem;
`;

export const StyledCardMasterInfo = styled.div`
  position: absolute;
  line-height: 2.2rem;
  font-weight: 300;
  padding: 2rem 0;
  text-transform: uppercase;
`;

export const StyledCardRating = styled.div`
  font-size: 2rem;
`;

export const StyledCardPosition = styled.div`
  font-size: 1.4rem;
  text-align: center;
`;

export const StyledCardProject = styled.div`
  display: block;
  width: 2.1rem;
  margin: 0 auto;
  height: 40px;
`;

export const StyledCardProjectImage = styled.img`
  width: 100%;
  object-top:fit: contain;
`;

export const StyledCardImageContainer = styled.div`
  width: 170px;
  height: 170px;
  margin-left: 20%;
  overflow: hidden;
  border-radius: 1rem;
  margin-top: 2rem;
`;

export const StyledCardImage = styled.img`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    right: -1.5rem;
    bottom: 0;
  }
`;

export const StyledCardBottom = styled.div`
  display: block;
  padding: 0.3rem 0;
  color: #e9cc74;
  width: 90%;
  margin: 0 auto;
  height: auto;
  position: relative;
  z-index: 2;
`;

export const StyledCardName = styled.p`
  width: 100%;
  display: block;
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  border-bottom: 2px solid rgba(233, 204, 116, 0.1);
  padding-bottom: 0.3rem;
  overflow: hidden;
  padding-top: 0.2rem;
  margin-bottom: 0.3rem;
  text-shadow: 2px 2px #111;
`;

export const StyledCardFeatures = styled.div`
  ${({ border }) =>
    border && "border-right: 2px solid rgba(233, 204, 116, 0.1)"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const StyledCardFeature = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0;
`;

export const StyledCardFeatureValue = styled.p`
  margin-right: 0.3rem;
  font-weight: 700;
  text-shadow: 2px 2px #111;
`;

export const StyledCardFeatureTitle = styled.p`
  font-weight: 300;
`;

export const StyledCardColumns = styled.div`
  display: flex;
  flex-direction: row;
`;
