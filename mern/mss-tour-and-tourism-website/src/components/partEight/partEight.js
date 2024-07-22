

import { Grid,Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ButtonBase from '@material-ui/core/ButtonBase';

import img1 from '../../assets/unesico/meskel1.jpg'
import img2 from '../../assets/unesico/meskel2.jpg'
import img3 from '../../assets/unesico/meskel3.webp'
import img4 from '../../assets/unesico/meskel4.jpg'
import img5 from '../../assets/unesico/meskel5.jpg'

import img6 from '../../assets/unesico/fiche1.jpeg'
import img7 from '../../assets/unesico/fiche2.jpg'
import img8 from '../../assets/unesico/fiche3.jpg'
import img9 from '../../assets/unesico/fiche4.jpg'
import img10 from '../../assets/unesico/fiche5.jpg'


import img11 from '../../assets/unesico/timket1.jpg'
import img12 from '../../assets/unesico/timket2.jpg'
import img13 from '../../assets/unesico/timket3.jpg'
import img14 from '../../assets/unesico/timket4.jpg'
import img15 from '../../assets/unesico/timket5.webp'

import img16 from '../../assets/unesico/geda1.jpg'
import img17 from '../../assets/unesico/geda2.jpg'
import img18 from '../../assets/unesico/geda3.jpg'
import img19 from '../../assets/unesico/geda4.jpg'
import img20 from '../../assets/unesico/geda5.jpg'

const PartEight=()=>{
    const [count,setCount]=useState(1)
   
    const add=()=>{
        if(count===4){
            setCount(4)
        }else{
            setCount(count+1)}
    }
    const minus=()=>{
        if(count===1){
            setCount(1)
        }else{setCount(count-1)}
    }

   
   
    const Cardd=(props)=>{
       

        return(
            <Stack direction='row' p={2} sx={{boxShadow:4,backgroundColor:'#F3F7F9' }} >
              <Box sx={{ width:650,marginRight:2 }}>
                  <img src={props.image1} style={{ width:635 ,height:835}}/>
              </Box>
              <Box  sx={{ textAlign:"center"}}>
                    <h1>{props.name}</h1>
                    <h6 style={{ fontSize:20 }}>{props.location}</h6>
                    <p style={{ fontSize:30,marginLeft:30,marginRight:30,marginBottom:108}}>{props.detail}</p>
                    <Stack  direction='row' ml={60} pl={7} sx={{ boxShadow:3 ,width:160 }}> 
                        <ButtonBase onClick={minus}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowBackIosIcon /></Box></ButtonBase> 
                        <ButtonBase onClick={add}><Box  sx={{ border:3,borderRadius:'50%',width:40,height:40,paddingTop:2 ,paddingLeft:1}}><ArrowForwardIosSharpIcon  /></Box></ButtonBase> 
                    </Stack>
                  <Stack direction='row' spacing={1} >
                    <img src={props.image5} style={{ width:265,height:210 }}/>
                    <img src={props.image3 } style={{ width:270,height:210 }}/>
                    <img src={props.image4} style={{ width:270,height:210 }}/>
                    <img src={props.image2} style={{ width:270,height:210}}/>
                 </Stack>
             </Box>

          

        </Stack>

    )}
    return(
        <Box >
            <Box pb={4}pl={11} pr={17} sx={{ backgroundColor:'#d6e5de',fontSize:25 }}>
                <h1 style={{ textAlign:'center' }}> Ethiopia’s Festivals and Celebrations</h1>
                <p>
                 Celebrations in Ethiopia are great and colorful events, mostly religious, and frequently take place over several days. Important Christian holidays include Meskel, Christmas, Timkat, Kiddus Yohannes and Easter. Timkat, which marks Christ's baptism, is the most colorful event of the year.  In September, the two-day feast of Meskal marks the finding of the True Cross.  Kiddus Yohannes, New Year's Day comes on September 11, which coincides with the end of the season of heavy rains and the beginning of spring. 
                  ​Muslim holidays are based on the lunar calendar and fall at different times each year. The ninth month of the Muslim calendar is devoted to Ramadan, which is marked by fasting. One of the great Muslim feasts of the year is 'Id Al Fatr, which celebrates the end of Ramadan. The 'Id al Adha is the feast marking Abraham's willingness to sacrifice Isaac as commanded by God.  On these days, after praying and listening to the imam (religious leader), Muslim Ethiopians sacrifice animals and distribute part of the meat to the poor. Wearing new clothes, they visit friends and relatives as well as family graves.  Horse races are also traditional on these days.  Muslims celebrate the Prophet Mohammed's birthday on September 20 and mark the anniversaries of numerous martyrs.
                <b style={{ fontSize:30 }}>some events are even registerd on unesico</b>
                
                </p>
            </Box>
        <h1> Ethiopia has also unesico registerd  intangible heritages</h1>
        <p>
        {/* Celebrations in Ethiopia are great and colorful events, mostly religious, and frequently take place over several days. */}
        
        </p>
        { (count===3) && <Cardd 
           name='Meskel (Commemoration feast of the finding of the True Holy Cross of Christ)'
           location='Christian holiday in the Ethiopian Orthodox, Ethiopia'
           detail="Meskel is a Christian holiday in the Ethiopian Orthodox and Eritrean Orthodox churches that commemorates the discovery of the True Cross by the Roman Empress Helena in the fourth century. 
           Meskel occurs on the 17 Meskerem in the Ethiopian calendar. 'Meskel'is Ge'ez for 'cross."
            image1={img1}
            image2={img2}
            image3={img3}
            image4={img4}
            image5={img5}

        /> }
        { (count===1) && <Cardd 
           name='Timkat (Commemoration feast of the finding of the True Holy Cross of Christ)'
           location='Christian holiday in the Ethiopian Orthodox, Ethiopia'
           detail="Timket is an Ethiopian Orthodox Tewahedo Church and 
           Eritrean Orthodox Tewahedo Church celebration of Epiphany. It is celebrated on 19 January, corresponding to the 11th day of Terr in the Ge'ez calendar. 
           Timkat celebrates the baptism of Jesus in the River Jorda.
           During the ceremonies of Timkat, the Tabot, a model of
            the Ark of the Covenant, which is present on every Ethiopian altar (somewhat like the Western altar stone), is reverently wrapped in rich cloth and borne in procession on the head of the priest.[1] The Tabot, which is otherwise rarely seen by the laity, represents the manifestation of Jesus as the Messiah
            when he came to the Jordan for baptism. "
            image1={img11}
            image2={img12}
            image3={img13}
            image4={img14}
            image5={img15}

        /> }{ (count===2) && <Cardd 
            name='Fichee-Chambalaalla'
            location='New Year festival of the Sidama people, Ethiopia'
            detail="Fichee-Chambalaalla is a New Year festival celebrated among the 
            Sidama people. According to the oral tradition, Fichee commemorates a Sidama woman who visited her parents and relatives once a year after her marriage, bringing buurisame, a meal prepared from false banana, milk and butter, which was shared with neighbours. Fichee has since become a unifying symbol of the Sidama people. Each year, astrologers determine the 
            correct date for the festival, which is then announced to the clans"
             image1={img6}
             image2={img7}
             image3={img8}
             image4={img9}
             image5={img10}
 
         /> }
         { (count===4) && <Cardd 
            name='Gada system'
            location='an indigenous democratic socio-political system of the Oromo, Ethiopia'
            detail="ada is a traditional system of governance used by the Oromo people in Ethiopia developed from knowledge gained by community experience over generations. The system regulates political, economic, social and religious activities of the community dealing with issues such as conflict resolution, reparation and protecting women’s rights. It serves as a mechanism for enforcing moral conduct, building social cohesion, and expressing forms of community culture. Gada is organized into five classes with one of these functioning as the ruling class consisting of a chairperson, officials and an assembly. "
             image1={img16}
             image2={img17}
             image3={img18}
             image4={img19}
             image5={img20}
 
         /> }

        </Box>
    )

}

export default PartEight



