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
import EditIcon from '@mui/icons-material/Edit';


const TableList = (props) => {

    const {list, setList} = props
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
            <div>
                
                <div className="col-11 mx-auto mt-3">
                        <div className="rounded-top overflow-hidden" style={{color: 'white', backgroundColor: '#0d6efd'}}>
                            <h1>Bucket List</h1>
                        </div>
                </div>
                <div className="col-11 mx-auto text-start ">
                    <div className="" style={{backgroundColor: "lightgrey", opacity: ".9"}}>
                        <table className=" table table-hover  ">
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
                                             <td className="col-1"><Link  to= {`/oneItem/${bList._id}`}>{bList.name}</Link></td>
                                            <td className="col-1">{bList.activity}</td>
                                            <td className="col-1">{bList.description}</td>
                                            <td className="col-1">{bList.date}</td>
                                            <td className="col-5">
                                                <Button style={{ textDecoration: "none"}} type="button" color="error" className = "mt-3 col m-3" variant="contained" endIcon={<DeleteOutlineIcon />} onClick={(e)=>deleteHandler(bList._id)}><Link style={{color: "black", textDecoration: "none" }} to={'/homeProfile'}>Remove</Link></Button>
                                                <button   className='btn btn-warning border border-none border-3'><Link style={{color: "#2d7dd0", textDecoration: "none" }} to={`/oneitem/${bList._id}/edit`}>edit</Link> <EditIcon/></button>
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


export default TableList;