import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Register from './Register';
import Login from './Login'
import Board from '../Images/Board.png'
import EditProfile from './EditProfile';
import EditImg from './EditImg'
import NavBar from './NavBar';
import { useParams, useNavigate, Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const EditProfilePage = () => {
    
    // const {id} = useParams()
    const navigate = useNavigate()
    const [id, setId] = useState('')

    // const [sgs,setSGS] = useState({})

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteUser/${id}`,{withCredentials:true})
        .then((res)=>{
            console.log('Deleted from db')
            navigate('/landingPage')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{
            console.log("res.data", res)
            setId(res.data._id)
            console.log(id)
            // setPassword(res.data.password)
            // setId(res.data._id)
            // setFootSize(res.data.footSize)
    
    
        })
        .catch((err)=>{
            console.log(err)
            // setNoId('Pets not found using that ID')
        })
    },[])

    return (
        <div style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?travel")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",  height: "97.5vh", width:"99.2vw"}}>
            <div className='d-flex justify-content-end' >
                    <Link className='  ' to={'/'} style={{textDecoration: 'none'}}><Button onClick={(e)=>deleteHandler(id)} type="button" className = "m-3 col" color="error" variant="contained" endIcon={<DeleteForeverRoundedIcon/>}>Delete Profile</Button></Link>
                    {/* <button className='btn btn-danger border border-dark border-3' >Delete Profile</button> */}
            </div>
            <div className=" d-flex">
                {/* <div className='col-6 d-flex justify-content-around'> */}
                    <div className='col-6 d-flex justify-content-center'>
                        <EditProfile/>
                    </div>
                {/* </div>
                <hr></hr> */}
                <div className='col-6 d-flex justify-content-center'>
                    <EditImg/>
                </div>
            </div>
        </div>
    )
}
export default EditProfilePage;