import React from "react";
import './App.css';
import { useForm } from "react-hook-form";
function FormValidation(){
  const {register,handleSubmit,formState:{errors}}=useForm()
  const callFun=(data)=>{
//console.log(data);

alert("Thank  you !!! You're Sign in ")
  }

  function otpGenerate(){
    var digits='0123456789'
    let OTP=''
    for(let i=0; i<6; i++){
    OTP+=digits[Math.floor(Math.random()*10)]
  }
  alert("Your OTP is :"+OTP)
  }
  return(
    <div className="container">
        <h2>Create an Account - Form Validation</h2>

 <form id="form" onSubmit={handleSubmit(callFun)}>
          <input type="text" name="username"{...register("username", {required:true,minLength:5})} placeholder="User Name"></input><br></br>
          {errors.username && errors.username.type==="required" && <font color="red">Please Enter Your Username</font>}
          {errors.username && errors.username.type==="minLength" && <font color="red">Username Very Short</font>}<br></br>

          <input type="password"name="pwd"{...register("pwd",{required:true,minLength:8})} placeholder="Password"></input><br></br>
          {errors.pwd && errors.pwd.type==="required" && <font color="red">Please Enter Your Password</font>}
          {errors.pwd && errors.pwd.type==="minLength" && <font color="red">Minimum Enter 8 Characters</font>}<br></br>

          <input type="password"name="Correctpwd"{...register("Correctpwd",{required:true,minLength:8})} placeholder="Confirm Password"></input><br></br>
          {errors.Correctpwd && errors.Correctpwd.type==="required" && <font color="red">ReEnter Password </font>}
          {errors.Correctpwd && errors.Correctpwd.type==="minLength" && <font color="red">Enter Correct Password </font>}<br></br>

          <input type="email"name="email"{...register("email",{required:true})}placeholder="EmailID"></input><br></br>
          {errors.email && errors.email.type==="required" && <font color="red">Please Enter Email ID</font>}<br></br>

 <input type="number"name="mobile"{...register("mobile",{required:true,maxLength:10,minLength:10})} placeholder="Mobile Number"></input><br></br>
          {errors.mobile && errors.mobile.type==="required" && <font color="red">Please Enter Your Mobile Number</font>}
          {errors.mobile && errors.mobile.type==="minLength" && <font color="red">Mobile Number too short</font>}
          {errors.mobile && errors.mobile.type==="maxLength" && <font color="red">Mobile Number too Exceed</font>}<br></br>
          
          <div className="OTP">
           <button class="OTPbtn"onClick={otpGenerate}>GenerateOTP</button>&nbsp;
           <input type="text" name="submit"{...register("submit",{required:true,maxLength:6,minLength:6})} placeholder="Enter OTP"></input><br></br>
          {errors.submit && errors.submit.type==="required" && <font color="red">Please Enter Your OTP</font>}
          {errors.submit && errors.submit.type==="maxLength" && <font color="red">OTP Mismatch</font>}
          {errors.submit && errors.submit.type==="minLength" && <font color="red">OTP Mismatch</font>}<br></br>
          </div>
          <input type="Submit" className="submitBtn" ></input>
        </form>
    </div>
  )
  }
export default FormValidation

