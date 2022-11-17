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


const ItemList = () => {

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
            <div className="tests" style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?travel")`, height: "1000px"}}>
                    
                    {/* If we want to have a user profile image and user background image */}
                    <div style={{backgroundColor: 'white'}} className='' >
                        <div className='p-5 justify-contents-center' style={{backgroundImage: `url(${backImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                        <Link to={'/editProfilePage'}><img className='border border-5 border-light' src={profile} style={{width: 200, height: 200, borderRadius: '50%'}}/></Link>
                        </div>
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


                <div className="col-8 mx-auto mt-3">
                        <div className="rounded-top overflow-hidden" style={{color: 'white', backgroundColor: '#0d6efd'}}>
                            <h1>Bucket List</h1>
                        </div>
                </div>
                <div className="col-8 mx-auto text-start">
                    <div className="" style={{backgroundColor: 'white'}}>
                        <table className=" table table-striped table-hover  ">
                            <thead className='border-top border-dark'>
                                <tr className="table-primary">
                                    <th>Name</th>
                                    <th>Activity</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                            {

                            list.map((bList, index)=>{
                                return(
                                    <tr key={index} className=" ">
                                             <td className="col-1"><Link to= {`/oneItem/${bList._id}`}>{bList.name}</Link></td>
                                            <td className="col-1">{bList.activity}</td>
                                            <td className="col-1">{bList.description}</td>
                                            <td className="col-1">{bList.date}</td>
                                            <td className="col-1">
                                                <Button type="button" className = "mt-3 col m-3" variant="outlined" endIcon={<DeleteOutlineIcon />} onClick={(e)=>deleteHandler(bList._id)}><Link to={'/homeProfile'}>Remove</Link></Button>
                                                <button className='btn btn-warning border border-none border-3'><Link to={`/oneitem/${bList._id}/edit`}>edit</Link></button>
                                            </td>
                                    </tr>
                                    )
                                }
                                
                                )

                            }
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

    )
}


export default ItemList;