import React from "react";
import Header from "./Header/Header";
import NewsFeed from "./MainDashboard/NewsFeed/PostsMain";
import AddPost from "./AddPost/AddPost";
function HomeDefaultDisplay({ user }) {
  return (
    <div>
      <AddPost />
      <Header />
      <NewsFeed />
    </div>
  );
}

export default HomeDefaultDisplay;
