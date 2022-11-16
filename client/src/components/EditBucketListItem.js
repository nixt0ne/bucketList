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


// const processData = (infoObj) => {
//     const {name, style, height} = infoObj
    
//     let bootStyle= "Boot Style NA"
//     let bindingStyle= "Binding Style NA"
//     let boardStyle= "Board Style NA"
//     let boardHeight = "Board Height NA"

//     if (style === 'All-Mountain') {
//         if(height === "4"){
//             boardHeight = "4.6"
//         }else if (height==="5"){
//             boardHeight = "5.6"
//         }else if (height==="6"){
//             boardHeight = "6.6"
//         }
    
//     }else if(style === 'FreeStyle') {
//         if(height === "4"){
//             boardHeight = "3.6"
//         }else if (height==="5"){
//             boardHeight = "4.6"
//         }else if (height==="6"){
//             boardHeight = "5.6"
//         }
//     }else if (style === "Back-Country"){
//         if(height === "4"){
//             boardHeight = "3.8"
//         }else if (height==="5"){
//             boardHeight = "4.8"
//         }else if (height==="6"){
//             boardHeight = "5.8"
//         }
//     }

//     if (style === 'All-Mountain') {
//         bootStyle = "Stiff"
//     }else if(style === 'FreeStyle') {
//         bootStyle = 'Flexible'
//     }else if (style === "Back-Country"){
//         bootStyle = "Mid-Range Flex"
//     }

//     if (style === 'All-Mountain') {
//         bindingStyle = "Stiff"
//     }else if(style === 'FreeStyle') {
//         bindingStyle = 'Flexible'
//     }else if (style === "Back-Country"){
//         bindingStyle = "Mid-Range Flex"
//     }

//     if (style === 'All-Mountain') {
//         boardStyle = "Directional Twin"
//     }else if(style === 'FreeStyle') {
//         boardStyle = 'True Twin'
//     }else if (style === "Back-Country"){
//         boardStyle = "Directional"
//     }

//     // 'All-Mountain','FreeStyle', 'Back-Country'

//     return {
//         name,
//         style,
//         height,
//         boardStyle,
//         bindingStyle,
//         bootStyle,
//         boardHeight,

//     }
// }


const EditBucketListItem = () => {

    // const [name,setName] = useState('')
    const [name, setName] = useState('')
    // const [footSize, setFootSize] =useState('')
    const [activity, setActivity] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({})


    const {id} = useParams()
    const navigate = useNavigate()


    // might be only for have a list selector not general input box
    // const handleChangeName = (event) => {
    //     setName(event.target.value);
    //   };
    // const handleChangeDate = (event) => {
    //     setDate(event.target.value);
    // };
    // const handleChangeactivity = (event) => {
    //     setActivity(event.target.value);
    //     };
    // const handleChangeDescription = (event) => {
    // setDescription(event.target.value);
    // };


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneItem/${id}`,{withCredentials:true})
        .then((res)=>{
            // setName(res.data.name)
            setName(res.data.name)
            setDate(res.data.date)
            setActivity(res.data.activity)
            setDescription(res.data.description)
            // setFootSize(res.data.footSize)


        })
        .catch((err)=>{
            console.log(err)
            // setNoId('Pets not found using that ID')
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
        // processData({style, height})
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
                < TextField id="outlined-basic" size="small" label="Name" variant="outlined" onChange={(e)=> setName(e.target.value)}/>
            </Box>


                
                
                {/* <Box sx={{ minWidth: 120 }}>
                    <FormControl size="small" fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Style
                        </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={name}
                        label="Name"
                        onChange={handleChangeName}
                        >
                        <MenuItem value="All-Mountain">All-Mountain</MenuItem>
                        <MenuItem value="FreeStyle">FreeStyle</MenuItem>
                        <MenuItem value="Back-Country">Back-Country</MenuItem>
                    </Select>
                </FormControl>
            </Box> */}
            { errors.name ? <span className="text-danger">{errors.name.message}</span> :null}<br></br>
    </div>

    <div className="w-50 mx-auto" style={{height:"50px"}}>
        {/* <Box sx={{ minWidth: 120 }}>
                <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Height
                    </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={height}
                    label="height"
                    onChange={handleChangeHeight}
                    >
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                </Select>
            </FormControl>
        </Box> */}

<Box
                sx={{
                    '& > :not(style)': { mb: 0, width: '30ch', },
                }}
                noValidate
                autoComplete="off"
                >
                < TextField id="outlined-basic" size="small" label="activity" variant="outlined" onChange={(e)=> setActivity(e.target.value)}/>
            </Box>

        { errors.activity ? <span className="text-danger">{errors.activity.message}</span> :null}<br></br>
    </div>

    <div className="w-50 mx-auto" style={{height:"50px"}}>
        {/* <Box sx={{ minWidth: 120 }}>
                <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Height
                    </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={height}
                    label="height"
                    onChange={handleChangeHeight}
                    >
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                </Select>
            </FormControl>
        </Box> */}

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
        {/* <Box sx={{ minWidth: 120 }}>
                <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Height
                    </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={height}
                    label="height"
                    onChange={handleChangeHeight}
                    >
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                </Select>
            </FormControl>
        </Box> */}
            <Box
                sx={{
                    '& > :not(style)': { mb: 0, width: '30ch', },
                }}
                noValidate
                autoComplete="off"
                >
                < TextField id="outlined-basic" size="small" label="Date" variant="outlined" onChange={(e)=> setDate(e.target.value)}/>
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