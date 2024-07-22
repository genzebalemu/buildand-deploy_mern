

import React from "react";
import { Stack,Box } from "@mui/material";
// import img1 from '../../assets/img2.jpg'
//christmas
//mawlid
//easter
//eid al fetr
//meskel
//Eid al-Adha
//timkat
//enkutatash
//Patriots Victory Day
//Derg Downfall Day
//Adwa Victory Day
//Labour Day
//ashenda
//Irecha
//Buhe
//Fichee-Chambalaalla
import ButtonBase from '@material-ui/core/ButtonBase';

import img1 from '../../assets/festival/christmas.jpg'
import img2 from '../../assets/festival/mawlid.jpg'
import img3 from '../../assets/festival/easter.jpg'
import img4 from '../../assets/festival/eid al fetr.jpg'
import img5 from '../../assets/festival/meskel.jpg'
import img6 from '../../assets/festival/Eid al-Adha.jpg'
import img7 from '../../assets/festival/timkat.jpg'
import img8 from '../../assets/festival/enkutatash.jpg'
import img9 from '../../assets/festival/Patriots Victory Day.jpg'
import img10 from '../../assets/festival/Derg Downfall Day.jpg'
import img11 from '../../assets/festival/Adwa Victory Day.jpg'
import img12 from '../../assets/festival/Labour Day.jpg'
import img13 from '../../assets/festival/Ashenda.jpg'
import img14 from '../../assets/festival/Irecha.jpg'
import img15 from '../../assets/festival/Buhe.jpg'
import img16 from '../../assets/festival/fichee.jpg'
const PartThirteen=()=>{
    
    const Cardd=(props)=>{
        return(
            <Stack direction='row'spacing={3} sx={{ width:300,height:78, boxShadow:5 ,borderRadius:'8%',border:1,backgroundColor:'white'}} >
                <Box> 
                   <img src={props.imagee} style={{ width:100,height:78,borderRadius:'8%'}} />
                </Box>
                <Box>
                    <h3>{props.title}</h3>
                    <p> {props.explanation}</p>
                </Box>
            </Stack>
        )

    }

    return(
        <Box>
            <Box pl={2}>
                <h1 >
                    Festivals, holiday and Celebrations in ethiopia are so colorful and attractive.
                    This are some famous holidays and festivals..
                </h1>
            </Box>
        <Stack direction='column' spacing={2} p={7} sx={{ backgroundColor:'#f2f4f6' }}>
            
            <h1>holidays</h1> 
           <Stack direction='row' spacing={3}>
           <Cardd imagee={img1} title='Ethiopian Christmas' explanation="Christian's holiday" />
           <Cardd imagee={img2} title='Mawlid' explanation='Muslims holiday' />          
           <Cardd imagee={img3} title='Eastern' explanation='Christians holiday' />
           <Cardd imagee={img4} title='Eid al-Fitr' explanation='Muslims holiday' />
           <Cardd imagee={img5} title='Meskel' explanation='Christians holiday' />

           </Stack>
           <Stack direction='row' spacing={3}>
           <Cardd imagee={img6} title='Eid al-Adha' explanation='Muslims holiday' />
           <Cardd imagee={img7} title='Timkat' explanation='Christians holiday' />
           <Cardd imagee={img8} title='Enkutatash' explanation='Holiday' />

           {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' />
           <Cardd imagee={img1} title='ashenday' explanation='girls festival' />
           <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}

           </Stack>
           <h1>Days</h1>     
           <Stack direction='row' spacing={3}>
           <Cardd imagee={img9} title='Patriots Victory Day' explanation=' national holiday ' />
           <Cardd imagee={img10} title='Derg Downfall Day' explanation=' national holiday ' />
           <Cardd imagee={img11} title='Adwa Victory Day' explanation=' national holiday ' />
           <Cardd imagee={img12} title='Labour Day' explanation=' national holiday' />

           </Stack>
           <h1>festivals</h1>   
        <Stack direction='row' spacing={3}>
           <Cardd imagee={img13} title='Ashenda' explanation='Tigrayan festival' />
           <Cardd imagee={img14} title='Irecha' explanation='oromos festival' />
           <Cardd imagee={img15} title='Buhe' explanation='boys festival' />
           <Cardd imagee={img16} title='Fichee-Chambalaalla' explanation='sidamas festival' />

           {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}

           {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}
 
           </Stack>
          {/* <Cardd imagee={img1} title='ashenday' explanation='girls festival' /> */}
        </Stack>
        </Box>
    )
}


export default PartThirteen



