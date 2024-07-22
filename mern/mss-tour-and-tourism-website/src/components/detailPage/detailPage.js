

import { Box, Stack } from "@mui/material";
import React from "react";
import img1 from '../../assets/detail/awash0.jpg'
import img2 from '../../assets/detail/awash1.jpg'
import img3 from '../../assets/detail/awash2.jpg'
import img4 from '../../assets/detail/awash3.jpg'
import img5 from '../../assets/detail/awash4.jpg'
import img6 from '../../assets/detail/awash5.jpg'

import { Link, Navigate } from "react-router-dom";
import img7 from '../../assets/detail/semen1.jpg'
import img8 from '../../assets/detail/omo.jpg'
import img9 from '../../assets/detail/nechsar.jpg'
import img10 from '../../assets/detail/mago.jpg'
import img11 from '../../assets/detail/abijata.jpg'
import img12 from '../../assets/detail/chebera.jpg'
import img13 from '../../assets/detail/bale.jpg'
import img14 from '../../assets/detail/gambella.jpg'
import img15 from '../../assets/detail/yagudi.jpg'
import { ButtonBase } from "@material-ui/core";

import img16 from '../../assets/detail/wenchi.jpg'
import img17 from '../../assets/detail/dallol.jpg'
import img18 from '../../assets/detail/tiya.png'
import img19 from '../../assets/detail/zway.jpg'
import img20 from '../../assets/detail/menelik.jpg'
import img21 from '../../assets/detail/langano.webp'
import img22 from '../../assets/detail/adadi.jpg'
import img23 from '../../assets/detail/ballon.jpg'

const DetailPage=()=>{
    const Cardd=(props)=>{
        return(
            <Link to='/detailpage'>
             <ButtonBase>
              <Box sx={{ borderRadius:8, boxShadow:3 ,width:285,height:220}}>
                <img src={props.imagee} style={{ borderRadius:8,width:284,height:150}}/>
                <h3 style={{ textAlign:'center',color:'black' }}>{props.title}</h3>
              </Box>
            </ButtonBase>
        </Link>

        )
    }
    return(

    <Box p={2}>

        <Stack direction='row'>
          <img src={img1} style={{ width:600, height:400,borderRadius:8}}/>
          <Box>
            <h1 style={{ textAlign:'center' }}>Awash Park</h1>
            <p style={{ fontSize:25,paddingLeft:20,paddingRight:10 }}>Awash National Park is a national park in Ethiopx xqa. Located at the border of Oromia state and Afar state, the park covers an area of 827 square kilometers, most of it lies at an altitude of 900 meters. Spanning across the southern tip of the Afar Region and the northeastern corner of the East Shewa Zone of Oromia, this park is 225 kilometers east of Addis Ababa (and a few kilometers west of Awash and east of Metehara).

                  The park is best known for its rich biodiversity and rural landscapes.
                  the region is subject to a bimodal rainfall pattern a rainy season
                   followed by a dominant dry season which can last up to 10 months .

            </p>
               <p style={{ top:65,position:'relative', fontSize:20 ,paddingLeft:25}}>
                <Link><b style={{ paddingRight:12 }}>#Park</b> </Link>
               <Link ><b>#Oromia</b></Link> 
              </p>
          </Box>
        </Stack>
        <Stack direction='row' spacing={1} pt={1}>
        <img src={img2} style={{ width:390}}/>
        <img src={img3} style={{ width:380}}/>
        <img src={img4} style={{ width:390}}/>
        <img src={img5} style={{ width:380}}/>
        <img src={img6} style={{ width:390}}/>
        </Stack>

      <Box mt={15}>
        <h1>Other park reccommandation</h1>
        <Stack direction='row' spacing={1} pb={2}>
            <Cardd imagee={img7}
                   title='Simien Mountains National Park'
               />
             <Cardd imagee={img8}
                   title='Omo National Park and River'
               />
             <Cardd imagee={img9}
                   title='Nechisar National Park'
                  />
              <Cardd imagee={img10}
                 title='Mago National Park'
                 /> 
             <Cardd imagee={img11}
                   title='Abidjatta-Shalla National Park'
               />
               <Cardd imagee={img12}
                   title='Chebera Churchura National Park'
               />
          
        </Stack>
        <Stack direction='row' spacing={1}>
            
             
             <Cardd imagee={img13}
                   title='Bale Mountains National Park'
                  />
              <Cardd imagee={img14}
                 title='Gambella National Park'
                 /> 
             <Cardd imagee={img15}
                   title='Yangudi Rassa National Park'
               />
               
          
        </Stack>
     </Box>

        <Box mt={10}>
        <h1>Others place to visit around here</h1>
        <Stack direction='row' spacing={1} mb={2}>
            <Cardd imagee={img16}
                   title='Wenchi Crater Lake'
               />
             <Cardd imagee={img17}
                   title='Dallol'
               />
             <Cardd imagee={img18}
                   title='Tiya World Heritage Site'
                  />
              <Cardd imagee={img19}
                 title='Lake ziway'
                 /> 
             <Cardd imagee={img20}
                   title='The Mausoleum of Menelik II'
               />
            <Cardd imagee={img21}
                title='Lake Langano'
             /> 
           
        </Stack>
        <Stack direction='row' spacing={1}>
          <Cardd imagee={img22}
                title='Adadi Maryam'
             /> 

          <Cardd imagee={img23}
                title='Adadi Maryam'
             /> 
             </Stack>

        </Box>
    </Box>
    )
}


export default DetailPage