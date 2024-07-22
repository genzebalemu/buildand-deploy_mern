

import React from "react";

import Cardd from "../card/card";
import { Stack ,Box} from "@mui/material";
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'
import img13 from '../../assets/hilton.jpg'
import img14 from '../../assets/mu.jpg'
import img15 from '../../assets/har.jpg'
import img16 from '../../assets/aksum.jpg'
import img17 from '../../assets/lali.jpg'



const PartOne=()=>{
    const nu = [1,2,4,5,6]
    const pics=[img2,img3,img4,img5]
    const pics2=[img7,img8,img9,img10]
     

    return(
    <Stack spacing={5} mt={6}>
        <Stack direction='row' spacing={4} pl={10}>
         
                
               <Box>
                
                <Cardd    
                          imagee={img2}
                           title='Awash Park'
                           explanation='Awash National Park is a
                            national park in Ethiopia. Located at the border of Oromia state and Afar state'/>
            </Box>
            <Box>
                
                <Cardd    
                          imagee={img3}
                           title='Dallol'
                           explanation='Dallol is a locality in the Dallol woreda of northern Ethiopia.
                           Located in Kilbet Rasu, Afar Region in the Afar Depression'/>
            </Box>
             <Box>
                
                
                <Cardd    
                          imagee={img13}
                           title='Hilton Addis Ababa '
                           explanation='Stay At Hilton Addis Ababa Hotel, An Urban Oasis Near
                            Addis Ababa’s Bustling Center. 
                        '/>
            </Box>
            <Box>
                
                <Cardd    
                          imagee={img5}
                           title='Blue Nile River '
                           explanation='The Blue Nile is a river originating at Lake Tana in Ethiopia.
                            It travels for approximately 1,450 km through Ethiopia and Sudan'/>
            </Box>
         
          
        </Stack>
        <Stack direction='row' spacing={4} pl={10}>
               
         <Box>
          
          <Cardd    
                    imagee={img14}
                     title='Rimbauds House & Museum'
                     explanation='Its a beautiful building in Jegol, house of form French poet Arthur Rimbaud who was given shelter in Harar.'/>
      </Box>
      <Box>
          
          <Cardd    
                    imagee={img15}
                     title='Harar Jugol'
                     explanation='it is located in the eastern part of the country on a plateau with deep gorges 
                     surrounded by deserts and savannah'/>
      </Box>
       <Box>
          
          
          <Cardd    
                    imagee={img16}
                     title='Aksum'
                     explanation='Aksum symbolizes the wealth and importance of the civilization of 
                     the ancient Aksumite kingdom,'/>
      </Box>
      <Box>
          
          <Cardd    
                    imagee={img17}
                     title='Lalibela'
                     explanation='Lalibela is a site of pilgrimage for millions of Ethiopian Orthodox Christians.'/>
      </Box>
   
    
  </Stack>
        
    </Stack>
    )
}


export default PartOne