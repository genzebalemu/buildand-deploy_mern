
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
// import img1 from '../../assets/img3.jpg'
import img1 from '../../assets/foods/kitfo.jpg'
import img2 from '../../assets/foods/kurtSiga.jpg'
import img3 from '../../assets/foods/tej.jpg'
import img4 from '../../assets/foods/beyaynet.jpg'
import img5 from '../../assets/foods/genfo.jpg'
import img6 from '../../assets/foods/Bula.jpg'
import img7 from '../../assets/foods/tibs.jpg'
import img8  from '../../assets/foods/areke.jpg'
import img9 from '../../assets/foods/tela.jpg'
import img10 from '../../assets/foods/coffee.jpg'
import img11 from '../../assets/foods/dorowet.jpg'
import img12 from '../../assets/foods/chechebs.jpg'
import img13 from '../../assets/foods/firfir.jpg'
import img14 from '../../assets/foods/gomen.jpg'
import img15 from '../../assets/foods/injera.jpg'
import img16 from '../../assets/foods/kinche.jpg'
import img17 from '../../assets/foods/kocho.jpg'
import img18 from '../../assets/foods/shiro.jpg'
import img19 from '../../assets/foods/Beso.jpg'
import img20 from '../../assets/foods/sheklaTibs.jpg'

const PartFive=()=>{

    const FoodCard=(props)=>{
        return(
        <Stack >
            <Box sx={{ boxShadow:3,marginBottom:2 }}>
              <Grid container>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6} >
                   <Box  >
                    < img src={props.imageOne} style={{ width:250, height:180,marginLeft:35}} />
                     <b style={{ fontSize:25,marginLeft:35 }}> {props.nameOne}</b>
                    </Box> 
                   <Box>
                    < img src={props.imageTwo} style={{ width:250, height:180,marginLeft:35}}/>
                    <b style={{ fontSize:25 ,marginLeft:35}}> {props.nameTwo}</b>

                 </Box> 

                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={6} xs={6} mb={3}>
                  <Box>
                    < img src={props.imageThree} style={{ height :400, width:250}}/>
                    <b style={{ fontSize:25 ,marginLeft:35}}> {props.nameThree}</b>

                </Box> 
                </Grid>
              </Grid>
            </Box>  

            {/* <Box>
                <h3> kitfo </h3>
                <p>kifto is amazing food</p>
            </Box> */}

        </Stack>)
    }
    return(
        <Box>
            <h1> some delicious and unique food  and drink in ethiopia</h1>
            <Grid container>
                <Grid item lg={12} xl={12} md={12} sm={12} xs={12}> 
                   <Stack direction='row' 
                   spacing={2}
                   >
                    <FoodCard 
                    imageOne={img1}
                    imageTwo={img2}
                    imageThree={img3}
                    nameOne="Kitfo"
                    nameTwo='Kurt Siga'
                    nameThree='Tej'


                     />
                    <FoodCard 
                    imageOne={img4}
                    imageTwo={img5}
                    imageThree={img8}
                    nameOne="Beyaynetu"
                    nameTwo='Genfo'
                    nameThree='Habesha Areke'/>
                    <FoodCard 
                    imageOne={img12}
                    imageTwo={img14}
                    imageThree={img10}
                    nameOne="Chechebsa"
                    nameTwo='Gomen'
                    nameThree='Habesha buna(coffee)'/>

                   </Stack>
                </Grid>
                <Grid item lg={12} xl={12} md={12} sm={12} xs={12}> 
                <Stack direction='row' 
                // spacing={2}
                >
                    <FoodCard 
                    imageOne={img11}
                    imageTwo={img15}
                    imageThree={img9}
                    nameOne="Doro wet"
                    nameTwo='Injera'
                    nameThree='Tela'/>
                    <FoodCard 
                    imageOne={img13}
                    imageTwo={img17}
                    imageThree={img20}
                    nameOne="Firfir"
                    nameTwo='Kocho'
                    nameThree='Shekla tibs'/>
                    <FoodCard 
                    imageOne={img18}
                    imageTwo={img16}
                    imageThree={img19}
                    nameOne="Shiro"
                    nameTwo='Kinche'
                    nameThree='Beso'/>

                   </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PartFive