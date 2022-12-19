import {useState,useEffect} from "react"
import io from "socket.io-client";
var socket; 
const Input=()=>{
    useEffect(()=>{
        socket=io('http://localhost:5005')

    },[])
    const prevCode= localStorage.getItem("code");
    const prevRoom= localStorage.getItem("room");
    
    const [code,setCode]=useState(prevCode);
    const [room,setRoom]=useState(prevRoom);
    if(prevCode){
        socket?.emit("codeWritten",prevCode,room);
    }
    //    console.log(prevCode,"prev");
    const handelChange=(e)=>{
        // console.log(e.target.value);
        console.log(code,"code");
        localStorage.setItem("code",e.target.value);
        setCode(e.target.value);
            socket.emit("codeWritten",e.target.value,room);
    }   
   
    useEffect(()=>{
        socket.on("recieveCode",(data)=>{
            setCode(data);
        })
    },[socket]);

    console.log(room,"click");
    const handelClick=()=>{
        localStorage.setItem("room",room);
        socket.emit("joinRoom",room);
    } 
    // console.log(socket.connected);
    return(
        <> 
        <input style={{ alignSelf:"center"}} placeholder="write your code here" onChange={handelChange} value={code||""}/>
        <input  style={{margin:"200px", position:"center"}} placeholder="Room Id" onChange={(e)=>setRoom(e.target.value)} value={room}/>
        <button onClick={handelClick}>Join room</button>
        <button onClick={()=>{
            socket.emit("leave",room)
        }}>Leave room</button>
        <button onClick={()=>{
            localStorage.removeItem("code");
            localStorage.removeItem("room");
        }}>Leave interview</button>
        <p>{code}</p>
        <button>Compile</button>
        </>
    )

}

export default Input;