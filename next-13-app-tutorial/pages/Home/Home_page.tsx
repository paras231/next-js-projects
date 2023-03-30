import React from "react";
import CreatePost from "../../components/CreatePost";
const Home_page = () => {
  return (
    <>
      <h3>Home Page</h3>
      <DashBoard userName="Paras Sharma" totalUsers={20} />
      <CreatePost />
    </>
  );
};

export default Home_page;

type dashBoardProps = {
  userName: string;
  profilepic?: string;
  totalUsers: number;
};

const DashBoard = ({ userName, profilepic, totalUsers }: dashBoardProps) => {
  return (
    <>
      <div>
        <h2>{userName}</h2>
        <span>{totalUsers}</span>
      </div>
    </>
  );
};
