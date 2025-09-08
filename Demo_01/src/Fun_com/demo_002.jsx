import React, { useState } from 'react'

export default function demo_002() {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(21);

    

  return (
    <div>
        <h2>My name is {name ?? "Aman Gupta"} and my age is {age ?? "Unknown"}</h2>

        <button onClick={() => setAge(age+1)}>click me</button>
    </div>
  )
}
