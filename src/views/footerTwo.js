import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const FooterTwo = () => {
  return (
    <Grid container  sx={{background:"#2176B9;width:100%"}} display={"flex"} flexDirection={"column"} py={5}>
    <Box
  width={"90%"}
  display={"flex"}
  justifyContent={"space-between"}
  mx={"auto"}
  borderBottom={4}
  borderColor={"#150578"}
  pb={3}
  gap={8}
  mb={1}
>
    <Box sx={{width:"80%"}}>
    <Typography  variant='p' fontSize={14} mb={1} color={"white"}>All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. FTMO only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. FTMO companies do not act as a broker and do not accept any deposits. The offered technical solution for the FTMO platforms and data feed is powered by liquidity providers.</Typography>
    </Box>
    <Box sx={{width:"20%"}}>
    <Typography variant='h6'  mb={1}>Contact Options</Typography>
    <Typography variant='h6' mb={1}>Privacy Policy</Typography>
    <Typography variant='h6' mb={1}>Cookies</Typography>
    </Box>
    </Box>
<Grid item xs={12}  sx={{width:"90%"}} mx={"auto"}>
    <Typography variant='p' fontSize={15} color={"white"}>2023 © Copyright - FTMO.com Made with for trading</Typography>
</Grid>
</Grid>
  )
}

export default FooterTwo