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
