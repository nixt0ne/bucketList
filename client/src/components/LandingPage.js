import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Register from './Register';
import Login from './Login'
import Board from '../Images/Board.png'
import NavBar from './NavBar';
import logo from '../Images/logo.png'
<style>

</style>

const LandingPage = () => {
    
    return (
        <div>
            <div className='mx-auto m-0' >
                <div className='m-0' style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?travel")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "97.5vh", width:"99.2vw"}}>
                        <div className=" d-flex row" >
                            <div className="col my-auto" >
                                <Login/>
                            </div>
                            <div className='col my-auto' >
                                <img src={logo}/>
                                {/* <div style={{backgroundColor: "pink"}}>
                                    <h3 style={{color: "white",backgroundColor: "turquoise"}}>SGS</h3>
                                </div> */}
                            </div>
                            <div className='col my-auto'>
                                <Register/>
                            </div>

                        </div>
                        <div className=' p-4' style={{fontFamily: "Satisfy", backgroundColor:"orange" }}>
                            <h1 className='mt-3' style={{color: "white", fontSize: "75px", fontFamily: "Satisfy", backgroundColor:"orange" }}>Create Your Bucket List</h1>
                            <p style={{color: "black", fontSize: "20px", fontFamily: "", backgroundColor:"orange" }}>Live the Life You've Always Imagined</p>
                        </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;