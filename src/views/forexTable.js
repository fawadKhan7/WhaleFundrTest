import Grid from '@mui/material/Grid';
import Table from '@/components/atoms/table';
import CustomButton from '@/components/atoms/button';
import { useState } from 'react';
const ForexTable = () => {
    
    const [activeButton, setActiveButton] = useState('Forex');

    const buttonStyles = {
      paddingInline: "32px",
      borderRadius: "25px",
      fontWeight: 800,
    };
  
    const activeStyle = {
      ...buttonStyles,
      color: "white",
      backgroundColor: "#007bff",
      borderColor: "#007bff"
    };
    
    const inactiveStyle = {
      ...buttonStyles,
      color: "white",
      backgroundColor: "transparent",
      border: "1px solid transparent", 
    };
    const rows = [
        { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
        { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
        { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
        { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
        { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
        { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
      ];

      const buttons = ['Forex', 'Indices', 'Crypto', 'Commodities', 'Custom']    
  
return (
    <>
      <Grid container spacing={5}  borderRadius={15} padding={2} sx={{background: 'linear-gradient(270deg, #121212 100%, #2176B9 2%)'}}>

<Grid item xs={12} display={"flex"} justifyContent={"space-around"} mb={2}>
      {buttons.map((label) => (
        <CustomButton
          key={label}
          label={label}
          variant={activeButton === label ? "contained" : "outlined"}
          sx={activeButton === label ? activeStyle : inactiveStyle}
          onClick={() => setActiveButton(label)}
        />
      ))}
    </Grid>
    <Grid item xs={12}>
    <Table rows={rows} columnColors={{
  name: 'rgba(33, 118, 185, 0.5)', 
  value2: 'rgba(33, 118, 185, 0.5)',
  value4: 'rgba(33, 118, 185, 0.5)',
}} tableType={2} />

    </Grid>
    </Grid>
</>
  )
}

export default ForexTable