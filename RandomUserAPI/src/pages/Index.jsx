import React from 'react'
import { useState } from 'react'

const Index = () => {

    const [count, setCount] = useState(0);

    const onclick = async () => {
        setCount(prevcount => prevcount + 1);
    }

    const RandomUser = 'https://randomuser.me/api';

    const RandomUserAPI = () => {
        console.log(RandomUser);
    }

    return (
        <>

            

            <h1>{ count }</h1>
            <span>
                <input type='number' value={ count } onChange={(e) => setCount(Number(e.target.value)) }></input>  
                <button onClick={RandomUserAPI}>Count</button>
            </span>
            
        </>
    )
}

export default Index