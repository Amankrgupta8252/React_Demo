import React from "react";

export default class Demo_003 extends React.Component {
    testfun() {
        alert("This is Demo_003 Component");
    }

    render() {
        return (
            <>
                <div>
                    <h1>This is Demo_003 Component</h1> 
                    {/* <button onClick={this.testfun.bind(this)}>Click Me</button> */}
                    <button onClick={() => {this.testfun()}}>click me</button>
                </div>
            </>
        );
    }
}
