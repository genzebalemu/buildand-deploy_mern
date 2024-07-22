

import React from 'react'
import { Stack,Box,Button }  from '@mui/material'

import img1 from '../../../assets/typeCatagory/hotels/kuriftu.jpg'
import img2 from '../../../assets/typeCatagory/hotels/hayat.webp'
import img3 from '../../../assets/typeCatagory/hotels/sheraton.jpg'
import img4 from '../../../assets/typeCatagory/hotels/oblisk.jpg'
import img5 from '../../../assets/typeCatagory/hotels/lobela.jpg'
import img6 from '../../../assets/typeCatagory/hotels/nexus.webp'
import img7 from '../../../assets/typeCatagory/hotels/elilly.webp'
import img8 from '../../../assets/typeCatagory/hotels/haile.webp'
import img9 from '../../../assets/typeCatagory/hotels/haile2.webp'
import img10 from '../../../assets/typeCatagory/hotels/ivy.webp'


import img11 from '../../../assets/typeCatagory/hotels/haile3.jpg'
import img12 from '../../../assets/typeCatagory/hotels/hilton.webp'
import img13 from '../../../assets/typeCatagory/hotels/fikir.webp'
import img14 from '../../../assets/typeCatagory/hotels/skylight.jpg'
import { Link } from 'react-router-dom'

import ButtonBase from '@material-ui/core/ButtonBase';



const Hotels=()=>{
    const Part=(props)=>{
        return(
            <Link to='/detailpage' >
              <ButtonBase>
               <Stack direction='row' spacing={2} sx={{ height:400,borderBottom:1,boxShadow:2,borderRadius:4,borderColor:'black' }} pl={3} >
              <Box pt={2} >
                <img src={props.imagee} style={{ height:365,width:550 ,borderRadius:8}}/>
             </Box>
            <Box pt={8}>
                <h1 style={{ textAlign:'center',color:'black' }}>{props.title}</h1>
                <p style={{ color:'black',fontSize:26,paddingLeft:'10px',paddingRight:'10px' }}> {props.explanation}</p>
                <Button variant='contained'  sx={{ textAlign:'center',marginTop:5 }}> Read more...</Button>
            </Box>
        </Stack>
        </ButtonBase>
        </Link>
        )
    }

 
    return(
        
          <Stack spacing={2} ml={1} mr={1}> 
 <Part imagee={img1}
                title='Kuriftu Resort & Spa Bishoftu, Bishoftu  '
                explanation='Our resort branch offers high-end luxury in exceptionally cultural settings. With achingly perfect panoramas, Kuriftu is where luxury reaches its pinnacle and service is simultaneously warm, genuine and sensational. After taking in the natural beauty of the wildlife and countryside, our organic spa and gourmet restaurants are the perfect
                 places to relax as you prepare to continue your getaway experience. Conncted with our Kuriftu resort &spa Bishoftu is found Kuriftu Water Park.'/>

  <Part imagee={img2}
                title='Hyatt Regency Addis Ababa   '
                 explanation='Hyatt Regency is located just 15 minutes from Bole international airport, and most centrally located on Meskel Square, connecting the large artery roads 
                 of Addis Ababa. The hotel stands within a short walking distance to the United Nations Conference center and within a 15 min. drive to the African Union Headquarters with the largest conference facilities in the country'/>

  <Part imagee={img3}
                title='Sheraton Addis, Addis Ababa'
                 explanation='Located in Addis Ababa, Sheraton Addis, a Luxury Collection Hotel, Addis Ababa is in the city center. Addis Merkato and Shola Market are worth checking out if shopping is on the agenda, while those wishing to experience the
                  areas natural beauty can explore Friendship Park and Unity Park. Traveling with kids? Consider Tiglachin Memorial, or check out an event or a game at Addis Ababa Stadium. Enjoy the great outdoors with mountain biking,.'/>

  <Part imagee={img4}
                title='Obelisk Hotel Axum'
                 explanation='Obelisk Hotel Axum features a garden, shared lounge, a terrace and restaurant in Āksum. Providing a bar, the property is located within a 19-minute walk of King Bazens Tomb. The property provides a 24-hour front desk, airport transportation, room service and free WiFi.

                 Every room is equipped with a private bathroom with a shower, while selected rooms include a balcony and others also provide guests with city views. Guest rooms at the hotel are equipped with a flat-screen TV with satellite channels.'/>
  <Part imagee={img5}
                title='Hotel Lobelia, Addis abeba'
                 explanation='Hotel Lobelia offers accommodations in Addis Ababa. The hotel has a complimentary fitness center and sauna, and guests can enjoy a meal at the restaurant. Free WiFi is offered 
                 throughout the property and free private parking is available on site.'/>
  <Part imagee={img6}
                title='Swiss Inn Nexus Hotel,Addis abeba'
                 explanation='Located near the boardwalk, Swiss Inn Nexus Hotel is in Bole neighborhood and is connected to a shopping center
                 . Unity Park and “Red Terror” Martyrs Memorial Museum are cultural highlights, and travelers looking to shop may want to visit Zefmesh Grand Mall and Century Mall'/>
  <Part imagee={img7}
                title='Elilly International Hotel                '
                 explanation='Located in Kirkos neighborhood, Elilly International Hotel is connected to the convention center. Looking to enjoy an event 
                 or a game while in town? See whats going on at Addis Ababa Stadium'/>
  <Part imagee={img8}
                title=' Haile Resort Arbaminch'
                 explanation='Haile Resort Arbaminch in Migie has 4-star accommodations with a garden, a shared lounge and a bar.'/>
  <Part imagee={img9}
                title='Haile Resort Adama'
                 explanation='Haile Resort Adama features a fitness center, garden, a shared lounge and terrace in Adama. 
                 This 4-star hotel offers room service and a 24-hour front desk.'/>

<Part imagee={img10}
                title='Ivy Hotel, Bishoftu  '
                 explanation='Ivy Hotel, Bishoftu has a fitness center, garden, a shared lounge and restaurant in Debre Zeyit.
                  Among the various facilities are a bar and a spa & wellness center.'/>

<Part imagee={img11}
                title='Haile Resort Hawassa '
                 explanation='Haile Resort Hawassa has an outdoor swimming pool, garden, a shared lounge and terrace in Āwasa.
                  Featuring room service, this property also provides guests with a playground.'/>
<Part imagee={img12}
                 title='Hilton Addis Ababa'
                  explanation='Offering a large swimming pool surrounded by a tropical garden and sun loungers,
                   the Hilton Addis Ababa is within 4.3 mi from the Addis Ababa Bole International Airport.'/>
<Part imagee={img13}
                  title='FikirandRay Lodge'
                   explanation='Located in Lalibela, a 1-minute walk from Bet Medhane Alem, FikirandRay Lodge provides accommodations
                    with free bikes, free private parking, a garden and a shared lounge.'/>
<Part imagee={img14}
                   title='Ethiopian Skylight Hotel  '
                    explanation='Located in Addis Ababa, Ethiopian Skylight Hotel is 0.3miles from Bole International Airport and offers various facilities, 
                    such as a fitness center, Indoor and Outdoor swimming pool, spa and sauna.'/>


  
  
  </Stack>
    
    )
}  


export default Hotels