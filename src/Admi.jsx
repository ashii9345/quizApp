import React, { useState } from 'react'
import axios from 'axios'
import './admin.css'
import { useNavigate } from 'react-router-dom';
function Admi() {
  let nav=useNavigate()
    let [count,setCount]=useState(3);
    let[question,setquestion]=useState("")
    let[opt1,setopt1]=useState("")
    let[opt2,setopt2]=useState("")
    let[opt3,setopt3]=useState("")
    let[opt4,setopt4]=useState("")
    let[answer,setanswer]=useState("")
    function handleadd (){
         if(question.trim()==""||opt1.trim()==""||opt2.trim()==""||opt3.trim()==""||opt4.trim()==""||answer.trim()==""){
          return
         }
         axios.post("http://localhost:3000/Qustions",{
            id:count,
            Qustion:question,
            option:[opt1,opt2,opt3,opt4],
            answer:answer
         }).then((res)=>setCount((prev)=>prev+1))
         setquestion("")
         setopt1("")
         setopt2("")
         setopt3("")
         setopt4("")
         setanswer("")
    }
  return (
    <div className='admin'>
        <input type='text' onChange={(e)=>setquestion(e.target.value)} value={question}placeholder='enter the Question'></input><br />
        <input type='text' onChange={(e)=>setopt1(e.target.value)} value={opt1}placeholder='option1'></input><br/>
        <input type='text' onChange={(e)=>setopt2(e.target.value)} value={opt2}placeholder='option2'></input><br/>
        <input type='text' onChange={(e)=>setopt3(e.target.value)} value={opt3}placeholder='option3'></input><br/>
        <input type='text' onChange={(e)=>setopt4(e.target.value)} value={opt4}placeholder='option4'></input><br/>
        <input type='text' onChange={(e)=>setanswer(e.target.value)} value={answer}placeholder='answer'></input><br/>
        <button onClick={handleadd}>add</button> 
        <button onClick={()=>nav("/")}>LOGOUT</button>

    </div>
  )
}

export default Admi