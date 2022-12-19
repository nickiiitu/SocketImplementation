import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket =io.connect( 'http://localhost:5005')


const Display=()=>{
    const [code ,setCode]=useState("");
    // useEffect(()=>{
    //     console.log("useEffectCa");
    //     socket.on("recieveCode",(data)=>{
    //         setCode(data);
    //     })
    // },[socket]);

    return (
        <div>
            <p>This is the code</p>
            <p>{code}</p>
        </div>
    )

}

export default Display;