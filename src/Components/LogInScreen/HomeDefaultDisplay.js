import React from "react";
import Header from "./Header/Header";
import Posts from "./MainDashboard/NewsFeed/Posts";
function HomeDefaultDisplay({ user }) {
  return (
    <div>
      <Header />
      <Posts />
    </div>
  );
}

export default HomeDefaultDisplay;
