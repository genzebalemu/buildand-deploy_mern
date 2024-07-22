import { Box, Stack,TextField,OutlinedInput,InputBase ,Button,Grid} from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import InputBase from "@mui/material";
import img1 from '../../assets/img1.png'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import {Link} from 'react-router-dom'
import { ButtonBase } from "@material-ui/core";
import PersonIcon from '@mui/icons-material/Person';
// import IconButton from "@mui/material";

const Navbar=()=>{
    const [city,setCity]=useState('')
    const [language,setLanguage]=useState('')

    const handleCityChange=(e)=>{
      setCity(e.target.value)

   }
    const handleLanguageChange=(e)=>{
      setLanguage(e.target.value)
   }
  
    return(
          <Grid  p={3} pr={7} pl={4} container sx={{ boxShadow: 4 ,backgroundColor:'#cbecdb' }} >

            <Grid item  lg={4}  sx={{ }}>
            <Link to='/'>
              <ButtonBase>              
               <Stack direction='row'>  
                <Box
                component="img"
                sx={{
                 height: 90,
                 width:70,
                 marginLeft:4,
                 marginRight:3
               }}
              alt="logo image"
              src={img1} 
            />

               <h1 style={{ color:'black' }}>Visit Ethiopia</h1>
              </Stack> 
              
              </ButtonBase>
              </Link>
            </Grid>

            <Grid item lg={8}>
             <Stack direction='row'  justifyContent='space-evenly' sx={{ marginLeft:'16px' }}>
              
              <FormControl sx={{ width:'165px' }} >
                <InputLabel sx={{ fontSize:18,fontWeight:35, }} >Select City</InputLabel>
                 <Select
                    value={city}
                    sx={{border:'2px solid black',borderRadius:50 ,color:'black'}}
                    onChange={(e)=>handleCityChange(e)}               
                >
                    <MenuItem value='Tigray'>Tigray</MenuItem>
                    <MenuItem value='Afar'>Afar</MenuItem>
                    <MenuItem value='Amhara'>Amhara</MenuItem>
                    <MenuItem value='Oromia'>Oromia</MenuItem>
                    <MenuItem value='Somali'> Somali</MenuItem>
                    <MenuItem value='Benishangul-Gumuz'> Benishangul-Gumuz</MenuItem>
                    <MenuItem value='Gambella'>  Gambella</MenuItem>
                    <MenuItem value='Harari'>Harari</MenuItem>
                    <MenuItem value='SNNPR'>SNNPR</MenuItem>
                    <MenuItem value='AddisAbaba'> <Link to='addisabeba' sx={{ color:'black' }}>Addis Ababa</Link> </MenuItem>
                    <MenuItem value='DireDawa'>Dire Dawa</MenuItem>



                </Select>
             </FormControl>

              <form>
              
                 <Box sx={{ border:'3px solid black' , borderRadius:50}}>                 
                   <InputBase
                   sx={{ paddingLeft:2,paddingBottom:1.5,paddingTop:1 }}
                    placeholder=" Search Places"
                  />
                  <IconButton type="submit" sx={{ p: '10px' }} >
                    <SearchIcon />
                  </IconButton>
                    
                 </Box>
              </form>

              <FormControl sx={{ width:'180px' }} >
                <InputLabel  >Language</InputLabel>
                 <Select
                   sx={{ border:'2px solid black' , borderRadius:50 }}
                    value={language}
                    label="Language"
                    onChange={handleLanguageChange}
                >
                    <MenuItem value='Amharic'>Amharic</MenuItem>
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='Arabi'>Arabic</MenuItem>
                </Select>
            </FormControl>
              <h3>mihiret desalegn</h3>
             <Link to='/auth'><Button variant="contained">SignUp</Button></Link> 
            
            </Stack>
            </Grid>
            
            </Grid>  

    )
}


export default Navbar