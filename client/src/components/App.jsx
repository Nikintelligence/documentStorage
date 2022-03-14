import React, {useEffect} from 'react';
import Navbar from "./navbar/navbar";
import './app.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Registration from "./authorization/registration";
import Login from "./authorization/login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Disk from "./disk/Disk";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

  return (
      <BrowserRouter>
          <div className='app'>
              <Navbar/>
              <div className="wrap">
                  {!isAuth ?
                      <Routes>
                          <Route path="/registration" element={<Registration/>}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/" element={<Navigate replace to="/login" />} />
                      </Routes>
                      :
                      <Routes>
                          <Route exact path="/" element={<Disk/>}/>
                          <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
                  }
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;