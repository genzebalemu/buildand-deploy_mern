

import React from 'react'
import { Stack,Box,Button }  from '@mui/material'

import img1 from '../../assets/catagories/addisabeba/national museum.jpg'
import img2 from '../../assets/catagories/addisabeba/Holy Trinity Cathedral.jpg'
import img3 from '../../assets/catagories/addisabeba/Ethnological Museum.jpg'
import img4 from '../../assets/catagories/addisabeba/unity park.jpg'
import img5 from '../../assets/catagories/addisabeba/St George Church.jpg'
import img6 from '../../assets/catagories/addisabeba/merkato.jpg'
import img7 from '../../assets/catagories/addisabeba/Red Terror Martyrs Memorial Museum.jpg'
import img8 from '../../assets/catagories/addisabeba/Entoto St Maryam Church.jpg'
import img9 from '../../assets/catagories/addisabeba/Meskel Square.jpg'
import img10 from '../../assets/catagories/addisabeba/Mount Entoto.jpg'


import img11 from '../../assets/catagories/addisabeba/Grand Anwar Mosque.jpg'
import img12 from '../../assets/catagories/addisabeba/Derg Monument.jpg'
import img13 from '../../assets/catagories/addisabeba/Medhanealem Cathedral.jpg'
import img14 from '../../assets/catagories/addisabeba/Lion of Judah Statue.jpg'
import img15 from '../../assets/catagories/addisabeba/Menelik II Square.jpg'
import img16 from '../../assets/catagories/addisabeba/Yekatit 12 Monument.jpg'
import img17 from '../../assets/catagories/addisabeba/Lion Park.jpg'
import img18 from '../../assets/catagories/addisabeba/Adadi Mariam.jpg'
import ButtonBase from '@material-ui/core/ButtonBase'
import { Link } from 'react-router-dom'


const AddisAbeba=()=>{
    const Part=(props)=>{
        return(
            <Link to='/detailpage' >
<ButtonBase>
        <Stack direction='row' spacing={2} sx={{height:400,borderBottom:1,boxShadow:2,borderRadius:4 ,borderColor:'black'}} pl={3} >
            <Box pt={2} >
                <img src={props.imagee} style={{ height:365,width:550 ,borderRadius:8}}/>
            </Box>
            <Box pt={8}>
                <h1 style={{color:'black' , textAlign:'center' }}>{props.title}</h1>
                <p style={{color:'black' , fontSize:26,paddingLeft:'10px',paddingRight:'10px' }}> {props.explanation}</p>
                <Button variant='contained'  sx={{ textAlign:'center',marginTop:5 }}> Read more...</Button>
            </Box>
        </Stack>
        </ButtonBase>
        </Link>)
    }

 
    return(
        
          <Stack spacing={2} ml={1} mr={1}> 
 <Part imagee={img1}
                title='National Museum of Ethiopia'
                 explanation='The National Museum of Ethiopia, 
                 also referred to as the Ethiopian National Museum,
                  is a national museum in Ethiopia. It is located in the capital, 
                 Addis Ababa, near the Addis Ababa Universitys graduate school.'/>

  <Part imagee={img2}
                title='Holy Trinity Cathedral '
                 explanation='Holy Trinity Cathedral, also known in Amharic as Kidist Selassie, is the highest
                  ranking Ethiopian Orthodox Tewahedo cathedral in Addis Ababa, Ethiopia'/>

  <Part imagee={img3}
                title='Ethnological Museum'
                 explanation='The Ethnological Museum, Addis Ababa,
                  in Ethiopia, is a public institution dedicated to ethnology and culture.
                   The Ethnological Museum houses anthropological, 
                  musicological and cultural objects.
                  The Ethnological Museum is the first university museum in Ethiopia.'/>

  <Part imagee={img4}
                title='unity park'
                 explanation='Unity Park is an amusement park located in Arat Kilo district of Addis Ababa, in the compound of National Palace. Established in October 2019, it features a zoo and historical artifacts. 
                 Admission may be purchased by online services such as Ethio telecom or using Commercial Bank of Ethiopia'/>
  <Part imagee={img5}
                title='St. George Church'
                 explanation='Saint Georges Cathedral is an Ethiopian Orthodox church in Addis Ababa,
               Ethiopia.The cathedral is noted for its distinctive octagonal form. It is located at the northern end of Churchill Road in the city.'/>
  <Part imagee={img6}
                title='merkato'
                 explanation='Merkato is a large open-air marketplace 
                 in the Addis Ketema, district of Addis Ababa, Ethiopia, and the name refers to the neighborhood in which it is located.'/>
  <Part imagee={img7}
                title='Red Terror Martyrs Memorial Museum'
                 explanation='The "Red Terror" Martyrs Memorial Museum in Addis Ababa was established in 2010 as a memorial to those who died during the Red Terror under the Derg government. 
                 The museum has displays of torture instruments, skulls and bones, coffins, bloody clothes and photographs of victims'/>
  <Part imagee={img8}
                title='Entoto St. Maryam Church                '
                 explanation='The octagonal Entoto Maryam Church hosted Menelik s coronation, 
                 but sadly for a church of such historical significance, the only time you can
                  catch a glimpse of the interior is during Sunday Mass, and even then, casual visitors (as opposed to genuine worshipers) are not welcome.
                  Down the hill on the back side of the building are the remains of Menelik s rather modest palace.'/>
  <Part imagee={img9}
                title='Meskel Square   '
                 explanation='Meskel Square is a public square in the city of Addis Ababa, 
                 Ethiopia. It is often a site for public gatherings or for demonstrations and festivals, 
                 notably, the Meskel Festival from which it takes its name'/>

<Part imagee={img10}
                title='Mount Entoto'
                 explanation='Mount Entoto is the highest peak on the Entoto Mountains, which overlooks the city of Addis Ababa, 
                 the capital of Ethiopia. It reaches 3,200 meters above sea level'/>

<Part imagee={img11}
                title='Grand Anwar Mosque'
                 explanation='The Grand Anwar Mosque,
                  also called Al-Anwar Mosque or simply Anwar Mosque and sometimes "Jamaa Salat",
                   is the largest and oldest mosque in Addis Ababa, E
                 thiopia located in a place of Merkato within Arada district.'/>
<Part imagee={img12}
                 title='Derg Monument                 '
                  explanation='The Tiglachin Monument, also known as the Derg Monument, is a memorial to Ethiopian and Cuban soldiers involved in the Ogaden War.
                   It was built during the rule of Mengistu Haile Mariam and is located on Churchill Avenue in Addis Ababa, Ethiopia'/>
<Part imagee={img13}
                  title='Medhanealem Cathedral                  '
                   explanation='Medhane Alem Cathedral, whose name means "Saviour of the World", is an Ethiopian Orthodox Tewahedo cathedral in Bole Medhanealem, Addis Ababa, Ethiopia. 
                   It is the second largest cathedral in the whole of Africa and the largest in Ethiopia.'/>
<Part imagee={img14}
                   title='Lion of Judah Statue '
                    explanation='The monument to the Lion of Judah is a statue of the Lion of Judah,
                     a symbol of Ethiopian Emperors and Ethiopia, and is located in Addis Ababa'/>

<Part imagee={img15}
                   title='Menelik II Square '
                    explanation='Menelik II Square is located in the heart of Addis Ababa, the area locally known as Arada. At the center of the square stands a magnificent equestrian statue of the Emperor.
                     The monument was erected by Emperor Haile Selassie I, in 1930, just before his coronation.'
                     />
  <Part imagee={img16}
                   title='Yekatit 12 Monument ( የካቲት 12 መታሰብያ ሐውልት )'
                    explanation='The Yekatit 12 is a monument in Addis Ababa commemorating victims of Italian reprisals following an attempt to kill the Marshal Rodolfo Graziani, marchese di Neghelli, Viceroy of Italian East Africa,
                     on 19 February 1937, or Yekatit 12 in the Ethiopian calendar.'
                     />
<Part imagee={img17}
                     title='Lion Park  '
                      explanation='ethiopian lion park have beautiful animals in it more that 200 animals for tourist 
                      the place will refresh your mind i loved it .you should check it out .'
                       />
<Part imagee={img18}
                     title='Adadi Maryam'
                      explanation='Adadi Mariam is a rock-hewn monolithic church located approximately 66 km southwest of Addis Ababa, Ethiopia. 
                      A popular tourist destination, the site is believed to have been built in the 12th century.'
                       />
  
  
  </Stack>
    
    )
}  


export default AddisAbeba