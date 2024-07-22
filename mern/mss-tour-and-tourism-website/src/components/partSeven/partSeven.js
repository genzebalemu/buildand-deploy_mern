

import { Grid,Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";




import img1 from '../../assets/unesico/aksum1.jpg'
import img2 from '../../assets/unesico/aksum2.jpg'
import img3 from '../../assets/unesico/aksum3.jpg'
import img4 from '../../assets/unesico/aksum4.jpg'
import img5 from '../../assets/unesico/aksum5.jpg'

import img6 from '../../assets/unesico/fasil1.jpg'
import img7 from '../../assets/unesico/fasil2.jpg'
import img8 from '../../assets/unesico/fasil3.jpg'
import img9 from '../../assets/unesico/fasil4.jpg'
import img10 from '../../assets/unesico/fasil5.jpg'

import img11 from '../../assets/unesico/jugol1.jpg'
import img12 from '../../assets/unesico/jugol2.jpg'
import img13 from '../../assets/unesico/jugol3.jpg'
import img14 from '../../assets/unesico/jugol4.jpg'
import img15 from '../../assets/unesico/jugol5.jpg'

import img16 from '../../assets/unesico/konso1.jpg'
import img17 from '../../assets/unesico/konso2.jpg'
import img18 from '../../assets/unesico/konso3.jpg'
import img19 from '../../assets/unesico/konso4.jpg'
import img20 from '../../assets/unesico/konso5.jpg'

import img21 from '../../assets/unesico/awash1.jpg'
import img22 from '../../assets/unesico/awash2.jpg'
import img23 from '../../assets/unesico/awash3.jpg'
import img24 from '../../assets/unesico/awash4.jpg'
import img25 from '../../assets/unesico/awash5.jpg'

import img26 from '../../assets/unesico/awash1.jpg'
import img27 from '../../assets/unesico/awash2.jpg'
import img28 from '../../assets/unesico/awash3.jpg'
import img29 from '../../assets/unesico/awash4.jpg'
import img30 from '../../assets/unesico/awash5.jpg'

import img31 from '../../assets/unesico/omo1.jpg'
import img32 from '../../assets/unesico/omo2.jpg'
import img33 from '../../assets/unesico/omo3.jpg'
import img34 from '../../assets/unesico/omo4.jpg'
import img35 from '../../assets/unesico/omo5.jpg'

import img36 from '../../assets/unesico/semen1.jpg'
import img37 from '../../assets/unesico/semen2.jpg'
import img38 from '../../assets/unesico/semen3.jpg'
import img39 from '../../assets/unesico/semen4.jpg'
import img40 from '../../assets/unesico/semen5.jpg'


import img41 from '../../assets/unesico/tiya.jpg'
import img42 from '../../assets/unesico/tiya1.jpg'
import img43 from '../../assets/unesico/tiya2.jpg'
import img44 from '../../assets/unesico/tiya3.jpg'
import img45 from '../../assets/unesico/tiya4.jpg'
import { Link } from "react-router-dom";
import { ButtonBase } from "@material-ui/core";

const PartSeven=()=>{
    const [count,setCount]=useState(1)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(count+1)
            if(count===9) setCount(1)
        },3000)

        return ()=>clearInterval(interval)
    },[count])

    const Cardd=(props)=>{
        return(
          

               
            <Stack direction='row'  p={3} sx={{boxShadow:4,backgroundColor:'#EBF5F6' }} >
              <Box  sx={{ textAlign:"center"}}>
                
                    <h1>{props.name}</h1>
                    <h6 style={{ fontSize:20 }}>{props.location}</h6>
                    <p style={{ marginBottom:203 ,fontSize:30,marginLeft:30,marginRight:30}}>{props.detail}</p>
                  <Stack direction='row' spacing={1}>
                    <img src={props.image5} style={{ width:270,height:240 }}/>
                    <img src={props.image3 } style={{ width:270,height:240 }}/>
                    <img src={props.image4} style={{ width:270,height:240 }}/>
                    <img src={props.image2} style={{ width:270,height:240}}/>
                 </Stack>
             </Box>

            <Box sx={{ width:650 }}>
             <img src={props.image1} style={{ width:640 ,height:800}}/>
            </Box>

        </Stack>
        

    )}
    return(
        <Box >
        <h1> Ethiopia has many unesico registerd heritage</h1>
       { (count===1 )&& <Cardd 
           name='Aksum'
           location='Around Tigray, Ethiopia'
           detail="Aksum is a city in northern Ethiopia. 
           It's known for its tall, carved obelisks, relics of the ancient Kingdom of Aksum.
            Most are in the northern Stelae Park, including a huge fallen pillar, now in pieces. 
            Centuries-old St. Mary of Zion is a Christian church and pilgrimage 
            site believed to have housed the biblical Ark of the Covenant.
            The neighboring Chapel of the Tablet is said to contain the Ark today."
            image1={img1}
            image2={img2}
            image3={img3}
            image4={img4}
            image5={img5}

        />
       }

      { (count===2 )&& <Cardd 
           name='Fasil Ghebb'
           location='Around Gondar, Ethiopia'
           detail=" The Fasil Ghebbi is a fortress located in Gondar, Amhara Region, 
           Ethiopia. It was founded in the 17th century by Emperor Fasilides and was the home of Ethiopian emperors. Its unique 
           architecture shows diverse influences including Hindu, Arab, 
           and Baroque characteristicsThe fortress was the residence of the Ethiopian 
           emperors during the 16th and 17th century. The city remains,
            which feature buildings with Hindu and Arab influences, 
           were later remodelled with Baroque-style architecture by Jesuit missionaries"
            image1={img6}
            image2={img7}
            image3={img8}
            image4={img9}
            image5={img10}

        />
       }

     { (count===3 )&& <Cardd 
           name='Harar Jugol, the Fortified Historic Town'
           location='Around Harar, Ethiopia'
           detail=" The fortified historic town of Harar is located in the eastern part of
            the country on a plateau with deep gorges surrounded by deserts and savannah. 
            The walls surrounding this sacred Muslim city were built between the 13th and 
            16th centuries. Harar Jugol, said to be the fourth holiest city of Islam, numbers
             82 mosques, three of which date from the 10th century, and 102 shrines, but the townhouses with their exceptional interior design constitute the most spectacular part of Harar's cultural heritage. The impact of African and Islamic traditions on the development of the town's
            building types and urban layout make for its particular character and uniqueness."
            image1={img11}
            image2={img12}
            image3={img13}
            image4={img14}
            image5={img15}

        />
       }
        { (count===4 )&& <Cardd 
           name='Konso Cultural Landscape'
           location=' konso,south-western, Ethiopia'
           detail=" Konso Cultural Landscape is an arid property of stone 
           walled terraces and fortified settlements in the Konso highlands 
           of Ethiopia. It constitutes a spectacular example of a living cultural
            tradition stretching back 21 generations (more than 400 years) adapted to
             its dry hostile environment. The landscape demonstrates the shared values, social cohesion and engineering knowledge of its communities. The site also features anthropomorphic wooden statues - grouped to represent respected members of their communities and particularly heroic events - which are an exceptional living testimony to funerary traditions that are on the verge of disappearing. 
           Stone steles in the towns express a complex system of marking the passing of generations of leaders."
            image1={img16}
            image2={img17}
            image3={img18}
            image4={img19}
            image5={img20}

        />
       }
       { (count===5 )&& <Cardd 
           name='Lower Valley of the Awash '
           location='300 km northeast of Addis Ababa, Ethiopia'
           detail=" The Awash valley contains one of the most important groupings of 
           palaeontological sites on the African continent. The remains found at the site,
            the oldest of which date back at least 4 million years, provide evidence of human evolution
            which has modified our conception of the history of humankind. The most spectacular
             discovery came in 1974, when 52 fragments of a skeleton enabled the famous Lucy to be
              reconstructed."
            image1={img21}
            image2={img22}
            image3={img23}
            image4={img24}
            image5={img25}

        />
       }

{ (count===6 )&& <Cardd 
           name='Rock-Hewn Churches, Lalibela           '
           location='Lalibela ,Amhara , Ethiopia'
           detail=" The 11 medieval monolithic cave churches of this 13th-century 'New Jerusalem' are situated in a mountainous region in the heart of Ethiopia near a traditional 
           village with circular-shaped dwellings. Lalibela is a 
           high place of Ethiopian Christianity, still today a place of pilmigrage and devotion."
            image1={img26}
            image2={img27}
            image3={img28}
            image4={img29}
            image5={img30}

        />
       }

{ (count===7 )&& <Cardd 
           name='Lower Valley of the Omo  '
           location='south-western Ethiopia,  Ethiopia'
           detail=" A prehistoric site near Lake Turkana, 
           the lower valley of the Omo is renowned the world over. The discovery of many fossils there,
            especially Homo gracilis, has been of fundamental importance in the study of human evolution."
            image1={img31}
            image2={img32}
            image3={img33}
            image4={img34}
            image5={img35}

        />
       }
       { (count===8 )&& <Cardd 
           name='Simien National Park '
           location='north east of Gondar, Amhara, Ethiopia'
           detail=" Massive erosion over the years on the Ethiopian plateau has created one of the most spectacular landscapes in the world, with jagged mountain peaks, 
           deep valleys and sharp precipices dropping some 1,500 m. The park is home to some extremely rare animals such as the Gelada baboon, the Simien fox and the Walia ibex, a goat found nowhere else in the world."
            image1={img36}
            image2={img37}
            image3={img38}
            image4={img39}
            image5={img40}

        />
       }
       { (count===9 )&& <Cardd 
           name='Tiya'
           location='Sodo woreda, Gurage zone, Southern Nation Nationalities & Peoples Region, Ethiopia'
           detail=" Tiya is among the most important of the roughly 160 archaeological sites discovered so far in the Soddo region, south of Addis Ababa. The site contains 36 monuments, including 32 carved stelae covered with symbols, most of which are difficult to decipher. They are the remains of an ancient Ethiopian culture whose age has not yet been precisely determined."
            image1={img41}
            image2={img42}
            image3={img43}
            image4={img44}
            image5={img45}

        />
       }
        </Box>
    )

}



export default PartSeven