import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Quiz() {
    let[question,setquestion]=useState([])
    let[current,setcurret]=useState(1)
    let[score,setscore]=useState(0)
    let[time,settime]=useState(0)
    useEffect(()=>{
        let inter=setInterval(()=>{
          settime((prev)=>prev+1)
        },1000)
        return ()=>clearInterval(inter);
    },[])
    if(time==10){
      setcurret(current+1)
      settime(0);
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/Qustions").then((res)=>setquestion(res.data))
    },[])
    if(question.length==0){
        return <p>loading</p>
    }
    let q=question.find((q)=>q.id==current)
    console.log(q)
    if(question.length+1==current){
        return <p>complete {score}</p>
    }
    function verify(opt){
       if(opt==q.answer){
        setscore(score+1)
        setcurret(current+1)
       }
       else{
        setcurret(current+1)
       }
    }

  return (
    <div>
        {score}
        {time}
        <p>{q.Qustion}</p>
        {q.option.map((opt,idx)=><><button style={{width:"150px", margin:"5px"}}key={idx} onClick={()=>verify(opt)}>{opt}</button><br/></>)}
    
    </div>
  )
}

export default Quiz