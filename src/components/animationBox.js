import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Grid, Box, Typography } from '@mui/material';

const AnimatedGridItem = ({icon, heading,description}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1,transition: { duration: 0.5 } });
    } else {
      controls.start({ scale: 0, opacity: 0,transition: { duration: 0.5 } });
    }
  }, [controls, inView]);

  return (
      <motion.div ref={ref} initial={{ scale: 0, opacity: 0 }} animate={controls}>
        <Box display={"flex"} flexDirection={'column'} justifyContent={"center"} alignItems={"center"} gap={1}>
          {icon}
          <Typography variant="h5" textAlign={"center"}>{heading}</Typography>
          <Typography variant="h6" fontSize={"16px"} textAlign={"center"}>
          {description}
                    </Typography>
        </Box>
      </motion.div>
    // </Grid>
  );
};


export default AnimatedGridItem;
