import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const EditProfile = () => {

    const [username,setUserName] = useState('')
    const [email, setEmail] = useState('')
    // const [footSize, setFootSize] =useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [id, setId] = useState('')


    // const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{

            setUserName(res.data.username)
            setEmail(res.data.email)
            // setPassword(res.data.password)
            // setId(res.data._id)
            // setFootSize(res.data.footSize)


        })
        .catch((err)=>{
            console.log(err)
            // setNoId('Pets not found using that ID')
        })
    },[])

const submitHandler = (e) =>{
    e.preventDefault()
    axios.put('http://localhost:8000/api/updateUser',{
        username,
        email,
        password,

},{withCredentials:true})
    .then((res)=>{
        console.log(res)
        navigate('/homeProfile')
    })
    .catch((err)=>{
        console.log(err)
        setErrors(err.response.data.errors)
    })
}

  return (
    <div className='card col-7 p-3 '  style={{backgroundColor: "lightgrey", opacity: ".9"}} >
        <h1 >Edit Your Profile:</h1>
        <form  onSubmit={submitHandler} className='col mx-auto'>
        <div className='justify-content-between'>
            <div className="d-flex justify-content-between align-items-center ">
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>User Name:</h4>
                </div>
                <div>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 0, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField size="small" style={{backgroundColor: "white", opacity: ".7", borderRadius: "5px"}} value = {username} id="outlined-basic" label="" variant="outlined" onChange={(e)=> setUserName(e.target.value)}/>
                    </Box>
                </div>
                
            </div>
            { errors.username ? <span className="text-danger">{errors.username.message}</span> :null}<br></br>
            <div  className='d-flex justify-content-between align-items-center'>
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>Email:</h4>
                </div>
                <div>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 0, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField size="small" style={{backgroundColor: "white", opacity: ".7", borderRadius: "5px"}} value = {email} id="outlined-basic" label="" variant="outlined" onChange={(e)=> setEmail(e.target.value)}  />
                    </Box>
                </div>
            </div>
            { errors.email ? <span className="text-danger">{errors.email.message}</span> :null}<br></br>
            <div className='d-flex justify-content-between align-items align-items-center'>
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>Password:</h4>
                </div>
                <div className=''>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 0, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField  size="small" style={{backgroundColor: "white", opacity: ".7", borderRadius: "5px"}} id="outlined-password-input" type="password" label="Password" variant="outlined" onChange={(e)=> setPassword(e.target.value)}/>
                    </Box>
                </div>
            </div>
            { errors.password ? <span className="text-danger">{errors.password.message}</span> :null}<br></br>
            <div>
                <Button type="submit" className = "mt-3 mb-3" variant="contained" color="primary" endIcon={<TrendingUpIcon />}>
                    Change Your Credentials!
                </Button>
            </div>
        </div>
            
        </form>
    </div>
  )
}

export default EditProfile