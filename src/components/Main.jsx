import React from "react";

function Main() {
  const mystyle = {
    backgroundColor: "Black",
    padding: "10px",
    fontFamily: "Arial",
    lineHeight: "30px"
  };
  return (
    <div className="container">
      <div className="row pt-4 ">
        <div className="col-sm-4">
          <img
            src="https://picsum.photos/seed/picsum/600/300"
            className="img-fluid img-thumbnail"
            alt="..."
          />
        </div>
        <div className="col-sm-8">
          <p style={mystyle} className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-sm-8">
          <p style={mystyle} className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-sm-4">
          <img
            src="https://picsum.photos/600/300?grayscale"
            className="img-fluid img-thumbnail"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
