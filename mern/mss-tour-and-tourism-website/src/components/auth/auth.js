import React, { useState } from "react";
import { Box ,Stack,Button, Typography, Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import imagee from '../../assets/post.jpg'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { ButtonBase } from "@material-ui/core";

export default function Auth(){
   
     const [country,setCountry]=useState('')
     const [isSignup,setIsSingup]=useState(true)


    const handleSubmit=(e)=>{
      e.preventDefault()


    }

    return(
        <Box sx={{color:'black',backgroundColor:'#dafdeb'}}  pr={37} pl={27} pt={7}  pb={10}>

        <Stack   sx={{boxShadow:5}} direction='row' spacing={9} bgcolor="#ebf5f0" >

            <Box   > 
                <img src={imagee} style={{height:765,width:610}}  alt='photo'/>
            </Box>

            <Box   pt={4} sx={{ width:500, }} > 
              <Typography variant="h5" mb={1} sx={{ textAlign:'center' }}>
                <PersonIcon sx={{fontSize:65}}/>
                </Typography>
              <Typography mb={3}variant="h5" sx={{ textAlign:'center', }}>{ isSignup? 'SignUp  Here' :'Login Here'}</Typography>
              <form onSubmit={handleSubmit} >
                <Stack direction='column'spacing={3}  >
                  
                     
                      { isSignup && 
                      
                      <TextField

                          label="Firstname"
                          onChange={()=>{}}
                          name="firstname"
                          sx={{ }}
                          InputProps={{
                            style: {
                              borderRadius: 50,
                              backgroundColor:'#caf6e0' 
                            }
                          }}  />
                        }
                        {isSignup &&
                         <TextField

                           label="Lastname"
                             onChange={()=>{}}
                            name="lastname"
                            InputProps={{
                              style: {
                                borderRadius: 50,
                                backgroundColor:'#caf6e0' 
                              }
                            }} 
                        />
                  
                     
                      }
                    <TextField
                     label="Email"
                     onChange={()=>{}}
                     name="email"
                     InputProps={{
                      style: {
                        borderRadius: 50,
                        backgroundColor:'#caf6e0' 
                      }
                    }} 
                   />
                 <TextField
                     label="Password"
                     onChange={()=>{}}
                     name="password"
                     InputProps={{
                      style: {
                        borderRadius: 50,
                        backgroundColor:'#caf6e0' 
                      }
                    }} 
                   />
                   { isSignup &&
                   
                   <TextField
                     label="Confrim Password"
                     onChange={()=>{}}
                     name="confrimpassword"InputProps={{
                      style: {
                        borderRadius: 50,
                        backgroundColor:'#caf6e0' 
                      }
                    }} 
                   />
                  }
                  { isSignup &&
                  
                <FormControl sx={{ width:'195px',backgroundColor:'#caf6e0' }} >
                <InputLabel sx={{ fontSize:18,fontWeight:35, }} >Select Country</InputLabel>
                 <Select
                    value={country}
                    sx={{border:'2px solid black',color:'black', borderRadius:10}}
                    onChange={(e)=>setCountry(e.target.value)}               
                >
                    <MenuItem value='ethiopia'>Ethiopia</MenuItem>
                    <MenuItem value='india'>India</MenuItem>
                    <MenuItem value='korea'>Korea</MenuItem>
                    <MenuItem value='china'>China</MenuItem>
                    <MenuItem value='saudi arab'>Saudi arab</MenuItem>
                    <MenuItem value='italy'>Italy</MenuItem>

                    <MenuItem value='france'>France</MenuItem>
                    <MenuItem value='Germany'>Germany</MenuItem>
                    <MenuItem value='japan'>Japan</MenuItem>
                    <MenuItem value='brazil'>brazil</MenuItem>

                </Select>
                  </FormControl>
                  
}

                 <Button sx={{ backgroundColor:'#51f4a2',color:'black', height:55 }} variant="contained" type='submit' >{isSignup? 'SignUp' :'Login'}</Button>
                 <Button  sx={{ position:'relative', left:120 }} onClick={()=>setIsSingup(!isSignup)}><Typography sx={{ color:'black' }}>{isSignup ? 'already have account ? Login...' : 'dont have account ? register'}</Typography></Button>
          </Stack>
       </form>
    </Box>
        </Stack>

 </Box>
    )
}