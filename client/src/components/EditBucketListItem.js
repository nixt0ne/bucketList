import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import TextField from '@mui/material/TextField';
import logo1 from '../Images/logo1.png'



const dateFormat = (date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
} 



const EditBucketListItem = () => {

    const [name, setName] = useState('')
    const [activity, setActivity] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})


    const {id} = useParams()
    const navigate = useNavigate()



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneItem/${id}`,{withCredentials:true})
        .then((res)=>{
            setName(res.data.name)
            setDate(res.data.date)
            setActivity(res.data.activity)
            setDescription(res.data.description)



        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

const submitHandler = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/updateItem/${id}`, {
        name,
        date,
        description,
        activity,
    }

        ,{withCredentials:true, credentials:'include'})
    .then((res)=>{
        console.log(res)
        navigate(`/oneItem/${id}`)
    })
    .catch((err)=>{
        console.log(err)
        setErrors(err.response.data.errors)
    })
}

return (
    <div className="mx-auto" >
    <div className='d-flex row' style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?travel")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "97.5vh", width:"99.2vw"}}>
        <div className='col my-auto' >
            <img style={{width: 300, height: 300, borderRadius: '70%'}} className='justify-content-center ' src={logo1}/>
            {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
        </div>
        <div className='col my-auto'>
            <form className="card mt-3 col-7 mx-auto p-2" style={{backgroundColor: "lightgrey", opacity: ".9"}} onSubmit={submitHandler}>
            <div className="d-flex mx-auto  mt-2" >
                    <AutoAwesomeIcon/>
                        <h1 style={{color: "black"}} > Edit Your List</h1>
                    <AutoAwesomeIcon/>
                </div>
                <h4 style={{color: "black", fontSize: "15px"}} > Edit Items Below</h4>
                <div className="w-50 mx-auto mb-4" style={{height:"50px"}}>
                    
            <Box
                    sx={{
                        '& > :not(style)': { mb: 1, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    < TextField id="filled-input" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}} value= {name} size="small" label="Name" variant="filled" onChange={(e)=> setName(e.target.value)}/>
                </Box>               
                { errors.name ? <span className="text-danger">{errors.name.message}</span> :null}<br></br>
        </div> 

        <div className="w-50 mx-auto mb-4" style={{height:"50px"}}>

    <Box
                    sx={{
                        '& > :not(style)': { mb: 3, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    < TextField id="filled-password-input" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}} value= {activity} size="small" label="Activity" variant="filled" onChange={(e)=> setActivity(e.target.value)}/>
                </Box>

            { errors.activity ? <span className="text-danger">{errors.activity.message}</span> :null}<br></br>
        </div>

        <div className="w-50 mx-auto mb-4" style={{height:"50px"}}>
        
                <Box
                    sx={{
                        '& > :not(style)': { mb: 3, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    < TextField id="filled-password-input" style={{backgroundColor: "white", opacity: "", borderRadius: "5px"}} value= {description} size="small" label="Description" variant="filled" onChange={(e)=> setDescription(e.target.value)}/>
                </Box>

            { errors.description ? <span className="text-danger">{errors.description.message}</span> :null}<br></br>
        </div>

        <div className="w-50 mx-auto mb-2" style={{height:"50px"}}>
            
                <Box
                    sx={{
                        '& > :not(style)': { mb: 5, width: '30ch', },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        {/* {date}
                        {typeof date} */}
                        <input type="date" id="outlined-basic" name=""  style={{backgroundColor: "white", opacity: ".7", borderRadius: "5px"}}  value={dateFormat(new Date(date))}  label="Date" size="small"variant="outlined" onChange={(e)=> setDate(e.target.value)}></input>
                    {/* < TextField id="outlined-basic" value= {date}  size="small" label="Date" variant="outlined" onChange={(e)=> setDate(e.target.value)}/> */}
                </Box>
            { errors.date ? <span className="text-danger">{errors.date.message}</span> :null}<br></br>
        </div>
        <div className='mb-3'>
            <Button type="submit" className = "mx-auto" variant="contained" endIcon={<AutoFixHighRoundedIcon/>}>Edit List!</Button>
        </div>

                </form>
                </div>
        </div>
    </div>
)


}

export default EditBucketListItem;