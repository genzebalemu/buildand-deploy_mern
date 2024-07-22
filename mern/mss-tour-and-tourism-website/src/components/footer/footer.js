
// import React from "react";

// import { Box,Grid,Button } from"@mui/material";
// import { Stack } from "@mui/material";
// import TextField from '@mui/material/TextField';

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailIcon from '@mui/icons-material/Email';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const Footer=()=>{
//     return(
//         <Box>
           
//             <Stack >
//                 <Box sx={{ 
//                 backgroundColor:'#131414' ,
//                 color:'white',
//                 }} 
//                 p={5}>
//                    <h1>Contact Us</h1>
//                     <form  >
//                         <Stack direction='column' spacing={2} >
//                           <Stack direction='row' spacing={5}>
//                            <Box >
//                             <h3>Enter Full name</h3>
//                             <TextField 
//                                sx={{border:'1px solid white',width:330}}
//                                inputProps={{
//                                 style: {
//                                   color: "white"
//                                 }
//                               }}
//                                 type="text"
//                                 // label='Full name'

//                               />
//                               </Box>

//                               <Box>
//                               <h3>Enter Email</h3>

//                                 <TextField 
//                                type="email"
//                             //    label='email'
//                                sx={{border:'1px solid white',width:330}}
//                                inputProps={{
//                                 style: {
//                                   color: "white"
//                                 }
//                               }}
//                              />
//                              </Box> 
//                           </Stack>
//                           <Box>
//                           <h3>Enter Address</h3>

//                           <TextField
//                               type="text"
//                             //   label='addrress'
//                             sx={{border:'1px solid white',width:690}}
//                             inputProps={{
//                              style: {
//                                color: "white"
//                              }
//                            }}                              /> 
//                          </Box>
//                          <Box>
//                          <h3>Enter your comment</h3>

//                           <textarea 
//                               placeholder="commet section"
//                               style={{ width:690,height:120 }}
//                                />
//                         </Box>
//                         <Box pl={38}>
//                           <Button variant="contained" color="primary" >Submit</Button>
//                         </Box>
//                         </Stack>

//                     </form>
//                 </Box>




//                 <Box p={8} sx={{backgroundColor:'#b4e2cb' }}>
                   
//                     <Stack direction='row' spacing={16}>

//                     <Box sx={{ width:500 }}>
//                         <h1>About Us</h1>
//                         <p style={{ fontSize:25 ,fontWeight:15}}>
//                             Visit Ethiopia website is website which try to show all over ethiopia from the geographical
//                             appearance  to wondefull events and festival celebration .it also give information and hint
//                             about most visted places, amazing park and muesums , waterfalls and volcanos ,mountain and plains,endemic plant and 
//                             animals,unique foods and dress in Ethiopia for peoples who want vist ethiopia and make this easy .
//                         </p>

//                     </Box>
//                     <Box> 
//                     <h1>Contact inforation</h1>
//                         <p style={{ fontSize:25 ,fontWeight:15}}>
//                         <a href='#p' style={{ color:'black',textDecoration:'none' }}> <LocalPhoneIcon color="primary" fontSize="large" /> PhoneNumber</a><br/>
//                         <a href='#e' style={{ color:'black',textDecoration:'none' }}><EmailIcon color="primary" fontSize="large" /> Email</a> <br/>
//                         <a href='#f' style={{ color:'black',textDecoration:'none' }}><FacebookIcon color="primary" fontSize="large" /> Facebook </a><br/>
//                         <a href='#i' style={{ color:'black',textDecoration:'none' }}> <InstagramIcon color="primary" fontSize="large" /> Instagram</a><br/>
//                         <a href='#t' style={{ color:'black',textDecoration:'none' }}> <TelegramIcon color="primary" fontSize="large" />  Telegram</a><br/>
//                         <a href='#tw' style={{ color:'black',textDecoration:'none' }}><TwitterIcon color="primary" fontSize="large" /> Twitter</a><br/>
//                         <a href='#l' style={{ color:'black',textDecoration:'none' }}> <LinkedInIcon color="primary" fontSize="large" /> LinkedIn</a>
//                         </p>


//                     </Box>
//                     <Box sx={{ width:450 }}>
//                        <h1 >On page Route</h1> 
//                     <b style={{fontSize:20  }}>
//                         <a href="#part1" style={{ color:'black' }}>What Parks are there in Ethiopia?</a><br/>                
//                        <a  href='#part2' style={{ color:'black' }}> What Heritages of ethiopia are registerd on unesico?</a><br/>
//                        <a href='#part3' style={{ color:'black' }}>  What Hotels there in Ethiopia?</a><br/>
//                        <a href='#part4' style={{ color:'black' }}>  what intageble heritage or Events of ethiopia registerd on unesico?</a><br/>
//                        <a href='#part5' style={{ color:'black' }}>  What Muesums are there in Ethiopia?</a><br/>
//                        <a href='#part6' style={{ color:'black' }}> What Waterfalls are there in Ethiopia?</a><br/>
//                        <a href='#part7' style={{ color:'black' }}> what events and festival celebration are there in ethiopia?</a><br/>
//                        <a href='#part8' style={{ color:'black' }}> What foods are there in Ethiopia?</a><br/>
//                        <a href='#part9' style={{ color:'black' }}> how many nations and nationatonality are there in ethiopia?</a><br/>
//                        <a href='#part10' style={{ color:'black' }}> What animals and plants are there in Ethiopia?</a>
//                     </b>
//                     </Box>
//                     {/* <Box>page route</Box> */}

//                     </Stack>
                    
//                     </Box>
//             </Stack>
//         </Box>
//     )
// }




// export default Footer