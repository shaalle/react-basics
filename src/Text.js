import React from "react"
import { useState, useEffect } from "react"
export const Text = () => {
    const [text, showText] = useState("");

    useEffect(()=>{
        console.log('COMPONENT MOUNTED')
        return () => {
            console.log('COMPONENT UNMOUNTED')
        };
    }, []);

    return(
        <div>
            <input onChange={(event)=>{
                showText(event.target.value)
            }} />
            <h1>{text}</h1>
        </div>
    );
}