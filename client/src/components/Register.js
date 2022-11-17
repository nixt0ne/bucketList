import React, {useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import NavBar from './NavBar'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Register = () => {

const navigate = useNavigate()
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('Confirmed Password')
const [profile, setProfile] = useState('https://static.thenounproject.com/png/3465604-200.png')
const [backImg, setBackImg] = useState('')
const [errors,setErrors]=useState ({})


const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/register', {
    username,
    email,
    password,
    confirmPassword,
    profile,
    backImg,
},{withCredentials:true})
    
    .then((res)=>{
            e.preventDefault()
            axios.post('http://localhost:8000/api/login', {
            email,
            password,
            
        },{withCredentials:true})
            
            .then((res)=>{
                navigate('/homeProfile')
        
            }).catch((err)=>{
                console.log(err)
            })

        // navigate('/landingPage')

    }).catch((err)=>{
        console.log(err)
        setErrors(err.response.data.errors)
    })
}

  return (
    <div className='card w-75 mx-auto p-3' style={{backgroundColor: "lightgrey", opacity: ".9"}}>
        <h1 style={{color: "#1976d2"}}>Sign Up</h1>
        <form  onSubmit={submitHandler} className='col mx-auto mt-1'>
            <div className='justify-content-between'>
            <div>
                            <Box
                            
                            sx={{
                                '& > :not(style)': { mb: 0, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="filled-input" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}} size="small"  label="User Name" variant="filled" onChange={(e)=> setUsername(e.target.value)}/>
                            </Box>
                        </div>
                        { errors.username ? <span className="text-danger">{errors.username.message}</span> :null}<br></br>
                        <div>
                            <Box
                            
                            sx={{
                                '& > :not(style)': { mb: 0, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="filled-password-input" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}} label="Email" size="small"  variant="filled" onChange={(e)=> setEmail(e.target.value)}  />
                            </Box>
                        </div>
                        { errors.email ? <span className="text-danger">{errors.email.message}</span> :null}<br></br>
                        <div>
                            <Box
                            
                            sx={{
                                '& > :not(style)': { mb: 0, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="filled-password-input" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}} type="password" label="Password" size="small"  variant="filled" onChange={(e)=> setPassword(e.target.value)}/>
                            </Box>
                        </div>
                        { errors.password ? <span className="text-danger">{errors.password.message}</span> :null}<br></br>
                        <div>
                            <Box
                            
                            sx={{
                                '& > :not(style)': { m: 0, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="filled-password-input" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}} size="small" type="password" label="Confirm Password" variant="filled" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                            </Box>
                        </div>
                        { errors.confirmPassword ? <span className="text-danger">{errors.confirmPassword.message}</span> :null}<br></br>
            <div>
                <Button type="submit" className = "mt-3" variant="contained" color="primary" endIcon={<FlareOutlinedIcon />}>
                    Create Account!
                </Button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Register




{/* <button className='btn btn-info mt-3 '>Become A Rider!</button> */}    
                
{/* <div className=' mb-4'>
                    <label>Username:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setUsername(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Email:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Password:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Confirm Password:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setConfirmPassword(e.target.value)}></input>
                </div>
            </div> */}