import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ItemForm from './ItemForm'
// import SgsForm from './SgsForm'
import Board from '../Images/Board.png'
import Binding from '../Images/Binding.png'
import Boot from '../Images/Boot.png'
import Height from '../Images/Height.png'
// import NavBar from './NavBar'
import Button from '@mui/material/Button';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
const OneItem = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    // This is user profile stuff
    // const [username, setUserName] = useState('')
    // const [apiState, setApiState] = useState ([])

    const [item,setItem] = useState({})

useEffect(()=>{
    axios.get(`http://localhost:8000/api/oneItem/${id}`, {withCredentials:true})
    .then((res)=>{
        setItem(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])


// this is for user stuff
// useEffect(()=>{
//     axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
//     .then((res)=>{
//         console.log("res.data", res)
//         setUserName(res.data.username)
//         // setPassword(res.data.password)
//         // setId(res.data._id)
//         // setFootSize(res.data.footSize)


//     })
//     .catch((err)=>{
//         console.log(err)
//         // setNoId('Pets not found using that ID')
//     })
// },[])


const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/deleteItem/${id}`,{withCredentials:true})
    .then((res)=>{
        console.log('Deleted from db')
        navigate('/homeProfile')
    })
    .catch((err)=>{
        console.log(err)
    })
}


    return (
        <div style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?travel")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height:"835px", width:"99.2vw"}}>


            <div className="col-8 mx-auto text-start"  >

                <div className=" mx-auto" >
                        <div className='d-flex row  '>
                    <div className="mt-3 rounded-top overflow-hidden"  >
                                    <div className='row ' style={{backgroundColor: "lightgrey", opacity: ".9"}}  >
                                        <div className='col card m-1 p-3 d-flex ' style= {{height: "200px", width:"450px"}} >
                                            <div className='row'>
                                                <div className='col-6 mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold", fontSize: "30px"}}>Name:</h1>
                                                    <h4 className="mb-4"> {item.name} </h4>
                                                </div>
                                                <div className='col-6 mx-auto '>
                                                    <img className='' src={Board} style= {{height: "150px", width:"150px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col card m-1 p-3 d-flex ' style= {{height: "200px", width:"450px"}} >
                                            <div className='row '>

                                                <div className='col-6 mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold",fontSize: "30px"}}>Date:</h1>
                                                    <h4 className="mb-4"> {item.date} </h4>
                                                </div>
                                                <div className='col-6 mx-auto '>
                                                    <img className='' src={Binding} style= {{height: "150px", width:"150px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col card m-1 p-3 d-flex ' style= {{height: "200px", width:"450px"}} >
                                            <div className='row ' >

                                                <div className='col-6 mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold",fontSize: "30px"}}>Activity:</h1>
                                                    <h4 className="mb-4"> {item.activity}</h4>
                                                </div>
                                                <div className='col-6 mx-auto '>
                                                    <img className='' src={Height} style= {{height: "150px", width:"150px"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className=' col card m-3 p-3' style= {{height: "250px", width:"450px"}}>
                                            <img className='col ' src={Board} style= {{height: "200px", width:"80px"}}/>
                                            <h1 className="mb-4">Snowboard Height Range: </h1>
                                            <h4 className="mb-4"> {sgs.boardHeight} </h4>
                                        </div> */}
                                    </div>
                                    <div className='row' style={{backgroundColor: "lightgrey", opacity: ".9"}} >
                                    <div className='col card m-1 p-3 d-flex ' style= {{height: "230px", width:"450px"}} >
                                            <div className='row '>
                                            <div className='col-8 mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold", fontSize: "30px"}}>Description:</h1>
                                                    <h4 className="mb-4"> {item.description} </h4>
                                                </div>
                                                <div className='col-4 mx-auto '>
                                                    <img className='justify-content-center' src={Boot} style= {{height: "200px", width:"200px"}}/>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <div className=' col card m-3 ' style= {{height: "250px", width:"450px"}}>
                                                <img className='' src={Boot} style= {{height: "150px", width:"150px"}}/>
                                                <h1 className="mb-4">Boot Style:  </h1>
                                                <h4 className="mb-4">{sgs.bootStyle}  </h4>
                                        </div> */}

                                        {/* <div className='col card m-3' style= {{height: "250px", width:"450px"}}>
                                                <img className='' src={Binding} style= {{height: "150px", width:"150px"}}/>
                                                <h1 className="mb-4">Binding Style:</h1>
                                                <h4 className="mb-4"> {sgs.bindingStyle} </h4>

                                        </div> */}
                                        {/* <div className='text-center' style={{backgroundColor: 'white', }}>
                                            <Link to={`/riderForum`} style={{textDecoration: 'none'}}><Button type="button" className = "m-3 col" variant="contained" endIcon={<RocketLaunchIcon/>}>Check Out the Rider Forum To See Other Riders' Results!</Button></Link> */}
                                        {/* <button className='btn btn-danger border border-dark border-3'><Link to={'/riderForum'}> Check Out the Rider Forum To See Other Rider Results!</Link></button> */}
                                        {/* </div> */}
                                    </div>
                                    <div className='row ' style={{backgroundColor: "lightgrey", opacity: ".9"}}  >
                                        <div className='col card m-1 p-3 d-flex ' style= {{height: "230px", width:"450px"}} >
                                            <div className='row'>
                                                <div className='col mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold", fontSize: "30px"}}>Add Images:</h1>
                                                    <h4 className="mb-4"> Upload Image Here </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col card m-1 p-3 d-flex ' style= {{height: "230px", width:"450px"}} >
                                            <div className='row '>

                                                <div className='col mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold", fontSize: "30px"}}>Comments:</h1>
                                                    <h4 className="mb-4"> Add comment here</h4>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <div className=' col card m-3 p-3' style= {{height: "250px", width:"450px"}}>
                                            <img className='col ' src={Board} style= {{height: "200px", width:"80px"}}/>
                                            <h1 className="mb-4">Snowboard Height Range: </h1>
                                            <h4 className="mb-4"> {sgs.boardHeight} </h4>
                                        </div> */}
                                    </div>
                        {/* <div className="col-4 mt-2">
                            <p className="mb-4">{sgs.style}</p>
                            <p className="mb-4">{sgs.height}</p>
                            <p className="mb-4">{sgs.height}</p>
                            <p className="mb-4">{sgs.height}</p> */}
                            {/* <div >
                                <p className="m-0 p-0">{pet.skill1}</p>
                                <p className="m-0 p-0">{pet.skill2}</p>
                                <p className="m-0 p-0">{pet.skill3}</p> 
                            </div>  */}
                        {/* </div> */}
                        {/* <div className="App">
                        {
                            apiState.map((pokemon)=>(
                            <div>
                                <h1>
                                {pokemon.name}
                                </h1>
                            </div>
                            ))
                        }
                        

                        </div> */}
                        {/* <div className="App">
                        {
                            apiState.map((stations)=>(
                            <div>
                                <h1>
                                {stations.name}
                                </h1>
                            </div>
                            ))
                        } */}
                        
    {/* 
                        </div> */}
                        <div className="d-flex row mt-3" >
                            <div className='col-7'>
                                {/* <h1 style={{color: 'white'}}>Confirm List Changes</h1> */}
                            </div>
                            <div className='col-5 text-end d-flex'>
                                <div className=''>
                                    <Link to={`/oneItem/${item._id}/edit`} style={{textDecoration: 'none'}}><Button style={{ backgroundColor: "#efbd19"}}type="button"  className = "m-3 col btn-" variant="contained" endIcon={<AutoFixHighRoundedIcon/>}>Edit Selection</Button></Link>
                                </div>
                                <div>
                                    <Button onClick={(e)=>deleteHandler(item._id)} color="error" type="button" className = "m-3 col" variant="contained" endIcon={<DeleteForeverRoundedIcon/>}>Remove</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </div>
        </div>
    )
}

export default OneItem;