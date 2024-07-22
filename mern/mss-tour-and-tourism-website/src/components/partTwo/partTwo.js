import { Box, Button, Stack } from "@mui/material";
import  React ,{ useState, useEffect } from "react";
import ButtonBase from '@material-ui/core/ButtonBase';




import img1 from '../../assets/places/semenM.jpeg'
import img2 from '../../assets/places/lalibela.jpg'
import img3 from '../../assets/places/addisabeba.jpg'
import img4 from '../../assets/places/axum.jpeg'
import img5 from '../../assets/places/blueNile.jpg'
import img6 from '../../assets/places/ertale.webp'
import  img7 from '../../assets/places/gonder.jpg'
import img8 from '../../assets/places/hamer.jpg'
import img9 from '../../assets/places/harer.jpg'
import img10 from '../../assets/places/ArbaMinch.jpeg'
import { Link } from "react-router-dom";


const PartTwo=()=>{

   
    const [count,setCount]=useState(1)
    const Places=(props)=>{
      return(
        <Link to='/detailpage'>
          <ButtonBase>

        <Box sx={{ display:'flex',direction:'row',height:400 }}>

           <Box > < img src={props.image} style={{ width:600,height:400 }}/></Box>

           <Box sx={{ backgroundColor:'white',color:'black',boxShadow:4 }}>  
              <h1 > {props.title}</h1>
                <p1 style={{ fontSize:'26px'}}>
                  {props.description}
               </p1>
          </Box>

          </Box>
          </ButtonBase>
          </Link>
      )
    }
    useEffect(()=>{

         const interval=setInterval(()=>{
          setCount(count +1)
          if (count===10) setCount(1)
             
         },2000)
         return ()=>clearInterval(interval)

    },[count])
    
      

       return(
        <Stack
         sx={{ height:780,
         backgroundColor:'#0a0a0a',
         opacity: 0.9,
         color:'white',
         boxShadow:4,
         direction:'column',
         textAlign: 'center',
         marginLeft:'20px',
         marginRight:'20px',
         padding:'20px'

        }}>
          <h1 >Ethiopia has alot place to visit</h1>
          <p style={{ fontSize:'25px' }}>Ethiopia is the “Land of Thirteen Months”. It's a magical country with ancient 
          and spiritual roots, rich in significant religious history and that has a fabulous story to tell. The beauty of wild mountains is only surpassed by the awe-inspiring religious architecture that draws visitors to this amazing country. It’s where legends of the Ark of the Covenant live side by side and in harmony with ancient Islamic mosques. From thundering waterfalls to its vibrant and modern capital city, Addis Ababa, Ethiopia is a place you have to see to believe. Here are 10 of the best and most incredible places to visit in Ethiopia.
          </p>
          <h1 style={{ textAlign:'left' ,marginTop:30 ,position:'relative' ,marginLeft:19}}>Most visted places</h1>
          <Box   p={3}>
           
           { (count ===1) && <Places title='Simien Mountains'
                      image={img1}
                      description='Nestled in the highlands of northern Ethiopia you
                         will find the spectacular Simien Mountains. 
                         This jewel of an area makes you feel lost in time 
                         with its remarkable rock-hewn churches and medieval castles.
                         These majestic mountains seemed to have been hand-shaped by
                         nature and are home to a rich cultural heritage. 
                          They now draw people here to learn about ancient religious sites 
                          and to witness the jagged peaks and seemingly endless vistas. '
                     />}

             { (count===2) &&<Places 
             title='Simien Mountains'
             image={img2}
             description="Near the small town of Lalibela, there are eleven medieval churches, which are all carved out of massive
              slabs of volcanic rock! The churches were built in the 12th-century under the direction of King Lalibela. He had a vision of a “New Jerusalem” for Christians who were prevented from making the pilgrimage to the Holy Land because of Muslim conquests across the region."
             /> }   
             
             { (count===3) && <Places 
               title='Addis abeba'
               image={img3}
               description="Addis Ababa is the fourth largest city in Africa and is the diplomatic home to the African Union. This vibrant city sits atop the Entoto Mountains and has both an African and international feel. Addis has a mystical aura that seems to act like a portal to the past. 
                It's a place where you can explore the beautiful orthodox churches and museums."
             /> }  
             { (count===4) &&<Places 
             title='Aksum'
             image={img4}
             description="Head to Aksum and you will see more ancient history that you can imagine. Aksum is one of the oldest cities in all of Africa and is rich in legend and mystery. It is believed to be the home of the
              Queen of Sheba and the final resting place of the legendary Ark of the Covenant."
             /> }  
             { (count===5) &&<Places 
             title='Blue Nile Falls'
             image={img5}
             description="Close to the city of Bahir Dar you will find the incredible Blue Nile Falls. The locals call it Tis- Isat Falls (translated as “Smoke of Fire”) and it is the most impressive sight on either the Blue or White Nile. The falls stretch a quarter-mile 
             wide during the flood season and drops into a gorge of more than 150 feet deep."
             /> }  
             { (count===6) &&<Places 
             title='Danakil Depression'
             image={img6}
             description="If you are up a really hot time, then make your way to Ethiopia's Danakil Depression. The Depression overlaps the borders 
             of Eritrea and Djibouti and is part of the great East African Rift Valley."
             /> }  
             { (count===7) &&<Places 
             title='Gondar'
             image={img7}
             description="Nestled in 
             the highlands of Northern Ethiopia, you’ll find the fabled city of Gondar. Once you have reached Ras Dashen, the highest peak in the spectacular Simien Mountains, you will be able to marvel at Gondar, the “Camelot of Africa”. The castle was the medieval home to
              Ethiopian Emperors and Princesses who led the country for nearly 1000 years"
             /> }  
             { (count===8) &&<Places 
             title='The People of the Lower Omo Valley'
             image={img8}
             description="If you want a cultural experience that you will never forget, then plan a trip to the Lower Omo Valley. Here you can connect
              with one of more than a dozen indigenous peoples that live in the region."
             /> }       

       { (count===9) &&<Places 
             title='The Holy City of Harar'
             image={img9}
             description="Harar is a city in Northeast Ethiopia near the border with Somalia and a great seat of Islamic culture. 
             Its walled city dubbed “Africa’s Mecca,” is home to more than 100 mosques and is also considered the “fourth holy city of Islam”. "
             /> } 

        { (count===10) &&<Places 
             title='Arba Minch'
             image={img10}
             description="On the shores of Abaya Lake in Southern Ethiopia, Arba Minch is full of natural wonder and beauty. Arba Minch in Amharic means “forty springs,” and the area is rich in many tiny springs that bubble up from the ground.
              You can see many of them as you hike through Nechisar National Park."
             /> }  


          </Box>
        </Stack>
    )
}



export default PartTwo