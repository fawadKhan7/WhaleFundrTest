import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation,motion } from 'framer-motion';

const SliderHero = () => {
  const sliderData = [
    {
      heading:"$180M+",
      title:"Paid out to FTMO Traders"
    },
    {
      heading:"180+",
      title:"No. of countries with traders registered at FTMO"
    },
    {
      heading:"16M+",
      title:"No. of trades opened every month"
    },
    {
      heading:"8h",
      title:"Avg payout processing time"
    },
  ]
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const boxVariants = {
      hidden: { x: -200, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
        },
      },
    };
  
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
  return (
    <Grid container spacing={2}  display={"flex"} justifyContent={"space-around"}>
    {sliderData.map((data, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
        >
          <Box sx={{
  bgcolor: "#2B2323",
  borderRadius: 5,
  padding: 4,
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  gap:1,
  height: 150,
}}>
            <Typography variant='h4' sx={{ fontWeight: 800, color: "primary.main" }}>{data.heading}</Typography>
            <Typography variant='label'>{data.title}</Typography>
          </Box>
        </motion.div>
      </Grid>
    ))}
  </Grid>
)
}

export default SliderHero