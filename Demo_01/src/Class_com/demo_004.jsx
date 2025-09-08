import react from 'react';

export default class Demo_004 extends react.Component {
    constructor() {
        super();
        this.state = {
            name: "Aman Gupta",
            age: 21
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "Aman", age: 22 })
        }, 5000);
    }

    render() {
        return (
            <>
                <div>
                    <h1>This is Demo_004 Component</h1>
                    <h2>My name is {this.state.name} and my age is {this.state.age}</h2>
                </div>
            </>
        );
    }
}