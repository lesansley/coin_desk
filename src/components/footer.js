import React from "react";

function Footer() {
  const date = new Date();
  return (
    <div>
      <hr />
      &copy; Les Ansley {date.getFullYear()}
    </div>
  );
}

export default Footer;
