import Box from '@mui/material/Box';
import { Navbar } from "@/components/navbar";
import Typography from '@mui/material/Typography';
import CustomButton from '@/components/atoms/button';
import BlueText from '@/components/atoms/blueText';
import SliderHero from '../SliderHero';
import { motion } from 'framer-motion';
const HeroAbout = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75 }}
  >
      <Box
    sx={{
      backgroundImage: `url(./ContactBg.png)`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 750,
      paddingInline:"8%"
    }}
  >
    <Navbar />
    
    <Box sx={{
    mt:"150px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:2
    }}>
      <Typography variant='h1' className='heading1' sx={{
        fontSize:"56px",
        fontWeight:800,
        }} textAlign={"center"} color={"white"}>OUR  <BlueText>JOURNEY</BlueText></Typography>      
      <Box display={"flex"} justifyContent={"space-between"} width={300}>
  <CustomButton variant='contained' style={{borderRadius:"50px", fontSize:10,paddingInline:40,paddingBlock:10}} label={"Careers"}/>
  <CustomButton
  label="Learn More"
  variant="contained"
  style={{ borderRadius: "50px", fontSize: "10px", paddingInline: "40px", paddingBlock: "10px", backgroundColor: "black", border: "blue 2px solid" }}
/> 
     </Box>
  
    </Box>
  </Box>
  <Box
      sx={{
        paddingInline: "8%",
        position: "relative",
        top: -100
      }}
    >
<SliderHero/>
    </Box>
  </motion.div>
  )
}

export default HeroAbout