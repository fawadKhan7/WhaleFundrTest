import { Box, Grid, Typography } from '@mui/material'
import  { useEffect } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useAnimation,motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Chair from "/public/Chair.png"
import Image from 'next/image';
import Logo from '/public/logo.png';
import BlueText from '@/components/atoms/blueText';
import CustomButton from '@/components/atoms/button';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const BenifitAbout = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));


  useEffect(() => {
    if (inView) {
      controls.start({ x: 0 })
    }
  }, [controls, inView]);


  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"} alignItems={"center"}  position={"relative"}>
    <Grid item xs={12} sm={6} md={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
      <Box sx={{background: "#2B2323"}} width={"80%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={2} padding={3} borderRadius={3}>
        <CalendarMonthIcon style={{fontSize:50,color:"#2176B9"}}/>
        <Typography variant="h5">Benifit 1</Typography>
      </Box>
    
      <Box sx={{background: "#2B2323"}} width={"80%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={2} padding={3} borderRadius={3}>
        <AccessAlarmIcon style={{fontSize:50,color:"#2176B9"}}/>
        <Typography variant="h5">Benifit 2</Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={6} md={4} >
    <motion.div
        ref={ref}
        initial={{ x: '-50%' }}
        animate={controls}
        transition={{ duration: 1 }}
      >
                    <Image src={Chair} alt="Chair" width={350} />
            </motion.div>
    </Grid>
  
    <Grid item xs={12} sm={6} md={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
      <Box sx={{background: "#2B2323"}} width={"80%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={2} padding={3} borderRadius={3}>
        <InsertDriveFileOutlinedIcon style={{fontSize:50,color:"#2176B9"}}/>
        <Typography variant="h5">Benifit 3</Typography>
      </Box>
    
      <Box sx={{background: "#2B2323"}} width={"80%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={2} padding={3} borderRadius={3}>
        <InsertDriveFileOutlinedIcon style={{fontSize:50,color:"#2176B9"}}/>
        <Typography variant="h5">Benifit 4</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} position={"absolute"} marginTop={isLargeScreen?95:200} width={"100%"}>
      <Box sx={{background: "rgba(47, 47, 53, 1)"}} mx={"auto"} width={"80%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={2} padding={3} borderRadius={3}>
        <Image src={Logo} width={300} />
        <Typography variant="h5" style={{fontSize:40,fontWeight:800}}>JOIN <BlueText>OUR TEAM !</BlueText></Typography>
      <Box display={"flex"} justifyContent={"space-between"} width={300}>
  <CustomButton variant='contained' style={{borderRadius:"50px", fontSize:12,paddingInline:40,paddingBlock:10}} label={"Apply"}/>
  <CustomButton label="Ask Us" variant="contained" style={{ borderRadius: "50px", fontSize: 12, paddingInline: "40px", paddingBlock: "10px", backgroundColor: "black", border: "blue 2px solid" }}/>      
</Box>
      </Box>    
    </Grid>
    </Grid>
  )
}

export default BenifitAbout