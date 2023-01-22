import { useState } from "react"

export const Menu = () => {
    const [count, setCount] = useState(0);
    let counter = 0;
    const counterApp = () => setCount(count + 1)
    return <div className="App">
        <h1>This Is The Menu Page</h1>
        <button onClick={counterApp}>Counter</button>
        <h2>{count}</h2>
    </div>

}

