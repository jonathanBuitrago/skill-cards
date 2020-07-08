import React from "react";
import Card from "../../components/card/card";
import { StyledHome } from "./home.styled";
import Users from "../../users";
const Home = () => {
  const renderCards = () => Users.map((user) => <Card user={user} />);
  return <StyledHome>{renderCards()}</StyledHome>;
};

export default Home;
