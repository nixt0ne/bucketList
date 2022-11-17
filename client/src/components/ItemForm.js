import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import NavBar from "./NavBar";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import TextField from '@mui/material/TextField';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import logo from '../Images/logo.png'
import { Input } from "@mui/material";
// import Moment from "moment";


const ItemForm = () => {
    const [name, setName] = useState('')
    const [activity, setActivity] = useState('')
    // const [date, setDate] = useMoment('').format('DD-MM-YYYY')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})
 
    
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/createItem', {
            // processData({style, height})
        
            name:name,
            activity:activity,
            date:date,
            description:description,
        }
        ,{withCredentials:true}
            
        ).then((res)=>{
            console.log(res.data)
            navigate("/homeProfile")
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className="mx-auto" >
        <div className='p-4' style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?adventure")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "635px"}}>
            <div className='' >
                <img style={{width: 500, height: 500, borderRadius: '70%'}} className='justify-content-center ' src={logo}/>
                {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
            </div>
    
            <form className="card mt-3 col-5 mx-auto p-2" onSubmit={submitHandler}>
            <div className="d-flex mx-auto mt-2" >
                    <AutoAwesomeIcon/>
                        <h1 style={{color: "black"}} > Create Your List! </h1>
                    <AutoAwesomeIcon/>
                </div>
                <h4 style={{color: "black", fontSize: "15px"}} > Make Your Dreams Come True! </h4>
                <div className="w-50 mx-auto" style={{height:"50px"}}>
                    
               <Box
                    sx={{
                        '& > :not(style)': { mb: 0, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    < TextField id="outlined-basic" size="small" label="Name" variant="outlined" onChange={(e)=> setName(e.target.value)}/>
                </Box>
    
                { errors.name ? <span className="text-danger">{errors.name.message}</span> :null}<br></br>
        </div>
    
        <div className="w-50 mx-auto" style={{height:"50px"}}>
    
    <Box
                    sx={{
                        '& > :not(style)': { mb: 0, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    < TextField id="outlined-basic" size="small" label="Activity" variant="outlined" onChange={(e)=> setActivity(e.target.value)}/>
                </Box>
    
            { errors.activity ? <span className="text-danger">{errors.activity.message}</span> :null}<br></br>
        </div>
    
        <div className="w-50 mx-auto" style={{height:"50px"}}>
    
                <Box
                    sx={{
                        '& > :not(style)': { mb: 0, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    < TextField id="outlined-basic" size="small" label="Description" variant="outlined" onChange={(e)=> setDescription(e.target.value)}/>
                </Box>
    
            { errors.description ? <span className="text-danger">{errors.description.message}</span> :null}<br></br>
        </div>
    
        <div className="w-50 mx-auto" style={{height:"50px"}}>
                <Box
                    sx={{
                        '& > :not(style)': { mb: 0, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <input type="Date" id="outlined-basic" name="" label="Date" size="small"variant="outlined"onChange={(e)=> setDate(e.target.value)}></input>

                    {/* < Input id="start" input type = "date" size="small" label="Date" variant="outlined"  value="2018-07-22"onChange={(e)=> setDate(e.target.value)}/> */}
                </Box>
            { errors.date ? <span className="trip-start">{errors.date.message}</span> :null}<br></br>
        </div>
    
        <Button type="submit" className = "mx-auto" variant="outlined" endIcon={<AddCircleOutlineRoundedIcon/>}>Create List Item!</Button>
                </form>
            </div>
        </div>
    )
    
    
    }
    

export default ItemForm;