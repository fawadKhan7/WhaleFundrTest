import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

const YoutubeCards = ({heading, data}) => {
  return (
    <Grid container display={'flex'} alignItems={"flex-start"} flexWrap={"wrap"} justifyContent={"center"} gap={2}>
      {heading?(
      <Grid item xs={12}>
        <Typography variant='h4' ml={8} style={{fontWeight:800}}>{heading}</Typography>
      </Grid>
      ):''}
      {data.map(elem =>(
      <Grid item xs={12} md={3.5} >
      <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.3 }} style={{background: "linear-gradient(270deg, #121212 100%, #2176B9 2%)", borderRadius:10,padding:15 ,height:250}}>
        <Box display={"flex"} flexDirection={'column'} justifyContent={"center"} alignItems={"flex-start"} gap={1}>
          {elem.icon}
          <Typography variant="h6" fontSize={"16px"} >{elem.title}</Typography>
          <Typography variant="h6" fontSize={"14px"}>
            {elem.description}
          </Typography>
        </Box>
      </motion.div>
    </Grid>

      ))}
    
    </Grid>
  )
}

export default YoutubeCards