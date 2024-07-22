// import { Box, Button, Stack } from "@mui/material";
// import  React ,{ useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// // import img1 from '../../assets/img2.jpg'
// // import img2 from '../../assets/img3.jpg'
// // import img3 from '../../assets/img10.jpg'
// // import img4 from '../../assets/img12.jpg'
// // import img5 from '../../assets/img11.jpg'

// // const PartSix=()=>{
// //     const [count, setCount]=useState(0)
// //     // const [timer,setTimer]=[1,2,3,4,5]
    

    
// //     useEffect(()=>{
// //         const interval=setInterval(()=>{
            
           
// //            setCount(count + 1)
// //            if (count ===5) setCount(0)


// //         },2000)

// //         return ()=>clearInterval(interval)

// //        },[count])


       
// //      const All=(props)=>{
// //         return(
// //             <Box sx={{backgroundImage:`url(${props.image})`,
// //                      backgroundRepeat:"no-repeat",
// //                      backgroundSize:'cover',
// //                     height:750,
// //                     display:'flex',
// //                     justifyContent:'center',
// //                     direction:'column',
                    
// //                     // justifyContent='center'
                
// //                 }}
// //                 > 
// //                 <Box sx={{  opacity: 0.9,
// //                             boxShadow: 4 ,
// //                             padding:12,
// //                             backgroundColor:'#6a6e6c',
// //                             color:'white',
// //                             alignContent:'center'
// //                              }}>
// //                   <h1>{props.title}</h1>
// //                   <h3>{props.heading}</h3>
// //                   <p>
// //                     {props.explanation} 
// //                   </p>
// //                 <Button variant='contained'>Read More...</Button>  
// //               </Box>
// //             </Box>
// //         )
        
// //      }

// //        return(
// //         <Box >
// //                  {(count ===0)  && <All 
// //                  title='semen mountain'
// //                  image={img1}
// //                  heading='some mountain really amazing here '
// //                  explanation='ome mountain really amazingome mountain really amazingome mountain really amazingome mountain really amazing'
// //                   />}

// //                    {(count ===1)  && <All 
// //                  title='semen mountain'
// //                  image={img2}
// //                  heading='some mountain really amazing here '
// //                  explanation='ome mountain really amazingome mountain really amazingome mountain really amazingome mountain really amazing'
// //                   />} {(count ===2)  && <All 
// //                  title='semen mountain'
// //                  image={img3}
// //                  heading='some mountain really amazing here '
// //                  explanation='ome mountain really amazingome mountain really amazingome mountain really amazingome mountain really amazing'
// //                   />} {(count ===3)  && <All 
// //                  title='semen mountain'
// //                  image={img4}
// //                  heading='some mountain really amazing here '
// //                  explanation='ome mountain really amazingome mountain really amazingome mountain really amazingome mountain really amazing'
// //                   />}
// //                    {(count ===4)  && <All 
// //                  title='semen mountain'
// //                  image={img5}
// //                  heading='some mountain really amazing here '
// //                  explanation='ome mountain really amazingome mountain really amazingome mountain really amazingome mountain really amazing'
// //                   />}

// //                    {(count ===5)  && <All 
// //                  title='semen mountain'
// //                  image={img1}
// //                  heading='some mountain really amazing here '
// //                  explanation='ome mountain really amazingome mountain really amazingome mountain really amazingome mountain really amazing'
// //                   />}



// //                  {/* { (count  ===1)  && <Two />}
// //                  { (count  ===2)  && <Three />}
// //                  { (count  ===3)  && <Four />}
// //                  { (count  ===4)  && <Five />}
// //                  { (count  ===5)  && <Five />} */}


                
// //        </Box>
// //     )
// // }
// // export default PartSix


// const PartSix=()=>{
  
//   return(
//   <Box>
//     <Stack>
//     <Box mb={2}pt={4} ml={20} sx={{ height:100,width:1500,boxShadow:4,borderRadius:4,textAlign:'center',fontSize:32,backgroundColor:'#f7fcf9' }}>
//       On this page navigation you can navigate to the whole part on this page 
//       back and front on the page
//     </Box>
//     <Stack direction='row' pl={10} spacing={10}>
//     <Stack>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}> <a href="#part1" style={{ color:'black' }}>random places to visit in Ethiopia?</a> </Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href="#part2" style={{ color:'black' }}>What are the most visited places Ethiopia?</a> </Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part3' style={{ color:'black' }}>  What Hotels there in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part4' style={{ color:'black' }}> What Waterfalls are there in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part5' style={{ color:'black' }}> What foods are there in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part6' style={{ color:'black' }}> different type of marriage in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part12' style={{ color:'black' }}>  What Muesums are there in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a  href='#part7' style={{ color:'black' }}> What Heritages of ethiopia are registerd on unesico?</a></Box>
//   </Stack>
//   <Stack>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part8' style={{ color:'black' }}>  what intagible heritage or Events of ethiopia registerd on unesico?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}> <a href='#part13' style={{ color:'black' }}> what events and festival celebration are there in ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part9' style={{ color:'black' }}> What endemic animals and plants are there in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href="#part10" style={{ color:'black' }}>TOURISM in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href="#part11" style={{ color:'black' }}>What Parks are there in Ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part14' style={{ color:'black' }}> how many nations and nationatonality are there in ethiopia?</a></Box>
//     <Box pl={10} pr={10} sx={{ height:55, boxShadow:4,borderRadius:4,textAlign:'center',fontSize:25 ,backgroundColor:'#ecf6f1'}}><a href='#part15' style={{ color:'black' }}> footer of the page</a></Box>
//   </Stack>

// </Stack>

// </Stack>


//   </Box>
//   )
// }

// export default PartSix