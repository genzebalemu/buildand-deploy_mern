




import { Box, Stack } from '@mui/material'
 import React, { useState } from 'react'
 import ButtonBase from '@material-ui/core/ButtonBase';


import img1 from '../../assets/museum/National Museum of Ethiopia.jpg'
import img2 from '../../assets/museum/Rock-Hewn Churches, Lalibela.jpg'
import img3 from '../../assets/museum/Rimbauds House & Museum.webp'
import img4 from '../../assets/museum/science museum.jpeg'
import img5 from '../../assets/museum/Unity Park.jpg'
import img6 from '../../assets/museum/Red Terror Martyrs Memorial Museum.jpg'
import img7 from '../../assets/museum/The Africa Unbound Museum.jpg'
import img8 from '../../assets/museum/The Coffee Gallery.jpg'
import img9 from '../../assets/museum/Ethnological Museum.jpg'
import img10 from '../../assets/museum/The Zoological Natural History Museum.jpg'
import img11 from '../../assets/museum/Addis Ababa Museum  Meskel Square.jpg'
import img12 from '../../assets/museum/Modern Art Museum.jpg'
import img13 from '../../assets/museum/Zoma Museum Mekanisa.jpg'
import { Link } from 'react-router-dom';

const PartTwelve=()=>{
    const Cardd=(props)=>{
        return(
          <Link to='/detailpage'>
          
        <ButtonBase>
          <Box sx={{ border:1,borderRadius:'5%', width:310,height:420,boxShadow:4,
            '&:hover': {
              boxShadow:8,
              border:2,
              borderColor:'red'
            },
        }}> 
            <img src={props.imagee} style={{ width:308,height:320 , border:1,borderRadius:'5%',}}/>
            <h2 style={{ paddingTop:12,color:'black' }}> {props.title} </h2>
            {/* <p> {props.explanation}</p> */}
        </Box>
        </ButtonBase>
        </Link >
                
        )
    }
    return(

        <Box p={2}>
        <h1> Some Museum in Ethiopia which </h1>

         
          <Stack direction='column' spacing={1} pl={5}>
 
                 <Stack direction='row' spacing={3} >
                      < Cardd imagee={img1}
                                 title='National Museum of Ethiopia'
                     />
                     < Cardd imagee={img2}
                                 title='Rock-Hewn Churches, Lalibela'
                     />< Cardd imagee={img3}
                                title='Rimbauds House & Museum'
                    />
                   < Cardd imagee={img4}
                            title='science museum'
                  />
                  < Cardd imagee={img5}
                                 title='Unity Park'
                 />
                
                 </Stack>
 
                 <Stack direction='row' spacing={3}>
                      < Cardd imagee={img6}
                                 title='Red Terror Martyrs Memorial Museum'
                     />
                     < Cardd imagee={img7}
                                 title='The Africa Unbound Museum'
                     />< Cardd imagee={img8}
                                title='The Coffee Gallery'
                    />
                   < Cardd imagee={img9}
                            title='Ethnological Museum'
                  />
                  < Cardd imagee={img10}
                                 title='The Zoological Natural History Museum'
                 />
                 
                 </Stack>
 
 
 
 
                 <Stack direction='row' spacing={3}>
                 < Cardd imagee={img11}
                                 title='Addis Ababa Museum  Meskel Square '
                 />
                  < Cardd imagee={img12}
                                 title='Modern Art Museum'
                 />

                 < Cardd imagee={img13}
                                 title='Zoma Museum Mekanisa'
                 />
                 </Stack>
 
 
                
                 </Stack>
                       
         </Box>

    )
}


export default PartTwelve