import React, { useState } from "react";
import { Box ,Stack,Button, Typography, Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import imagee from '../../assets/post.jpg'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function PostRegistration(){
   
     const [catagory,setCatagory]=useState('')


    const handleSubmit=(e)=>{
      e.preventDefault()


    }

    return(
        <Box style={{color:'black'}}  pr={37} ml={27} pt={7}  pb={10}>

        <Stack   sx={{boxShadow:5}} direction='row' spacing={9} bgcolor="#ebf5f0" >

            <Box   > 
                <img src={imagee} style={{height:680,width:610}}  alt='photo'/>
            </Box>

            <Box   pt={4} sx={{ width:500, }} > 
              <Typography variant="h5" mb={3} sx={{ textAlign:'center' }}>Welcome</Typography>
              <Typography variant="h6" sx={{ textAlign:'center' }}>Register places Here</Typography>
              <form onSubmit={handleSubmit} >
                <Stack direction='column'spacing={3}  >
                  
                     
                        <TextField

                          label="title"
                          onChange={()=>{}}
                          name="title"
                        />
                      
                      
                     
                   
                    <TextField
                     label="city or region"
                     onChange={()=>{}}
                     name="city"
                   />
                <textarea 
                            placeholder="Enter description"
                           style={{ height:100,backgroundColor:"#ebf5f0" }}
                />
                <FormControl sx={{ width:'175px' }} >
                <InputLabel sx={{ fontSize:18,fontWeight:35, }} >Select catagory</InputLabel>
                 <Select
                    value={catagory}
                    sx={{border:'2px solid black',color:'black'}}
                    onChange={(e)=>setCatagory(e.target.value)}               
                >
                    <MenuItem value='hotel'>Hotel</MenuItem>
                    <MenuItem value='park'>Park</MenuItem>
                    <MenuItem value='museum'>Museum</MenuItem>
                    <MenuItem value='waterFalls'>WaterFalls</MenuItem>
                    <MenuItem value='heritages'>Heritages</MenuItem>
                    <MenuItem value='festivals'>Festivals</MenuItem>


                </Select>
                  </FormControl>

                 <Button variant="contained" type='submit' >Register</Button>
         
          </Stack>
       </form>
    </Box>
        </Stack>

 </Box>
    )
}