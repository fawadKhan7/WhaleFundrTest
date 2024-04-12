import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Flag from '../../public/eng-flag.png';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/logo.png';
import CustomSelectField from './atoms/CustomSelectField';

export const Navbar = () => {
  const [country,setCountry] = useState('US')

  return (
    <Box sx={{ flexGrow: 1, zIndex: 3 }}>
  <AppBar position="relative" sx={{ boxShadow: "none", backgroundColor: "transparent", zIndex: 100 }}>
      <Toolbar sx={{ justifyContent: 'space-between',alignItems:"center" }} style={{height:"100px"}}>
      <Link href="/">
      <Image src={Logo} height={240} width={240}></Image>
      </Link>

        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <Typography variant='label' style={{fontSize:13}} sx={{ mx: 2 }}>How it works</Typography>
          <Typography variant='label' style={{fontSize:14}} sx={{ mx: 2 }}>FAQ</Typography>
          <Typography variant='label' style={{fontSize:14}} sx={{ mx: 2 }}>Testimonials</Typography>
          <Typography style={{fontSize:14}} sx={{ mx: 2 }}>Trading</Typography>
          <Link href="/about">
          <Typography variant='label' style={{fontSize:14}} sx={{ mx: 2 }}>About Us</Typography>
          </Link>
          <Link href="/contact">
          <Typography variant='label' style={{fontSize:14}} sx={{ mx: 2 }}>Contact Us</Typography>
          </Link>
        </Box>
  
        <Box sx={{
  display: 'flex', 
  alignItems: 'center',
}}>
          <Box sx={{
            borderRadius: "50%", 
            width: 40,
            height: 40,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background:"#2176B9",
            p:3.5,mr:2
          }}>
            <SearchIcon style={{ fontSize: 35 }}/>
          </Box>

          <CustomSelectField
           id="country-select"
      label="Select Country"
      options={[
        { label: 'United States', value: 'US', flagUrl: 'https://flagcdn.com/w320/us.png' },
        { label: 'Canada', value: 'CA', flagUrl: 'https://flagcdn.com/w320/ca.png' },
        { label: 'United Kingdom', value: 'GB', flagUrl: 'https://flagcdn.com/w320/gb.png' },
        { label: 'Australia', value: 'AU', flagUrl: 'https://flagcdn.com/w320/au.png' }
      ]}
      value={country} onChange={e => setCountry(e.target.value)}/>
          
          {/* <Box sx={{
            borderRadius: "30px", 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background:"#2176B9",
            p:2
          }}>
            <Image src={Flag} alt="English Flag" width={24} height={24} />
            <Typography>EN-US</Typography>
            <KeyboardArrowDownIcon />
          </Box> */}
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
