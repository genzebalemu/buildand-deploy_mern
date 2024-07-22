

 import { Box, Stack } from '@mui/material'
 import React, { useState } from 'react'
 import ButtonBase from '@material-ui/core/ButtonBase';

//Bale Mountains National Park
 //Gambella National Park
//Mago National Park
//Abijatta-Shalla National Park
//Simien Mountains National Park
//Nech Sar National Park
//Yangudi Rassa National Park
//Maze National Park
//Awash National Park
//Omo National Park
//Kafta Sheraro National Park
//Geraille National Park

import img1 from '../../assets/park/Bale Mountains National Park.jpg'
import img2 from '../../assets/park/Gambella National Park.avif'
import img3 from '../../assets/park/Mago National Park.jpg'
import img4 from '../../assets/park/Abijatta-Shalla National Park.jpg'
import img5 from '../../assets/park/Simien Mountains National Park.jpg'
import img6 from '../../assets/park/Nech Sar National Park.webp'
import img7 from '../../assets/park/Yangudi Rassa National Park.jpg'
import img8 from '../../assets/park/Maze National Park.jpg'
import img9 from '../../assets/park/Awash National Park.jpg'
import img10 from '../../assets/park/Omo National Park.jpg'
import img11 from '../../assets/park/Kafta Sheraro National Park.jpg'
import img12 from '../../assets/park/Geraille National Park.jpg'

import {Link} from 'react-router-dom'

const PartEleven=()=>{

    // const [count,setCount]=useState(1)

        const Cardd=(props)=>{
        return(
          <Link to='detailpage'>
        <ButtonBase>
          <Box sx={{ border:1,borderRadius:'5%', width:310,height:480,boxShadow:4,
            '&:hover': {
              boxShadow:8,
              border:2,
              borderColor:'red'
            },
        }}> 
            <img src={props.imagee} style={{ width:308,height:360 , border:1,borderRadius:'5%',}}/>
            <h2 style={{ paddingTop:15 ,color:'black'}}> {props.title} </h2>
            {/* <p> {props.explanation}</p> */}
        </Box>
        </ButtonBase>
        </Link>
        )
    }
    return(
        <Box p={2}>
       <h1> some parks in ethiopia which contain alot life</h1>
        
         <Stack direction='column' spacing={1} pl={5}>

                <Stack direction='row' spacing={3} >
                     < Cardd imagee={img1}
                                title='Bale Mountains National Park'
                    />
                    < Cardd imagee={img2}
                                title='Gambella National Park'
                    />< Cardd imagee={img3}
                               title='Mago National Park'
                   />
                  < Cardd imagee={img4}
                           title='Abijatta-Shalla National Park'
                 />
                 < Cardd imagee={img5}
                                title='Simien Mountains National Park'
                />
               
                </Stack>

                <Stack direction='row' spacing={3}>
                     < Cardd imagee={img6}
                                title='Nech Sar National Park'
                    />
                    < Cardd imagee={img7}
                                title='Yangudi Rassa National Park'
                    />< Cardd imagee={img8}
                               title='Maze National Park'
                   />
                  < Cardd imagee={img9}
                           title='Awash National Park'
                 />
                 < Cardd imagee={img10}
                                title='Omo National Park'
                />
                
                </Stack>




                <Stack direction='row' spacing={3}>
                < Cardd imagee={img12}
                                title='Geraille National Park'
                />
                 < Cardd imagee={img11}
                                title='Kafta Sheraro National Park'
                />
                </Stack>


               
                </Stack>
                      
        </Box>
    )
}


export default  PartEleven