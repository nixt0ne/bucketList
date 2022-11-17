import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import NavBar from './NavBar';
import Button from '@mui/material/Button';
import LandscapeIcon from '@mui/icons-material/Landscape';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AcUnitIcon from '@mui/icons-material/AcUnit';


const Profile = () => {

    const [list,setList] = useState([])
    const navigate = useNavigate()

    // This is user login/reg
    const [username, setUserName] = useState('')
    const [profile, setProfile] = useState('')
    const [backImg, setBackImg] = useState('')
    const {id} = useParams()


    // This is user login/reg
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{
            console.log("res.data", res)
            setProfile(res.data.profile)
            setBackImg(res.data.backImg)
            // setPassword(res.data.password)
            // setId(res.data._id)
            // setFootSize(res.data.footSize)
    
    
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    useEffect(()=>{
        axios.get('http://localhost:8000/api/homeProfile', {withCredentials:true})
        .then((res)=>{
            console.log(res.data)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const removeFromList= (id) => {
        console.log(list)
        setList(list.filter(bList=>bList._id !== id))

    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteItem/${id}`,{withCredentials:true})
        .then((res)=>{
            console.log(id)
            removeFromList(id)
            navigate('/homeProfile')
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return(
            <div >
                    
                    {/* If we want to have a user profile image and user background image */}
                    <div className='p-5 justify-contents-center' >
                        {/* <div className='p-5 justify-contents-center' style={{backgroundImage: `url(${backImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}> */}
                        <Link to={'/editProfilePage'}><img className='border border-5 border-light' src={profile} style={{width: 200, height: 200, borderRadius: '50%'}}/></Link>
                        {/* </div> */}
                    </div>
                    {/* <div className=' d-flex mx-auto justify-content-evenly align-items-center' style={{backgroundColor: 'lightgrey'}}>
                        <div>
                            <Link to={'/snowboardGearSelector'} style={{textDecoration: 'none'}}><Button type="button" className = "m-3 col" variant="contained" endIcon={<RocketLaunchIcon/>}>Click to get your custom fit here!</Button></Link>
                        </div>
                        <div>
                            <AcUnitIcon color="primary" />
                        </div>
                        <div>
                            <Link to={'/riderForum'}><Button type="button" className = "m-3 col" variant="contained" endIcon={<GroupsIcon />}>Check out other riders on the forum</Button></Link>
                        </div>
                    </div> */}

        </div>

    )
}


export default Profile;