

import { Box, Stack } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PartTen=()=>{
    const age=''
    return(
    <Box pt={5} pl={15} pr={24} sx={{ height:420 ,backgroundColor:'#151a22',opacity:0.8,color:'white'}} > 
        <h1>TOURISM of Ethiopia</h1>
        <p style={{ fontSize:25 }}>
          Ethiopia has an unequalled range of natural habitats,
          ranging from the extraordinary peaks and ambas (flat-topped summits) 
          of the Simien Mountains at over 4,000 meters, to the Danakil Depression,
          120 meters below sea-level, one of the lowest points as well as the hottest 
          place on Earth. There are Afro-Alpine highlands, moors and mountains, deep gorges, 
          the Sof Omar caves (the most extensive in Africa), the Great Rift Valley and
          its many lakes, tropical rain forests, white-water rivers and rock climbing faces,
          savannahs, waterfalls, volcanic hot springs and  a volcano or two.
          These are supplemented by a wealth of historic, cultural, religious, 
          archaeological and anthropological sites, including the northern "historic route" 
          which incorporates the former capitals of Gondar (17and 18th centuries), Axum (1st-8th centuries),
          and Lalibela (12th-13th centuries) 
          with its spectacular rock-hewn churches, as well as the monasteries on 
          Lake Tana (and the Blue Nile falls), and the numerous rock churches of
          Tigray region, many dating to the 14-16th centuries, or even earlier.  
        </p>
        <Stack direction='row' spacing={4}> 
        <p style={{ fontSize:30 }}> select city to explore more places </p>
        <FormControl sx={{ width:'170px',color:'white' }} >
                <InputLabel sx={{ color:'white' }} >select city</InputLabel>
                 <Select  sx={{ color:'white' }}
                    value={age}
                    // label="Language"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Addis abeba</MenuItem>
                    <MenuItem value={20}> Tigray Region</MenuItem>
                    <MenuItem value={30}>Somali Region</MenuItem>
                    <MenuItem value={30}>Afar Region</MenuItem>
                    <MenuItem value={30}>Oromia Region</MenuItem>
                    <MenuItem value={10}>Somali Region</MenuItem>
                    <MenuItem value={20}>Amhara Region</MenuItem>
                    <MenuItem value={30}>Harari Region</MenuItem>
                    <MenuItem value={30}>South Omo</MenuItem>
                    <MenuItem value={10}>Shewa</MenuItem>
                    <MenuItem value={20}>Dire Dawa</MenuItem>
                    <MenuItem value={30}>Southern Nations, Nationalities and Peoples</MenuItem>
                    <MenuItem value={30}>Sidama Region</MenuItem>
                    <MenuItem value={30}>Ethiopian xeric grasslands and shrublands</MenuItem>
                    <MenuItem value={20}>Gambela Region</MenuItem>
                    <MenuItem value={30}>Benishangul-Gumuz</MenuItem>
                    <MenuItem value={30}>West Welega Zone</MenuItem>
                    
                </Select>
            </FormControl>
            </Stack>
    </Box>)
}

export default  PartTen
