import React from "react";
import UserCrud from "../Components/User/UserCrud";
import Nav from "../Components/Navbar/Nav";

function HomePage() {
  return (
    <div>
      <Nav />
      <UserCrud />
    </div>
  );
}

export default HomePage;
