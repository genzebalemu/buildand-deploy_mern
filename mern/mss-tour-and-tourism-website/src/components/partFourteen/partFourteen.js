

import React, { useState } from "react";
import { Box,Stack } from "@mui/material";

//afar
//amhara
//argoba
//awii
//basketo
//Burji
//Dawro
//gamo
//Gedeo
//Goffa
//gumuz
//gurage
//hadiya

import img1 from '../../assets/nations/afar.jpg'
import img2 from '../../assets/nations/amhara.jpg'
import img3 from '../../assets/nations/argoba.jpg'
import img4 from '../../assets/nations/awii.jpg'
import img5 from '../../assets/nations/basketo.jpg'
import img6 from '../../assets/nations/Burji.jpg'
import img7 from '../../assets/nations/Dawro.jpg'
import img8 from '../../assets/nations/gamo.jpg'
import img9 from '../../assets/nations/Gedeo.jpg'
import img10 from '../../assets/nations/Goffa.jpg'
import img11 from '../../assets/nations/gumuz.jpg'
import img12 from '../../assets/nations/gurage.jpg'
import img13 from '../../assets/nations/hadiya.jpg'
import img14 from '../../assets/nations/halaba.jpg'
import img15 from '../../assets/nations/Hamar.jpg'
import img16 from '../../assets/nations/harari.jpg'
import img17 from '../../assets/nations/kambata.jpg'
import img18 from '../../assets/nations/karo.jpg'
import img19 from '../../assets/nations/mursi.jpg'
import img20 from '../../assets/nations/oromo.jpg'
import img21 from '../../assets/nations/Qebena.jpg'
import img22 from '../../assets/nations/shinasha.jpg'
import img23 from '../../assets/nations/sidama.jpg'
import img24 from '../../assets/nations/silte.jpg'
import img25 from '../../assets/nations/somali.jpg'
import img26 from '../../assets/nations/welayta.jpg'
import imgg from '../../assets/nations/all.jpg'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ButtonBase from '@material-ui/core/ButtonBase';





const PartFourteen=()=>{
    const [count,setCount]=useState(1)

    const One=(props)=>{
        return(
        <Box sx={{ borderRadius:'7%', border:0.5,textAlign:"center" }}>
            <h2 >{props.title}</h2>
            <img src={props.imagee} style={{ width:320,height:260 ,borderBottomLeftRadius:'7%',borderBottomRightRadius:'7%'}}/>
        </Box>
        )
    }

    const Two=(props)=>{
        return(
        <Box sx={{ borderRadius:'7%', border:0.5,textAlign:"center"}}>
            <img src={props.imagee} style={{ width:320,height:260 ,borderTopLeftRadius: '7%', borderTopRightRadius: '7%'}}/>
            <h2 >{props.title}</h2>

        </Box>
        )
    }

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
    <Box>
        <h1> Nations and Nationalities in Ethiopia</h1>
        <Stack direction='row'spacing={2} pr={13} pl={2}>

            <Box >
                <img src={imgg}/>
            </Box>
            <h2 style={{ textAlign:'center' }}>
            The Ethiopian peoples comprise about eighty nationalities of which the
             Amhara and the Oromo constitute the majority, with about 60 percent of 
             the total population. Ethiopia represents a melting pot of ancient cultures with Middle Eastern and African cultures evident in the religious, ethnic and language composition 
             Approximately 85 percent of the population live in the rural areas. Ethiopia is home to some fascinating linguistic diversity. Broadly speaking, languages in Ethiopia can be classified within four major language groups, though the country is also home to several unclassified tongues. 

             The four main language groups in Ethiopia are Semitic, Cushitic, Omotic and Nilo-Saharan. These fit within two wider groupings of the language family tree. 
            
             Ethiopia is the oldest independent country in Africa and one of the oldest in the world. What are believed to be the oldest remains of a human ancestor ever found, which have been dated as being some five million years old, were discovered in the Awash Valley in Ethiopia. This beats the discovery of “Lucy”, a 3.2 million year old skeleton, who was unearthed in the same area in 1974.

            </h2>
        </Stack>
        <h1> Some nationalities are listed below...</h1>
       { (count ===1) && 
       <Stack direction='column' spacing={1} borderRadius='7%' pl={7}>
        <Stack direction='row' spacing={1}> 
          <One imagee={img1} title='Afar'/>
          <Two imagee={img2} title='Amhara'/>
          <One imagee={img3} title='Argoba'/>
          <Two imagee={img4} title='Awii'/>
          <One imagee={img5} title='Basketo'/>
        </Stack>
        <Stack direction='row' spacing={1}> 
          <One imagee={img6} title='Burji'/>
          <Two imagee={img7} title='Dawro'/>
          <One imagee={img8} title='Gamo'/>
          <Two imagee={img9} title='Gedeo'/>
          <One imagee={img10} title='Goffa'/>
        </Stack> <Stack direction='row' spacing={1}> 
          <One imagee={img11} title='Gumuz'/>
          <Two imagee={img12} title='Gurage'/>
          <One imagee={img13} title='Hadya'/>
          <Two imagee={img14} title='Halaba'/>
          <One imagee={img15} title='Hamar'/>
        </Stack>
    </Stack>
     }
     {(count ===2) &&
      <Stack direction='column' spacing={1} borderRadius='7%' pl={7}>
      <Stack direction='row' spacing={1}> 
        <One imagee={img16} title='Harari'/>
        <Two imagee={img17} title='Kambata'/>
        <One imagee={img18} title='Karo'/>
        <Two imagee={img19} title='Mursi'/>
        <One imagee={img20} title='Oromo'/>
      </Stack>
      <Stack direction='row' spacing={1}> 
        <One imagee={img21} title='Qebena'/>
        <Two imagee={img22} title='Shinasha'/>
        <One imagee={img23} title='Sidama'/>
        <Two imagee={img24} title='Silte'/>
        <One imagee={img25} title='Somali'/>
      </Stack> <Stack direction='row' spacing={1}> 
        <One imagee={img26} title='Welayta'/>
        {/* <Two imagee={img12} title='Gurage'/>
        <One imagee={img13} title='Hadya'/>
        <Two imagee={img14} title='Halaba'/>
        <One imagee={img15} title='Hamar'/> */}
      </Stack>
  </Stack>
      } 
     <Stack  direction='row' ml={90} pl={7} sx={{ boxShadow:3 ,width:160 }} mt={5}> 
                        <ButtonBase onClick={minus}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowBackIosIcon /></Box></ButtonBase> 
                        <ButtonBase onClick={add}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowForwardIosSharpIcon  /></Box></ButtonBase> 
    </Stack>
    </Box>
)}


export default  PartFourteen