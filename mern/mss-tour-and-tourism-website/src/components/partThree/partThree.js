import { Box, Button, Grid, Stack } from "@mui/material";
import  React ,{ useState, useEffect } from "react";
import ButtonBase from '@material-ui/core/ButtonBase';


import img1 from '../../assets/hotels/sheraton.jpg'
import img3 from '../../assets/hotels/taytu.jpg'
import img2 from '../../assets/hotels/skylight.jpg'
import img4 from '../../assets/hotels/daamat.jpg'
import img5 from '../../assets/hotels/hilton.jpg'
import { Link } from "react-router-dom";

const PartThree=()=>{
   

       return(
        <Stack direction='column' pl={12} pr={12} spacing={2} sx={{ color:'white' }}>
        <h1 style={{ color:'black' }}> enjoy amazing hotels in ethiopia</h1>
         <Stack  direction='row' spacing={2} sx={{ marginLeft:15 }}>
          <Link to='/detailpage'>
           <ButtonBase>
             <Box sx={{ width:753,height:380, border:0.5 , borderRadius:'5%',
              '&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               },
        }}>
                <img src={img1} style={{width:753, height:380, border:0.5 , borderRadius:'5%',
                '&:hover': {
                  boxShadow:6,
                 border:2,
                 borderColor:'red'


                },
               }}/>
                <h1  style={{ position:'relative',bottom:380 , color:'white',}}>Sheraton Hotel</h1>

             </Box>
            </ButtonBase>
            </Link>
            <ButtonBase>
            <Box sx={{ width:754,height:380, border:0.5 , borderRadius:'5%','&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               },}}>
                <img src={img3} style={{width:754, height:380, border:0.5 , borderRadius:'5%' ,'&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               },}}/>
                <h1  style={{ position:'relative',bottom:380}}>Taytu Hotel</h1>

            </Box> 
            </ButtonBase>
         </Stack>

         <Stack direction='row' spacing={2} >
         <ButtonBase>
           <Box sx={{ width:500,height:400, border:0.5 , borderRadius:'5%','&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               },}}>
                <img src={img4} style={{width:500, height:400, border:0.5 , borderRadius:'5%','&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               }, }}/>
                <h1  style={{ position:'relative',bottom:400}}>Daamat Hotel</h1>

            </Box>
            </ButtonBase>
            <ButtonBase>
            <Box sx={{ width:500,height:400, border:0.5 , borderRadius:'5%','&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               },}}>
                <img src={img2} style={{width:500, height:400, border:0.5 , borderRadius:'5%','&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               }, }}/>
                <h1  style={{ position:'relative',bottom:400}}>Skylight Hotel</h1>

            </Box>
            </ButtonBase>
            <ButtonBase>
            <Box sx={{ width:500,height:400, border:0.5 , borderRadius:'5%','&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               },}}>
                <img src={img5} style={{width:500, height:400, border:0.5 , borderRadius:'5%' ,'&:hover': {
                 boxShadow:6,
                border:2,
                borderColor:'red'
               },}}/>
                <h1  style={{ position:'relative',bottom:400}}>Hilton Hotel</h1>

            </Box>
            </ButtonBase>
         </Stack>

         <Box>
            <Box></Box>
            <Box></Box>
         </Box>

        </Stack>
       
    ) 
}



export default PartThree