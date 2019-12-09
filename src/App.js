import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //     "div", {},
  //     React.createElement("h1", {}, "Learn about it!"),
  //     React.createElement(Pet, {
  //         name: "rom",
  //         animal: "trex",
  //         breed: "dinosaur"
  //     }),
  //     React.createElement(Pet, {
  //         name: "rom",
  //         animal: "trex",
  //         breed: "dinosaur"
  //     })
  // );

  //Same code as above, just in JSX
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Line" animal="Dog" breed="Mixed" />
      <Pet name="you" animal="snake" breed="giff" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
