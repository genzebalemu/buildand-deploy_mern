import React from "react";

import { Grid,Box,  Stack } from "@mui/material";
import img1 from '../../assets/waterfalls/abay.jpg'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import { Button, CardActionArea, CardActions } from '@mui/material';

import img2 from '../../assets/waterfalls/awashRiver.jpg'
import img3 from '../../assets/waterfalls/abayaChamoLake.jpg'
import img4 from '../../assets/waterfalls/afderaAsaleLake.jpg'
import img5 from '../../assets/waterfalls/angerebRiver.jpg'
import img6 from '../../assets/waterfalls/baroAkoboRiver.jpg'
import img7 from '../../assets/waterfalls/hawasaLake.jpg'
import img8 from '../../assets/waterfalls/lakeLangano.jpg'
import img9 from '../../assets/waterfalls/lakeTana.jpg'
import img10 from '../../assets/waterfalls/merebRiver.jpg'
import img11 from '../../assets/waterfalls/omoRiver.jpg'
import img12 from '../../assets/waterfalls/shebelleRiver.jpg'
import img13 from '../../assets/waterfalls/tekezeRiver.jpg'
import img14 from '../../assets/waterfalls/zwayLake.jpg'
import img15 from '../../assets/waterfalls/LakeShala.jpg'
import { Link } from "react-router-dom";
import { ButtonBase } from "@material-ui/core";

const PartFour=()=>{

  const Cards=(props)=>{
    return(
     <Link to='/detailpage'>
      <ButtonBase>
      <Card sx={{width:300,boxShadow:6, '&:hover': {
        boxShadow:7,
       border:3,
       borderColor:'red'} }}>
       <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="water body image"
        />
        <CardContent sx={{ height:50 }}>
          <Typography  variant="h5" >
           {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    
    </ButtonBase>
    </Link>
    )
  }
  return(
    <Grid container p={4} sx={{ backgroundColor:'orange' }} > 

      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}> 
        <h1> There is alot water falls in ethiopia  </h1>
      </Grid>

      <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
         <Box  sx={{ width:830 }}>
            <img  src={img1} style={{  width:830  }}/>
        </Box>
      </Grid>

      <Grid item lg={6} xl={6} md={6} sm={6} xs={6} >
         <Box textAlign='center' >
            <h1>Blue Nile</h1>
            <p style={{ fontSize:27 }}>The Blue Nile originates at 
              Lake Tana in Ethiopia (where it is called the Abay River).
               The river flows generally south before entering a
                canyon about 400 km (250 mi) long, about 30 km (19 mi) from Lake Tana, 
                which is a tremendous obstacle for travel and communication
                 between north and south Ethiopia. The canyon was first referred to 
                 as the "Grand Canyon" in 1968 by a British team that accomplished the
                  first descent of the river from Lake Tana to the end of the canyon;
                   subsequent river rafting parties called it the "Grand Canyon of the Nile"
            </p>
            <Button variant="contained"> See Detail</Button>
         </Box>
      </Grid>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}><h1>see more water bodies </h1></Grid>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <Stack direction='row' spacing={1} scrollButtons  variant="scrollable"
             sx={{ width:1720 }}>
           <Cards image={img2} title='Awash River'/>
           <Cards image={img3} title='Abaya and ChamoLake'/>
           <Cards image={img4} title='Afdera and Asale Lake'/>
           <Cards image={img5} title='Angereb River'/>
           <Cards image={img6} title='Baro-Akobo River'/>
           <Cards image={img7} title='Hawasa Lake'/>
           <Cards image={img8} title='Lake Langano'/>

        </Stack>
      </Grid>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
      <Stack mt={2} direction='row' spacing={1} scrollButtons  variant="scrollable"
             sx={{ width:1720 }}>
           <Cards image={img9} title='lake Tana'/>
           <Cards image={img10} title='Mereb River'/>
           <Cards image={img11} title='Omo River'/>
           <Cards image={img12} title='Shebelle River'/>
           <Cards image={img13} title='Tekeze River'/>
           <Cards image={img14} title='Zway Lake'/>
           <Cards image={img15} title='Lake Shala'/>


        </Stack>
      </Grid>


    </Grid>
  )
}

export default PartFour