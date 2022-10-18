import React from "react";
import Login from "./Login";
import Avatar from "./Avatar";

function Header() {
  return (
    <div>
      <section id="title">Forum</section>
      <Login />
      <Avatar />
    </div>
  );
}

export default Header;
