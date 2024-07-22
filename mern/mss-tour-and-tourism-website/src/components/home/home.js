import React from "react"
import { Box,Grid,Button } from"@mui/material";
import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



// import {Grid,Box }from "@mui/material"
import Navbar from "../navbar/navbar"
import HeadingOne from "../headingOne/headingOne"
import PartOne from "../partOne/partOne"
import PartTwo from "../partTwo/partTwo"
import PartThree from '../partThree/partThree'
import PartFour from "../partFour/partFour"
import PartFive from "../partFive/partFive"
// import PartSix from "../partSix/partSix"
import PartSeven from "../partSeven/partSeven"
import PartEight from "../partEight/partEight"
import PartNine from "../partNine/partNine"
import PartTen from "../partTen/partTen"
import PartEleven from "../partEleven/partEleven"
import PartTwelve from "../partTwelve/partTwelve"
import PartThirteen from "../partThirteen/partThirteen"
import PartFourteen from "../partFourteen/partFourteen"
import PartFifteen from "../partFifteen/partFifteen"
// import Footer from "../footer/footer"


const Home=()=>{


  const PartSix=()=>{
  
    return(
    <Box>
      <Stack>
      <Box mb={2}pt={4} ml={20} sx={{ height:100,width:1500,boxShadow:4,borderRadius:4,textAlign:'center',fontSize:32,backgroundColor:'#f7fcf9' }}>
        On this page navigation you can navigate to the whole part on this page 
        back and front on the page
      </Box>
      <Stack direction='row' pl={10} spacing={10}>
      <Stack>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}> <a href="#part1" style={{ color:'black' }}>random places to visit in Ethiopia?</a> </Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href="#part2" style={{ color:'black' }}>What are the most visited places Ethiopia?</a> </Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part3' style={{ color:'black' }}>  What Hotels there in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part4' style={{ color:'black' }}> What Waterfalls are there in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part5' style={{ color:'black' }}> What foods are there in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part6' style={{ color:'black' }}> different type of marriage in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part12' style={{ color:'black' }}>  What Muesums are there in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a  href='#part7' style={{ color:'black' }}> What Heritages of ethiopia are registerd on unesico?</a></Box>
    </Stack>
    <Stack>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part8' style={{ color:'black' }}>  what intagible heritage or Events of ethiopia registerd on unesico?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}> <a href='#part13' style={{ color:'black' }}> what events and festival celebration are there in ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part9' style={{ color:'black' }}> What endemic animals and plants are there in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href="#part10" style={{ color:'black' }}>TOURISM in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href="#part11" style={{ color:'black' }}>What Parks are there in Ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part14' style={{ color:'black' }}> how many nations and nationatonality are there in ethiopia?</a></Box>
      <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part15' style={{ color:'black' }}> footer of the page</a></Box>
    </Stack>
  
  </Stack>
  
  </Stack>
  
  
    </Box>
    )
  }

    const Footer=()=>{
        return(
            <Box>
               
                <Stack >
                    <Box 
                      sx={{ 
                        backgroundColor:'#131414',
                        color:'white'
                        }} 
                    p={5}>
                       <h1>Contact Us</h1>
                        <form  >
                            <Stack direction='column' spacing={2} >
                              <Stack direction='row'  spacing={5}>
                               <Box >
                                <h3>Enter Full name</h3>
                                <TextField 
                                   sx={{border:'1px solid white',width:330}}
                                   inputProps={{
                                    style: {
                                      color: "white"
                                    }
                                  }}
                                    type="text"
                                    // label='Full name'
    
                                  />
                                  </Box>
    
                                  <Box>
                                  <h3>Enter Email</h3>
    
                                    <TextField 
                                   type="email"
                                //    label='email'
                                   sx={{border:'1px solid white',width:330}}
                                   inputProps={{
                                    style: {
                                      color: "white"
                                    }
                                  }}
                                 />
                                 </Box> 
                              </Stack>
                              <Box>
                              <h3>Enter Address</h3>
    
                              <TextField
                                  type="text"
                                //   label='addrress'
                                sx={{border:'1px solid white',width:690}}
                                inputProps={{
                                 style: {
                                   color: "white"
                                 }
                               }} /> 
                             </Box>
                             <Box>
                             <h3>Enter your comment</h3>
    
                              <textarea 
                                  placeholder="commet section"
                                  style={{ width:690,height:120 }}
                                   />
                            </Box>
                            <Box pl={38}>
                              <Button variant="contained" color="primary" >Submit</Button>
                            </Box>
                            </Stack>
    
                        </form>
                    </Box>
    
    
    
    
                    <Box p={8} sx={{backgroundColor:'#b4e2cb' }}>
                       
                        <Stack direction='row' spacing={16}>
    
                        <Box sx={{ width:500 }}>
                            <h1>About Us</h1>
                            <p style={{ fontSize:25 ,fontWeight:15}}>
                                Visit Ethiopia website is website which try to show all over ethiopia from the geographical
                                appearance  to wondefull events and festival celebration .it also give information and hint
                                about most visted places, amazing park and muesums , waterfalls and volcanos ,mountain and plains,endemic plant and 
                                animals,unique foods and dress in Ethiopia for peoples who want vist ethiopia and make this easy .
                            </p>    
                        </Box>
                        <Box> 
                        <h1>Contact inforation</h1>
                            <p style={{ fontSize:25 ,fontWeight:15}}>
                            <a href='#p' style={{ color:'black',textDecoration:'none' }}> <LocalPhoneIcon color="primary" fontSize="large" /> PhoneNumber</a><br/>
                            <a href='#e' style={{ color:'black',textDecoration:'none' }}><EmailIcon color="primary" fontSize="large" /> Email</a> <br/>
                            <a href='#f' style={{ color:'black',textDecoration:'none' }}><FacebookIcon color="primary" fontSize="large" /> Facebook </a><br/>
                            <a href='#i' style={{ color:'black',textDecoration:'none' }}> <InstagramIcon color="primary" fontSize="large" /> Instagram</a><br/>
                            <a href='#t' style={{ color:'black',textDecoration:'none' }}> <TelegramIcon color="primary" fontSize="large" />  Telegram</a><br/>
                            <a href='#tw' style={{ color:'black',textDecoration:'none' }}><TwitterIcon color="primary" fontSize="large" /> Twitter</a><br/>
                            <a href='#l' style={{ color:'black',textDecoration:'none' }}> <LinkedInIcon color="primary" fontSize="large" /> LinkedIn</a>
                            </p>
    
    
                        </Box>
                        <Box sx={{ width:450 }}>
                           <h1 >On page Route</h1> 
                        <b style={{fontSize:20  }}>
                            <a href="#part1" style={{ color:'black' }}>random places to visit in Ethiopia?</a><br/> 
                            <a href="#part2" style={{ color:'black' }}>What are the most visited places Ethiopia?</a><br/> 
                            <a href='#part3' style={{ color:'black' }}>  What Hotels there in Ethiopia?</a><br/> 
                            <a href='#part4' style={{ color:'black' }}> What Waterfalls are there in Ethiopia?</a><br/>
                            <a href='#part5' style={{ color:'black' }}> What foods are there in Ethiopia?</a><br/>
                            <a href='#part6' style={{ color:'black' }}> different type of marriage in Ethiopia?</a><br/>
                            <a href='#part12' style={{ color:'black' }}>  What Muesums are there in Ethiopia?</a><br/>
                            <a  href='#part7' style={{ color:'black' }}> What Heritages of ethiopia are registerd on unesico?</a><br/>
                            <a href='#part8' style={{ color:'black' }}>  what intagible heritage or Events of ethiopia registerd on unesico?</a><br/>
                            <a href='#part13' style={{ color:'black' }}> what events and festival celebration are there in ethiopia?</a><br/>
                            <a href='#part9' style={{ color:'black' }}> What endemic animals and plants are there in Ethiopia?</a><br/>
                            <a href="#part10" style={{ color:'black' }}>TOURISM in Ethiopia?</a><br/>                
                            <a href="#part11" style={{ color:'black' }}>What Parks are there in Ethiopia?</a><br/>                
                            <a href='#part14' style={{ color:'black' }}> how many nations and nationatonality are there in ethiopia?</a><br/>
                        </b>
                        </Box>
                        {/* <Box>page route</Box> */}
    
                        </Stack>
                        
                        </Box>
                </Stack>
            </Box>
        )
    }




    return(
        <Box >
           <Grid container direction='column' spacing={5}>


              {/* <Grid item sx={{  }} ><Navbar /></Grid>
              <Grid item sx={{  }}><HeadingOne /></Grid> */}
              <Grid item id='part1' sx={{ }}> <PartOne /> </Grid>
              <Grid item id='part2' sx={{ }}><PartTwo /></Grid>
              <Grid item id='part3' sx={{ }}><PartThree /></Grid>
              <Grid item id='part4' sx={{ }}><PartFour /></Grid>
              <Grid item id='part5' sx={{ }}>< PartFive /></Grid>
              <Grid item id='part6' sx={{ }}><PartSix /></Grid>
              <Grid item id='part12' sx={{ }}> <PartTwelve /> </Grid>
              <Grid item id='part7' sx={{ }}>< PartSeven/></Grid>
              <Grid item id='part8' sx={{ }}> <PartEight/></Grid>
              <Grid item  id='part13'sx={{ }}> <PartThirteen /> </Grid>
              <Grid item id='part9' sx={{ }}> <PartNine /></Grid>
              <Grid item id='part10' sx={{ }}> <PartTen /> </Grid>
              <Grid item id='part11' sx={{ }}> <PartEleven /> </Grid>
              <Grid item  id='part14' sx={{ }}> <PartFourteen /> </Grid>
              <Grid item sx={{ }}> <PartFifteen /> </Grid>
              <Grid item id='part15' sx={{ }}> <Footer /> </Grid>

           </Grid>
        </Box>
    )
}


export default Home