import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Register from './Register';
import Login from './Login'
import Board from '../Images/Board.png'
import NavBar from './NavBar';
import logo from '../Images/logo.png'
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import Profile from './Profile';
import TableList from './TableList';

const HomePage = () => {
    
    const [list,setList] = useState([])

    return (
            <div style={{backgroundImage: `url("https://source.unsplash.com/random/1000x700/?travel")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",  height: "97.5vh", width:"99.2vw"}}>
                <div className='row d-flex' >
                    <div className='col'>
                        <TableList list={list} setList={setList} />
                    </div>
                    <div className='col'>
                        {/* <div className='col'>
                            <Profile/>
                        </div> */}
                        <div className='col'>
                            <ItemForm setList={setList} />
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default HomePage;