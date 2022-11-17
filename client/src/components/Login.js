import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';


const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors]=useState ("")
    


    const submitHandler = (e) => {
        console.log("Hey")
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
        email,
        password,
    },{withCredentials:true})
        
        .then((res)=>{
            console.log("Hi")
            navigate('/homeProfile')
    
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
            // console.log(err.response)
        })
    }

    console.log(errors.email)
    
      return (
        <div className='card w-75 mx-auto p-3' style={{backgroundColor: "lightgrey", opacity: ".9"}}>
            <h1 style={{color: "#1976d2"}}>Login</h1>
            <form  onSubmit={submitHandler} className='col  mx-auto mt-1' style= {{height: "20px"}} >
                <div className='justify-content-between' >
                        {/* <div className='mb-4'>
                            <label className=''>Email:</label>
                        </div> */}
                        {/* { errors.email ? <span className="text-danger">{errors.email.message}</span> :null}<br></br> */}
                        <div className='mb-4'>
                            <Box
                            
                            // background: "grey"
                            sx={{
                                '& > :not(style)': { mb: 0, width: '30ch', },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            < TextField id="filled-basic-success" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}}  label="Email" variant="filled" size="small" onChange={(e)=> setEmail(e.target.value)}/>
                            </Box>
                        </div>
                        <div>
                            <Box
                            
                            
                            sx={{
                                '& > :not(style)': { m: 0, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="filled-password-input"  style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}}  type="password" size="small"  label="Password" variant="filled" onChange={(e)=> setPassword(e.target.value)}/>
                            </Box>
                        </div>
                        { errors ? <span className="text-danger">{errors}</span> :null}<br></br>

                        {/* <div>
                            <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <label className=''>Password:</label>
                        </div>
                        <div>
                            <input type="text" className="form-control" onChange={(e)=> setPassword(e.target.value)}></input>
                        </div>
                    </div>
                    <div> */}
                    <Button type="submit" className = "mt-3" variant="contained" endIcon={<StarOutlineOutlinedIcon/>}>
                        Sign in!
                    </Button>
                </div>
                {/* <button className='btn btn-info mt-3 '></button> */}
            </form>
        </div>
      )
    }
export default Login