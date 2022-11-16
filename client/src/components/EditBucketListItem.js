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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TextField from '@mui/material/TextField';


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
    <div className='p-4' style={{backgroundImage: `url("https://thumbs.dreamstime.com/z/seamless-pattern-memphis-style-vector-illustration-design-website-background-banner-retro-abstract-geometric-element-63225817.jpg")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "635px"}}>
        <div className='' >
            <img style={{width: 300, height: 300, borderRadius: '70%'}} className='justify-content-center ' src="https://as1.ftcdn.net/v2/jpg/01/29/71/80/1000_F_129718004_GFEyZoopoBQ7emapFD2o5QwF6UIdGx7N.jpg"/>
            {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
        </div>

        <form className="card mt-3 col-5 mx-auto p-2" onSubmit={submitHandler}>
        <div className="d-flex mx-auto mt-2" >
                <AutoAwesomeIcon/>
                    <h1 style={{color: "black"}} > Get Your Best Gear Fit! </h1>
                <AutoAwesomeIcon/>
            </div>
            <h4 style={{color: "black", fontSize: "15px"}} > Choose your selections below to get your custom results: </h4>
            <div className="w-50 mx-auto" style={{height:"50px"}}>
                
           <Box
                sx={{
                    '& > :not(style)': { mb: 0, width: '30ch', },
                }}
                noValidate
                autoComplete="off"
                >
                < TextField id="outlined-basic" value= {name} size="small" label="Name" variant="outlined" onChange={(e)=> setName(e.target.value)}/>
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
                < TextField id="outlined-basic" value= {activity} size="small" label="activity" variant="outlined" onChange={(e)=> setActivity(e.target.value)}/>
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
                < TextField id="outlined-basic" value= {description} size="small" label="Description" variant="outlined" onChange={(e)=> setDescription(e.target.value)}/>
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
                < TextField id="outlined-basic" value= {date}  size="small" label="Date" variant="outlined" onChange={(e)=> setDate(e.target.value)}/>
            </Box>
        { errors.date ? <span className="text-danger">{errors.date.message}</span> :null}<br></br>
    </div>

    <Button type="submit" className = "mx-auto" variant="contained" endIcon={<RocketLaunchIcon/>}>Get Your Custom Fit!</Button>


            </form>
        </div>
    </div>
)


}

export default EditBucketListItem;