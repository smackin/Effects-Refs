import React, {useEffect, useState} from "react";

function Counter () {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(n => n + 1);
    }; 
    useEffect(() => {
        console.log("***CHANGING TITLE!!")
        document.title = `CHECK IT OUT ${'!'.repeat(num)}`
    })
    
    return (
        <div>
            {console.log("....RENDERING AND RENDERING AND... ")}
            LETS GET EXCITED!!!! 
            <button onClick={increment}>GET EVEN MORE EXCITED</button>
            <p>Counter: {num}</p>
        </div>
    );
}

export default Counter;