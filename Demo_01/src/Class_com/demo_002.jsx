import React from "react";

export default class Demo_002 extends React.Component {

    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <>
                <div>
                    {
                        this.state.show ?
                            <h1>This is Demo_002 Component</h1> 
                            :null
                    }
                    <button onClick={() => {this.setState({show:false})}}>hide text</button>
                    <br /><br />
                    <button onClick={() => {this.setState({show:!this.state.show})}}>Toggle</button>
                </div>
            </>
        )
    }
}