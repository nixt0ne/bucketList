import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import EditBucketListItem from './components/EditBucketListItem';
import OneItem from './components/OneItem';
import React,{useState} from "react";
import {Navigate} from 'react-router-dom'
// import LandingPage from './components/LandingPage'
// import EditProfile from './components/EditProfile'
// import RiderForum from './components/RiderForum';
// import EditProfilePage from './components/EditProfilePage'
// import { Layout } from './components/Layout';



function App() {
  // const [list,setList] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/'  element={<Navigate to= "/homeProfile"/>}></Route>
          <Route path= '/oneItem/:id/edit'  element= {<EditBucketListItem/>}></Route>
          <Route path= '/homeProfile'  element= {<ItemList/>}></Route>
          <Route path= '/itemForm'  element= {<ItemForm/>}></Route>
          <Route path= '/oneItem/:id'  element= {<OneItem/>}></Route>
        </Routes>
        
        {/* <Routes>
            <Route path= '/'  element={<Navigate to= "/landingPage"/>}></Route>
            <Route path='/landingPage' element={<LandingPage />}></Route>
          <Route path= '/'  element={<Layout/>}>
            <Route path='/homeProfile' element={<SgsList/>}></Route>
            <Route path='/oneItem/:id' element={<OneSgs/>}></Route>
            <Route path='/snowboardGearSelector' element={<SgsForm/>}></Route>
            <Route path='/oneItem/:id/edit' element={<EditSgs/>}></Route>
            <Route path='/editProfilePage' element={<EditProfilePage />}></Route>
            <Route path='/riderForum' element={<RiderForum />}></Route>
          </Route>

        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
