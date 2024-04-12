import Box from '@mui/material/Box';
import { Navbar } from "@/components/navbar";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Trader1 from '/public/trader1.png';
import Avatar1 from '/public/Avatar1.jpg';
import Avatar2 from '/public/Avatar2.jpg';
import Avatar3 from '/public/Avatar3.jpg';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
const HeroContact = () => {

  const traders = [Avatar1, Avatar2, Avatar3, Trader1];


  return (
    <>    <Box
    sx={{
      backgroundImage: `url(./Contact.png)`, 
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
      <Typography variant='h6' color={"#2176B9"}>Contact Us</Typography>
      <Typography variant='h1' className='heading1' sx={{
        fontSize:"56px",
        fontWeight:600
        }} color={"white"}>CONNECT WITH US</Typography>
      <Typography  className='heading1' color={"white"}>
      Want to chat? We’d love to hear from you! Get in touch with us.
            </Typography>
        
      <Box display={"flex"} justifyContent={"space-between"} width={470}>
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
            left: `${index * 40}px`, 
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
    </Box>
  <Box sx={{
  display:"flex",
  flexDirection:"column",
  gap:10,
  justifyContent:"center",
  alignItems:"center",
  paddingInline:"8%",
  marginBlock:5
  }}>
    <Box display={"flex"} >
    <Typography variant='h3' sx={{
        fontSize:"56px",
        fontWeight:900
        }} color={'white'}>Contact Us</Typography>
    </Box>
  
   
      <Grid container spacing={2} display={"flex"} justifyContent="center" alignItems="center" gap={2}>
          <Grid item xs={12} sm={5} >
            <Box padding={4} bgcolor={"#2B2323"} display="flex" height={"auto"} width={"90%"} justifyContent="center" alignItems="center" flexDirection={"column"} gap={2} borderRadius={6}>
<EmailOutlinedIcon style={{fontSize:70,color:"#2176B9"}}/>
<Typography  variant="h5">Noe_Rempel30@yahoo.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} >
          <Box padding={4} bgcolor={"#2B2323"} display="flex" height={"auto"} width={"90%"} justifyContent="center" alignItems="center" flexDirection={"column"} gap={2} borderRadius={6}>
<PhoneOutlinedIcon style={{fontSize:70,color:"#2176B9"}}/>
<Typography  variant="h5">275-437-1694</Typography>
            </Box>
          </Grid>
      </Grid>
    </Box>

  </>
  )
}

export default HeroContact