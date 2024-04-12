import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import ContactInfoOne from '/public/ContactInfoOne.png';
import ContactInfoTwo from '/public/hand.png';
import ContactInfoThree from '/public/tower.png';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useAnimation,motion } from 'framer-motion';
import { useEffect } from 'react';
import BlueText from '@/components/atoms/blueText';
import CustomButton from '@/components/atoms/button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const AboutInfo = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
 
  const controlsOne = useAnimation();
  const [refOne, inViewOne] = useInView();

  const controlsTwo = useAnimation();
  const [refTwo, inViewTwo] = useInView();

  const controlsThree = useAnimation();
  const [refThree, inViewThree] = useInView();

  useEffect(() => {
    if (inViewOne) {
      controlsOne.start({ x: 0 });
    } else {
      controlsOne.start({ x: '-100%' });
    }
  }, [controlsOne, inViewOne]);

  useEffect(() => {
    if (inViewTwo) {
      controlsTwo.start({ x: 0 });
    } else {
      controlsTwo.start({ x: '-100%' });
    }
  }, [controlsTwo, inViewTwo]);

  useEffect(() => {
    if (inViewThree) {
      controlsThree.start({ x: 0 });
    } else {
      controlsThree.start({ x: '-100%' });
    }
  }, [controlsThree, inViewThree]);
  
  return (
    <>
    <Box sx={{paddingInline:"10%"}}>
      <Grid container spacing={2} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} >
        <Grid item xs={12} md={6} >
        <motion.div
        ref={refOne}
        initial={{ x: '-100%' }}
        animate={controlsOne}
        transition={{ duration: 1 }}
      >
                    <Image src={ContactInfoOne} alt="ContactInfoOne" height={600} width={550}
 />
            </motion.div>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="h4" style={{ fontWeight: 800}} mb={2}>
          <BlueText>WhaleFundr</BlueText> Story 
          </Typography>
          <Typography paragraph variant="label" style={{fontSize:14}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover          
          </Typography>
          <Typography paragraph variant="label" style={{fontSize:14}}>
          Upon successful completion of the Evaluation Process, you are offered to trade on an WhaleFundr Account with a balance of up to 200,000 USD. Your journey to get there might be challenging, but our educational applications, Account Analysis and Performance Coaches are here to help you on the endeavour to financial independence.
          </Typography>
            <CustomButton variant="contained" sx={{ borderRadius: '50px', px: 4, py: 1,width:200 }} label={"Watch Video"} />
        </Grid>
      </Grid>
    </Box>

    <Box sx={{
  display: 'flex',
  gap: 10,
  justifyContent: 'center',
  alignItems: 'center',
  paddingInline: '10%',
  marginBlock: 50
}}>
      <Grid container spacing={2} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} >
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="h4" style={{ fontWeight: 800}} mb={2}>
          <BlueText>WhaleFundr</BlueText> Mission 
          </Typography>
          <Typography paragraph variant="label" style={{fontSize:14}}>
          We are continuously developing the project into an international investment company. This change will allow us to create a global platform where, at a certain point, we will be able to offer a unique composition of retail traders trading for our company to investors with the possibility to invest in a portfolio of traders of their choice.          </Typography>
          <Typography paragraph variant="label" style={{fontSize:14}}>
          Let’s get together to create a global community of successful retail traders and build an investment portfolio that has no precedent in the world.          
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
        <motion.div
        ref={refTwo}
        initial={{ x: '-100%' }}
        animate={controlsTwo}
        transition={{ duration: 1 }}
      >
                    <Image src={ContactInfoTwo} alt="ContactInfoTwo" height={600} width={550}
 />
            </motion.div>
        </Grid>

      </Grid>
</Box>
    
<Box sx={{
  display: "flex",
  gap: 2,
  justifyContent: "center",
  alignItems: "center",
  paddingInline: "8%",
  marginBlock: 50,
  position: "relative",
}}>
  <Grid container spacing={2} display={'flex'} alignItems={"flex-start"} style={{
    background: "#2B2323",
    width: "100%",
    height: isLargeScreen ? '220px' : 'auto', 
    padding: 4,
    borderRadius: 20,
  }}>
    <Grid item xs={12} md={6}>
      <Paper style={{ 
        boxShadow: "none",
        overflow: 'visible',
        height: 'auto',
        position: 'relative',
        padding: '20px',
        background: "transparent",
        marginBottom: isLargeScreen ? '0px' : '300px',
      }}>
        <motion.div
 ref={refThree}
 initial={{ x: '-100%' }}
 animate={controlsThree}
 transition={{ duration: 1 }}        
          style={{ 
            position: 'absolute',
            top: isLargeScreen ? "-300px" : "-250px",
            left: 0,
            right: 0,
            zIndex: 1,
            height: '500px',
            width: '100%', 
          }}
        >
          <Image src={ContactInfoThree} alt="ContactInfoThree" layout="fill" objectFit="contain" />
        </motion.div>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h4" style={{ fontWeight: 800, marginTop: '-6%', position: 'absolute', zIndex: 1 }}>
     <BlueText>WhaleFundr</BlueText> Playground 
            </Typography>
      <Box>
        <Typography variant="label" style={{ fontSize: "15px" }} paragraph>
        There are many handy gadgets and features our offices have to offer. We have phone booths where our employees can handle business and personal calls or meeting rooms where you can draw your ideas on the glass walls. In each department, there are fridges full of various drinks, not to mention all the snacks available in our kitchen. We have our own recording studio where all the digital magic happens and finally our poker room, where we spend most Friday evenings.        
        </Typography>
        <CustomButton variant="contained" sx={{ borderRadius: '50px', px: 4, py: 1 }} label={<span>Check Location <KeyboardArrowRightIcon/></span>} />

      </Box>
    </Grid>
  </Grid>
</Box>
</>
  )
}

export default AboutInfo