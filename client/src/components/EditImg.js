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
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ColorLensIcon from '@mui/icons-material/ColorLens';


const EditProfile = () => {

    const [profile,setProfile] = useState('')
    const [backImg, setBackImg] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [id, setId] = useState('')


    // const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{

            setProfile(res.data.profile)
            setBackImg(res.data.backImg)


        })
        .catch((err)=>{
            console.log(err)

        })
    },[])

const submitHandler = (e) =>{
    e.preventDefault()
    axios.put('http://localhost:8000/api/updateUser',{
        profile,
        backImg,
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
    <div className='card col-7 p-3'  style={{backgroundColor: "lightgrey", opacity: ".9"}} >
        <h1 >Add/Edit Profile Images:</h1>
        <form  onSubmit={submitHandler} className='col mx-auto'>
        <div className='justify-content-between'>
            <div className="d-flex justify-content-between align-items-center ">
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>Profile Image:</h4>
                </div>
                <div>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 5, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField size="small" style={{backgroundColor: "white", opacity: ".7", borderRadius: "5px"}} value = {profile} id="outlined-basic" label="" variant="outlined" onChange={(e)=> setProfile(e.target.value)}/>
                    </Box>
                </div>
            </div>
            {/* <div  className='d-flex justify-content-between align-items-center'>
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>Background Image:</h4>
                </div>
                <div>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField size="small" value = {backImg} id="outlined-basic" label="" variant="outlined" onChange={(e)=> setBackImg(e.target.value)}  />
                    </Box>
                </div>
            </div> */}
            <div className='d-flex justify-content-between align-items align-items-center'>
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>Password:</h4>
                </div>
                <div className=''>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 2, width: '25ch' },
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
                <Button type="submit" className = "mt-3" variant="contained" color="primary" endIcon={<ColorLensIcon />}>
                    Change Your Profile!
                </Button>
            </div>
        </div>
        </form>
    </div>
    
    // <div className='card p-3'>
    //     <h1>Add/Edit Profile Images:</h1>
    //     <form  onSubmit={submitHandler} className='col mx-auto'>
    //     <div className='justify-content-between'>
    //         <div>
    //             <Box
    //             component="form"
    //             sx={{
    //                 '& > :not(style)': { mb: 2, width: '30ch' },
    //             }}
    //             noValidate
    //             autoComplete="off"
    //             >
    //             <TextField size="small" value = {profile} id="outlined-basic" type="outlined"  label="" variant="outlined" onChange={(e)=> setProfile(e.target.value)}/>
    //             </Box>
    //         </div>
    //         <div>
    //             <Box
    //             component="form"
    //             sx={{
    //                 '& > :not(style)': { mb: 2, width: '30ch' },
    //             }}
    //             noValidate
    //             autoComplete="off"
    //             >
    //             <TextField size="small" value = {backImg} id="outlined-basic" label="" variant="outlined" onChange={(e)=> setBackImg(e.target.value)}  />
    //             </Box>
    //         </div>
    //         <div>
    //             <Box
    //             component="form"
    //             sx={{
    //                 '& > :not(style)': { mb: 2, width: '30ch' },
    //             }}
    //             noValidate
    //             autoComplete="off"
    //             >
    //             <TextField size="small" id="outlined-password-input" type="password" label="Password" variant="outlined" onChange={(e)=> setPassword(e.target.value)}/>
    //             </Box>
    //         </div>
    //         <div>
    //             <Button type="submit" className = "mt-3" variant="outlined" color="primary" endIcon={<CheckroomIcon />}>
    //                 Polish It!
    //             </Button>
    //         </div>
    //         </div>
            
    //     </form>
    // </div>
  )
}

export default EditProfile