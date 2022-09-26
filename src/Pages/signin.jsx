// import React,{useState} from "react";
// import { Grid, Paper, TextField,Button, Typography, Link} from '@mui/material'
// import Avatar from '@mui/material/Avatar';
// import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

// // import Details from "./details";
// import {db} from "../db";
// // import { useLiveQuery } from "dexie-react-hooks";

// const Signin=({handleChange}) =>{

//     const [user,setUser]=useState({Email:"",Password:""});
    

//     const handleInput=(e)=>{
      
//       const {value,name}=e.target;
//       setUser(()=>{
//         return{
//           ...user,[name]:value
//         }
//       }
//       );
  
//     };
    
    
//     const Adddata=(e)=>{
//       e.preventDefault();
//       var {Email,Password}=user;
//       if(Email===""){alert("Email is required")}
//      else if(!Email.includes("@")){alert("Enter a valid email")}
//       else if(Password===""){alert("Password is required")}
//       else{
        
//         // db.transaction('rw', db.userdata, async ()=>{

//           const userArr = await db.userdata.get({Email: Email});
//           if(userArr.Email !== Email || userArr.Password !== Password){alert("Invalid User credentials")}
         
//       });
      
  
//     }
//     }
//     const paperStyle={padding:20, height:'50vh',width:300,margin:"75px auto"}
//     const buttonstyle={margin:"8px 0"}
//     return(
//         <Grid>
//             <Paper style={paperStyle}>
//                 <Grid align="center">
//                     <Avatar>
//                         <LockPersonOutlinedIcon/>
//                     </Avatar>
//                     <h2>SignIn</h2>
//                 </Grid>
//                 <TextField fullWidth required variant='standard' name="Email" label='Email' placeholder="Enter your EmailID" onChange={handleInput}/>
//                 <TextField fullWidth variant='standard' type='password' name="Password" label='Password' placeholder="Enter Password" onChange={handleInput}/>
//                 <Button type='submit' variant="contained" fullWidth style={buttonstyle} onClick={Adddata}> Signin</Button>  
//                 <Typography>
//                     <Link href="#">Forgot Password?</Link>
//                 </Typography>
//                 <Typography> New User?
//                     <Link href="/Signup" onClick={()=>handleChange("event",1)}> SignUp</Link>
//                 </Typography>
                
//             </Paper>

//         </Grid>
//     )
// };

// export default Signin;