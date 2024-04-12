import BenifitAbout from '@/views/About/benifitsAbout'
import HeroAbout from '@/views/About/heroAbout'
import ContactAbout from '@/views/About/infoAbout'
import FooterView from '@/views/footer'
import { Box } from '@mui/material'

const About = () => {
  return (
    <Box sx={{backgroundColor:"#121212"}} >
    <HeroAbout/>
    <Box mt={20}>
    <ContactAbout/>
    </Box>
    <Box  mb={40}>
    <BenifitAbout/>
    </Box>
    <FooterView/>
    </Box>
  )
}

export default About