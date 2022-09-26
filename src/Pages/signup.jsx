import React,{useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { db } from '../db';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [user,setUser]=useState({Name:"",Email:"",PhoneNo:"",Gender:"",Password:"",ConfirmPassword:""});
  // const [data,setData]=useState([])
  const move =useNavigate();
  const handleInput=(e)=>{
    
    const {value,name}=e.target;
    setUser(()=>{
      return{
        ...user,[name]:value
      }
    }
    );

  };
  const adddata=(e)=>{
    e.preventDefault();
    // var users=JSON.parse(localStorage.getItem('register') || "[]")
    var{Name,Email,PhoneNo,Gender,Password,ConfirmPassword}=user;
    if(Name===""){alert("Name is required")}
    else if(Email===""){alert("Email is required")}
    else if(PhoneNo===""){alert("Contact No is required")}
    else if(Gender===""){alert("Gender is required")}
    else if(Password===""){alert("Password is required")}
    else if(Password.length<5){alert("Password length should be greater than 5")}
    else if(ConfirmPassword===""){alert("Confirm Password is required")}
    else if(Password!==ConfirmPassword){alert("Password and Confirm Password should be same")}
    else{
      db.transaction("rw", db.userdata, function* () {
        var friend1Id = yield db.userdata.add({
          Name:Name,
          Email:Email,
          PhoneNo:PhoneNo,
          Gender:Gender,
          Password:Password,
          ConfirmPassword:ConfirmPassword
        });
      });
      move("/Details");
      
    }
}
  const paperstyle = { padding: '20px 20px', width: 300, margin: '75px auto', color: '#000ff' }
  return (
    <Grid>
      <Paper style={paperstyle}>
        <Grid align="center">
          <Avatar>
             <AddCircleOutlineOutlinedIcon/>
          </Avatar>
          <h2>Sign Up </h2>
        </Grid>
        <form margin='dense'>
          <TextField fullWidth variant='standard' label='Name' name='Name' placeholder='Enter your Name' value={user.Name} onChange={handleInput}/>
          <TextField fullWidth variant='standard' label='Email' name='Email' placeholder='Enter your Email ID' value={user.Email} onChange={handleInput}/>
          <TextField fullWidth variant='standard' label='PhoneNo' name='PhoneNo' placeholder='Enter your Contact No.' value={user.PhoneNo} onChange={handleInput} />
          <TextField fullWidth variant='standard' label='Gender' name='Gender' placeholder='Enter Male/Female' value={user.Gender} onChange={handleInput} />
          <TextField fullWidth variant='standard' label='Password' name='Password' placeholder='Enter a Strong Password' value={user.Password} onChange={handleInput}/>
          <TextField fullWidth variant='standard' label='ConfirmPassword' name='ConfirmPassword' value={user.ConfirmPassword} onChange={handleInput}/>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultunchecked={"value.toString()"} />} label="I accept the terms and Coditions" />
          </FormGroup>
          <Button type='submit' variant="contained" color='primary' onClick={adddata}>Sign Up</Button>

        </form>
      </Paper>

    </Grid>
  )
}

export default Signup;