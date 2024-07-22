import React from "react";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import { Box } from "@mui/material";
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import HeadingOne from "./components/headingOne/headingOne";
import AddisAbeba from "./components/cityCategory/addisAbeba";
import DetailPage from "./components/detailPage/detailPage";
import PostRegistration from "./components/postRegistration/postRegistration";
import Hotels from "./components/typeCatagory/hotels/hotels";
import Auth from "./components/auth/auth";
function App() {
  return (
    <BrowserRouter>
        <Box className="App" >
          <Navbar/>
          <HeadingOne />
            <Routes>
                < Route  exact={true} path='/' element={<Home/>}/>
                < Route path='/addisabeba' element={<AddisAbeba />}/>
                < Route path='/hotels' element={<Hotels />}/>
                < Route path='/detailpage' element={<DetailPage />}/>
                < Route path='/postregister' element={<PostRegistration />}/>
                < Route path='/auth' element={<Auth />}/>

                
           </Routes>
     
        {/* <Home /> */}
       </Box>
     
    </BrowserRouter>
  );
}


export default App;
