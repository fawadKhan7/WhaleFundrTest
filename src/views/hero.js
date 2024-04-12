import Box from '@mui/material/Box';
import { Navbar } from "@/components/navbar";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Logo1 from '/public/logo1.png';
import Logo2 from '/public/logo2.png';
import Logo3 from '/public/logo3.png';
import Logo4 from '/public/logo4.png';
import Trader1 from '/public/trader1.png';
import Avatar1 from '/public/Avatar1.jpg';
import Avatar2 from '/public/Avatar2.jpg';
import Avatar3 from '/public/Avatar3.jpg';
import CustomButton from '@/components/atoms/button';
import AnimatedBox from '@/components/motionBox';
import BlueText from '@/components/atoms/blueText';
import SliderHero from './SliderHero';
const HeroView = () => {

  const logos = [Logo1, Logo2, Logo3, Logo4];
  const traders = [Avatar1, Avatar2, Avatar3, Trader1];

  return (
    <>    <Box
    sx={{
      backgroundImage: `url(./hero.png)`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 960,
      paddingInline:"8%"
    }}
  >
    <Navbar />
    
    <Box sx={{
      width: '60%',
    mt:"150px",
    display:"flex",
    flexDirection:"column",
    gap:2
    }}>
      <Typography variant='h6' color={"#2176B9"}>SINCE 2021</Typography>
      <Typography variant='h1' className='heading1' sx={{
        fontSize:"56px",
        fontWeight:600
        }} color={"white"}>WE ARE LOOKING FOR PROFITABLE TRADERS</Typography>
      <Typography  className='heading1' color={"white"} >Unleash your inner whale and trade up to $500,000 in a trading environment where you can earn real gains.</Typography>
      
      <Box display={"flex"} justifyContent={"space-between"} width={300}>
  <CustomButton variant='contained' style={{borderRadius:"50px", fontSize:10,paddingInline:40,paddingBlock:10}} label={"Learn More"}/>
  <CustomButton label="Free Trial" variant="contained" style={{ borderRadius: "50px", fontSize: "10px", paddingInline: "40px", paddingBlock: "10px", backgroundColor: "black", border: "blue 2px solid" }}/>      
</Box>
  
<Box display={"flex"} justifyContent={"space-between"} width={500}>
      <Box display="flex" sx={{ position: 'relative' }}>
      {traders.map((trader, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: 60,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: `${index * 50}px`, 
            border: '2px solid white',
            mixBlendMode: '', 
            '&:first-of-type': {
              left: 0,
            },
          }}
        >
          <Image src={trader} alt="User" width={80} height={80} objectFit="cover" />
        </Box>
      ))}    </Box>
          <Box >
      <Typography  className='heading1'  sx={{
        fontSize:"26px",
        fontWeight:600
        }} color={"white"}>15 Million+</Typography>
      <Typography  sx={{
        fontSize:"20px",
        }} color={"white"}>Be part of growing community</Typography>
  
      </Box>
      </Box>
    </Box>
  </Box>
  <Box
      sx={{
        paddingInline: "8%",
        position: "relative",
        top: -50
      }}
    >
      <SliderHero/>
    </Box>
  <Box sx={{
  display:"flex",
  flexDirection:"column",
  gap:10,
  justifyContent:"center",
  alignItems:"center",
  paddingInline:"8%",
  marginBlock:10
  }}>
    <Box display={"flex"} >
    <Typography variant='h3' sx={{
        fontSize:"56px",
        fontWeight:900
        }} color={'white'}><BlueText >WhaleFundr</BlueText> is one of the most reliable firms in modern prop trading industry.</Typography>
    </Box>
  
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={2}>
   
    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
      <Grid container spacing={2} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} display="flex" justifyContent="center">
            <AnimatedBox imageSrc={logo} />
          </Grid>
        ))}
      </Grid>
    </Box>


   
    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
      <Grid container spacing={2} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} display="flex" justifyContent="center">
            <AnimatedBox imageSrc={logo} />
          </Grid>
        ))}
      </Grid>
    </Box>

  </Box>
  </Box>
  </>
  )
}

export default HeroView