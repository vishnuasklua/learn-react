const Pet = props => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
};

const App = () => {
    return React.createElement(
        "div", {},
        React.createElement("h1", {}, "Learn about it!"),
        React.createElement(Pet, {
            name: "rom",
            animal: "trex",
            breed: "dinosaur"
        }),
        React.createElement(Pet, {
            name: "rom",
            animal: "trex",
            breed: "dinosaur"
        })
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));