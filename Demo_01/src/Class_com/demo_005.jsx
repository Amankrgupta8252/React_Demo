import React from "react";

export default class Demo_005 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null,
            age: null
        };
    }

    componentDidUpdate(prevProps, prevState) {
        // Only update state if the values were null previously
        if (prevState.name === null && prevState.age === null) {
            this.setState({ name: "Aman Gupta", age: 21 });
        }
    }

    render() {
        return (
            <div>
                <h1>This is Demo_005 Component</h1>
                <h2>
                    My name is {this.state.name ?? "Unknown"} and my age is{" "}
                    {this.state.age ?? "Unknown"}
                </h2>
                <button
                    onClick={() =>
                        this.setState({ name: "Aman Gupta", age: 22 })
                    }
                >
                    Click me
                </button>
            </div>
        );
    }
}
