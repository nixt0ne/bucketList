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
            <div className='d-flex mx-auto' >
                <div className="p-2 d-flex col-7 align-items-center justify-content-center" style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?travel")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: 720}}>
                    <div>
                        <div className="p-1" >
                            <div className='m-2 ' >
                                <img src={logo}/>
                                {/* <div style={{backgroundColor: "pink"}}>
                                    <h3 style={{color: "white",backgroundColor: "turquoise"}}>SGS</h3>
                                </div> */}
                            </div>
                        </div>
                        <div className='mt-5 p-4' style={{fontFamily: "Satisfy",border:"15px solid", backgroundColor:"orange" }}>
                            <h1 className='mt-4' style={{color: "white", fontSize: "75px", fontFamily: "Satisfy", backgroundColor:"orange" }}>Create Your Bucket List</h1>
                            <p style={{color: "black", fontSize: "20px", fontFamily: "", backgroundColor:"orange" }}>Live the Life You've Always Imagined</p>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='my-auto col'>
                        <Login/>
                        {/* <div className='mx-auto' style={{width: '90%'}}>
                            <hr></hr>
                        </div> */}
                        <br></br>
                        <Register/>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;