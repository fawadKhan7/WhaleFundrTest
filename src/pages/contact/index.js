import FooterView from '@/views/footer'
import HeroContact from '@/views/Contact/heroContact'
import { Box, Grid, Typography  } from '@mui/material'
import dynamic from 'next/dynamic';
import TwitterOutlinedIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramOutlinedIcon from '@mui/icons-material/Instagram';
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YouTube';
import ContactForm from '@/views/Contact/contactForm';
const Contact = () => {

  const iconStyle= {
    "fontSize":60,
    "color":"#2176B9"
  }

const icons =[
<TwitterOutlinedIcon style={iconStyle}/>,
<FacebookOutlinedIcon style={iconStyle}/>,
<InstagramOutlinedIcon style={iconStyle}/>,
<YoutubeSearchedForOutlinedIcon style={iconStyle}/>
]

  const MapWithNoSSR = dynamic(() => import('../../components/MapComponent'), {
    ssr: false
  });


    return (
    <Box sx={{backgroundColor:"#121212"}} >
    <HeroContact/>
 <Box mt={20} paddingInline={"10%"}>
 <Grid container display="flex" sx={{background: 'linear-gradient(142deg, rgb(18, 18, 18) -14.41%, rgb(33, 118, 185) 583.7%)'}} borderRadius={10}>
  <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column" gap={3} paddingX={3} paddingY={5}>
    <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
      <Typography variant="h4" style={{fontWeight:800}} mb={2}>Address:</Typography>
      <Typography variant="label">Quadrio offices</Typography>
      <Typography variant="label">Purkynova 2121/3 110 00 Prague, Czech Republic</Typography>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
      <Typography variant="h4" style={{fontWeight:800}} mb={2}>Business Hours:</Typography>
      <Typography variant="label">24/7 for emails, live chat and WhatsApp 9 am – 5 pm CE(S)T, Monday to Friday for phone calls</Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} sx={{ overflow: 'visible' }}>
  <MapWithNoSSR />
  </Grid>
</Grid>
    </Box>

 <Box mt={20} paddingInline={"10%"}>
 <Grid container display="flex"  borderRadius={10}>
  <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column" gap={3} paddingX={3} paddingY={5}>
  <Box   p={3}  sx={{ width:"100%"}}>
  <Typography variant="h3" textAlign={"start"} style={{fontWeight:800}}>Social Media</Typography>
</Box>

      {icons.map(icon =>(
  <Box display="flex" justifyContent="center" alignItems="center" gap={3} p={3} borderRadius={5} sx={{ width:"100%", background:"#2B2323"}}>
  {icon}
  <Typography variant="h5" style={{fontWeight:800}}>Noe_Rempel30</Typography>
</Box>
      ))
  }  
  </Grid>
  <Grid item xs={12} sm={6} sx={{background: 'linear-gradient(142deg, rgb(18, 18, 18) -14.41%, rgb(33, 118, 185) 583.7%)',borderRadius:10}}>
    <ContactForm/>
  </Grid>
</Grid>
    </Box>
    <FooterView/>
    </Box>
  )
}

export default Contact
