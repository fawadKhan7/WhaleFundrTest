import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@/components/atoms/table';
import ViewInfo from '@/views/info';
import { ViewTraders } from '@/views/traders';
import YoutubeCards from '@/views/youtubeCards';
import PhonesView from '@/views/phones';
import FooterView from '@/views/footer';
import HeroView from '@/views/hero';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmailIcon from '@mui/icons-material/Email';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AnimatedGridItem from '@/components/animationBox';
import MobileSlides from '@/views/mobileSlides';
import { Container } from '@mui/material';
import ForexTable from '@/views/forexTable';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AlarmOffOutlinedIcon from '@mui/icons-material/Alarm';
import AttachFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
export default function Home() {
  const rows = [
    { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
    { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
    { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
    { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
    { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
    { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
  ];

  const evaluationData = [
    {
      icon:<LightbulbOutlinedIcon color="secondary" style={{ fontSize: 60 }}/>,
      heading:"WhaleFundr Challenge",
      description:"An WhaleFundr Challenge is the first step of the Evaluation Process. You need to succeed here to advance into the Verification stage. Prove your trading skills and discipline in observing the Trading Objectives.",
  },
    {
      icon:<EmailIcon color="secondary" style={{ fontSize: 60 }}/>,
      heading:"Verification",
      description:"A Verification is the second and the last step towards becoming an WhaleFundr Trader. Once you pass a Verification stage and your results are verified, you will be offered to trade on an WhaleFundr Account.",
  },
    {
      icon:<TrendingUpIcon color="secondary" style={{ fontSize: 60 }}/>,
      heading:"WhaleFundr Trader",
      description:"You are becoming an WhaleFundr Trader with an WhaleFundr Account. Trade responsibly and consistently and receive up to 90%. If you consistently generate profits on your WhaleFundr Account",
  }
  ]

  const data1 = [
    {
      icon:<CalendarMonthOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"Swing Account",
      description:"Pick the FTMO Account that perfectly suits your trading style and needs. FTMO Account Swing has no restrictions on holding positions over the weekend or trading during macroeconomic releases."
    },
    {
      icon:<AttachFileOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"Scaling Plan",
      description:"We aim for long-term business relationships. If you manage to be consistent and profitable, we will increase the balance of your FTMO Account by 25% every 4 months according to the Scaling Plan."
    },
    {
      icon:<AlarmOffOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"Free Trial",
      description:"If you are still not sure, you have the option to try the process completely for free. The Free Trial account is a shortened version of our FTMO Challenge with the same trading conditions."
    }
  ]
  const data2 = [
    {
      icon:<CalendarMonthOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"Amazing trading conditions",
      description:"FTMO Solution with a wide choice of assets across the board, with very low commissions and spreads."
    },
    {
      icon:<AttachFileOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"Leverage 1:100Leverage 1:100",
      description:"Use professional trader’s leverage to your advantage with no imposed limits on position sizing."
    },
    {
      icon:<AlarmOffOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"One-time fee only",
      description:"No recurrent charges, no membership or other hidden fees. Moreover, the fee is automatically reimbursed to you with the first Profit Split."
    },
    {
      icon:<CalendarMonthOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"The most popular trading platforms",
      description:"MT4, MT5, cTrader, or DXtrade. Choose yourself!"
    },
    {
      icon:<AttachFileOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"No limits on trading style!",
      description:"Trade your own trading strategy with no limits or restrictions. You can use EAs, hedging or trade discretionary."
    },
    {
      icon:<AlarmOffOutlinedIcon color="secondary" style={{ fontSize: 50 }}/>,
      title:"Trade every instrument you want",
      description:"Forex, Commodities, Indices, Crypto, Stocks, Bonds."
    },
  ]
  

  return (
    <Box sx={{backgroundColor:"black"}}>

<HeroView/>

<Container maxWidth="lg" sx={{ my: 4 }}> 
        <Box sx={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          py: 4, 
        }}>
          <ViewTraders />
        </Box>
      </Container>

<Box sx={{
gap:10,
marginBlock:10,
paddingInline:"4%",
paddingBlock:"5%",
width:"90%",
marginX:"auto",
borderRadius:10,
background: 'linear-gradient(270deg, #121212 100%, #2176B9 2%)'
}}>
  <Grid container display={'flex'} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={4}>
    <Grid item xs={12}><Typography variant="h3" sx={{fontWeight:800}} textAlign={"center"}>Evaluation Process</Typography></Grid>
    <Grid item xs={12}>
  <Grid container spacing={2} display={"flex"}>
    {evaluationData.map(elem =>(
  <Grid item xs={12} md={4} >
  <AnimatedGridItem icon={elem.icon} heading={elem.heading} description={elem.description} />
  </Grid>
    ))}


    </Grid>
  </Grid>
  </Grid>
</Box>

   <MobileSlides/>
<Box
  sx={{
    width: '100%',
    marginY:10,
    paddingInline:"8%",
    
  }}
>
<Grid container spacing={2} my={2} sx={{background: 'linear-gradient(270deg, #121212 100%, #2176B9 2%)'}} borderRadius={15} padding={4}>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="h5" style={{ color: "white" }}>Step: 1</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="h5" style={{ color: "white" }}>WhaleFundr Challenge</Typography>
                </Grid>
                <Grid item xs={12}>
                <Table rows={rows} columnColors={{
  value2: 'rgba(33, 118, 185, 0.5)',
}}/>
                </Grid>
            </Grid>
</Box>

<Box sx={{
  gap:10,
  marginBlock:5,
  width:"90%",
  marginX:"auto",
  borderRadius:10,
  background: 'transparent'
  }}>
   <YoutubeCards heading={"Key Highlights"} data={data1}/>
  </Box>
  


<Box sx={{
      my: "20%"
    }}>
<ViewInfo/>
    </Box>

    <Box
  sx={{
    width: '100%',
    marginY:20,
    paddingInline:"8%"

  }}
>
  <ForexTable/>
</Box>


<Box sx={{
gap:10,
marginBlock:20,
marginX:"auto",
paddingInline:"10%",
background: 'transparent'
}}>
  <PhonesView/>
</Box>


<Box sx={{
gap:10,
marginBlock:5,
width:"90%",
marginX:"auto",
borderRadius:10,
background: 'transparent'
}}>
 <YoutubeCards data={data2}/>
</Box>



<FooterView/>
</Box>
  );
}
