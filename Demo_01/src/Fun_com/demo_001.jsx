import React from "react";

export default function Demo_001() {
    //   ----------------------------------
    // function testfun() {
    //     alert("This is Demo_001 Component");
    // }
    //   ------------   or   ----------------
    const testfun = () => {
        alert("This is Demo_001 Component");
    }
    //   -----------------------------------
    return (
        <>
        <div>
            <h1>This is Demo_001 Component</h1>
            <button onClick={testfun}>clict me</button>
        </div>
        </>
    )
}