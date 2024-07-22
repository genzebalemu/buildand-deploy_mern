
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
// Abyssinian longclaw.jpg
// BaleMountainsVervet.jpg
// BigHeadedAfricanMoleRat.webp
// Black-clawed brush-furred rat.JPG
// Blue-wingedGoose.jpg
// EthiopianHighlandHare.jpg
// EthiopianSiskin.jpg
// ethiopianWolf.jpg
// gelada.jpg
// Harnessed bushbuck.jpg
// Harwood'sSpurfowl.jpg
// Leptopelis gramineus.jpg
// MountainNyala.jpg
// Ptychadena neumanni.jpg
// Ruspoli's turaco.jpg
// SomaliWildAss.webp
// Spot-breastedLapwing.jpg
// Swayne.jpg
// waliaIbex.jpg
// White-tailed swallow.jpg
// YellowFrontedParrot.jpg

//Hagenia abyssinica
//Acacia
//Ekebergia capensis
//Teff
//Ensete ventricosum.webp
//Jasminum abyssinicum
//Kniphofia foliosa
//Hypericum revolutum
//Kalanchoe petitiana
import img25 from  '../../assets/endemic/Hagenia abyssinica.jpg'
import img26 from  '../../assets/endemic/Acacia.webp'
import img27 from  '../../assets/endemic/Ekebergia capensis.jpg'
import img28 from  '../../assets/endemic/Teff.jpg'
import img29 from  '../../assets/endemic/Ensete ventricosum.webp'
import img30 from  '../../assets/endemic/Jasminum abyssinicum.jpg'
import img31 from  '../../assets/endemic/Kniphofia foliosa.jpg'
import img32 from  '../../assets/endemic/Kalanchoe petitiana.jpg'

import img1 from  '../../assets/endemic/Abyssinian longclaw.jpg'
import img2 from  '../../assets/endemic/YellowFrontedParrot.jpg'
import img3 from  '../../assets/endemic/BaleMountainsVervet.jpg'
import img4 from  '../../assets/endemic/White-tailed swallow.jpg'
import img5 from  '../../assets/endemic/BigHeadedAfricanMoleRat.webp'
import img6 from  '../../assets/endemic/waliaIbex.jpg'
import img7 from  '../../assets/endemic/Black-clawed brush-furred rat.JPG'
import img8 from  '../../assets/endemic/Swayne.jpg'
import img9 from  '../../assets/endemic/Blue-wingedGoose.jpg'
import img10 from  '../../assets/endemic/EthiopianHighlandHare.jpg'
import img11 from  '../../assets/endemic/SomaliWildAss.webp'
import img12 from  '../../assets/endemic/EthiopianSiskin.jpg'
import img13 from  '../../assets/endemic/Ruspolis turaco.jpg'
import img14 from  '../../assets/endemic/ethiopianWolf.jpg'
import img15 from  '../../assets/endemic/Ptychadena neumanni.jpg'
import img16 from  '../../assets/endemic/gelada.jpg'
import img17 from  '../../assets/endemic/MountainNyala.jpg'
import img18 from  '../../assets/endemic/Harnessed bushbuck.jpg'
import img19 from  '../../assets/endemic/Leptopelis gramineus.jpg'
import img20 from  '../../assets/endemic/HarwoodsSpurfowl.jpg'
import img21 from  '../../assets/endemic/Spot-breastedLapwing.jpg'
import img22 from  '../../assets/endemic/Salvadoris seedeater.jpg'
import img23 from  '../../assets/endemic/The Ethiopian banana frog.webp'
import img24 from  '../../assets/endemic/Moorland francolin.jpg'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ButtonBase from '@material-ui/core/ButtonBase';

const PartNine=()=>{
    const [count ,setCount]=useState(1)
    const add=()=>{
        if(count===2){
            setCount(2)
        }else{
            setCount(count+1)}
    }
    const minus=()=>{
        if(count===1){
            setCount(1)
        }else{setCount(count-1)}
    }


    
    return(
        <Box  >
            <h1>There are many amazing endemic animal and plants in Ethiopia</h1>
          { (count ===1) && <Stack pl={7} pr={7} sx={{ boxShadow:3 }} >
            <h1 style={{ textAlign:'center', boxShadow:1,paddingLeft:20,paddingRight:20 }}> Page {count}</h1>
            <Stack direction='row' spacing={1}>
                <Box> <img src={img10} style={{ width:400}} /> <h3> Ethiopian Highland Hare</h3></Box>

                <Box > <img src={img2} style={{ width:420,paddingTop:60 }}/> <h3> Yellow Fronted Parrot</h3></Box>
                <Box> <img src={img3} style={{ width:410 }} /> <h3> Bale Mountains Vervet</h3></Box>
                <Box> <img src={img4} style={{ width:430,paddingTop:60 }} /> <h3>White-tailed swallow</h3></Box>

            </Stack>
            <Stack direction='row'spacing={1}>
                <Box> <img src={img5} style={{ width:420 }} /> <h3> Big Headed African Mole Rat</h3></Box>
                <Box> <img src={img6} style={{ width:410 }} /> <h3> waliaIbex</h3></Box>
                <Box> <img src={img7} style={{ width:420 }} /> <h3>Black-clawed brush-furred rat</h3></Box>
                <Box> <img src={img8} style={{ width:410 }}  /> <h3>Swayne</h3></Box>

            </Stack>
            <Stack direction='row'spacing={1}>
                <Box> <img src={img25} style={{ width:420 }} /> <h3> Hagenia abyssinica</h3></Box>
                <Box> <img src={img26} style={{ width:410 }} /> <h3> Acacia</h3></Box>
                <Box> <img src={img27} style={{ width:420 }} /> <h3>Ekebergia capensis</h3></Box>
                <Box> <img src={img28} style={{ width:410 }}  /> <h3>Teff</h3></Box>

            </Stack>
            
            <Stack direction='row' spacing={1}>
                <Box> <img src={img9} style={{ width:400 }} /> <h3> Blue-wingedGoose</h3></Box>
                <Box> <img src={img11} style={{ width:400 }} /> <h3>Somali Wild Ass</h3></Box>
                <Box> <img src={img12} style={{ width:400 }} /> <h3>Spot-breasted Lapwing.</h3></Box>
                <Box > <img src={img1} style={{ width:410 }} /> <h3> Abyssinian longclaw</h3></Box>

            </Stack>
            <Stack  direction='row' ml={90} pl={7} sx={{ boxShadow:4 ,width:160,backgroundColor:'#EFF0F8' }}> 
                     <ButtonBase onClick={minus}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowBackIosIcon /></Box></ButtonBase> 
                     <ButtonBase onClick={add}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowForwardIosSharpIcon  /></Box></ButtonBase> 
            </Stack>
        </Stack>}
        { (count ===2) && <Stack p={7} sx={{ boxShadow:3 }} >
        <h1 style={{ textAlign:'center', boxShadow:1,paddingLeft:20,paddingRight:20 }}> Page {count}</h1>
            <Stack direction='row' spacing={1}>
                <Box> <img src={img16} style={{ width:430 }} /> <h2>Gelada</h2></Box>

                <Box> <img src={img18} style={{ width:410 ,paddingTop:40}} /> <h2> Harnessed bushbuck</h2></Box>

                <Box> <img src={img22} style={{ width:400 }} /> <h3>Salvadoris seedeater</h3></Box>
                <Box> <img src={img13} style={{ width:400 }} /> <h2>Ruspolis turaco</h2></Box>

            </Stack>
            <Stack direction='row'spacing={1}>
                <Box> <img src={img17} style={{ width:420 }} /> <h2> Mountain Nyala</h2></Box>
                <Box> <img src={img18} style={{ width:410 }} /> <h2> Harnessed bushbuck</h2></Box>
                <Box> <img src={img15} style={{ width:410 }} /> <h2> Ptychadena neumanni</h2></Box>

                {/* <Box> <img src={img19} style={{ width:420 }} /> <h2>Leptopelis gramineus</h2></Box> */}
                <Box> <img src={img20} style={{ width:410 }}  /> <h2>HarwoodsSpurfowl</h2></Box>

            </Stack>

            <Stack direction='row'spacing={1}>
                <Box> <img src={img29} style={{ width:420 }} /> <h3> Ensete ventricosum</h3></Box>
                <Box> <img src={img30} style={{ width:410 }} /> <h3> Jasminum abyssinicum</h3></Box>
                <Box> <img src={img31} style={{ width:420 }} /> <h3>Kniphofia foliosa</h3></Box>
                <Box> <img src={img32} style={{ width:410 }}  /> <h3>Kalanchoe petitiana</h3></Box>

            </Stack>
            <Stack direction='row' spacing={1}>
                <Box> <img src={img21} style={{ width:400 }} /> <h3>Spot-breastedLapwing</h3></Box>
                <Box > <img src={img14} style={{ width:420 }}/> <h2> Ethiopian Wolf</h2></Box>

                <Box> <img src={img23} style={{ width:400 }} /> <h3>The Ethiopian banana frog.</h3></Box>
                <Box > <img src={img24} style={{ width:410 }} /> <h3> Moorland francolin</h3></Box>

            </Stack>
            <Stack  direction='row' ml={90} pl={7} sx={{ boxShadow:3 ,width:160,backgroundColor:'#EFF0F8' }}> 
                     <ButtonBase onClick={minus}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowBackIosIcon /></Box></ButtonBase> 
                     <ButtonBase onClick={add}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowForwardIosSharpIcon  /></Box></ButtonBase> 
            </Stack>
        </Stack>}
        </Box>
    )


}

export default PartNine