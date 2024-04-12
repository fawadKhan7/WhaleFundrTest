import React from 'react';
import { TextField, FormControl, InputLabel, Box } from '@mui/material';

function CustomTextField({ label, style, id, multiline, rows, InputProps, ...props }) {
  return (

    <Box variant="outlined" fullWidth style={{
        display: "flex",
        alignItems: "flex-start", 
        justifyContent: "center",
        flexDirection: "column",
        width:"100%",
        gap: 1,
      }}>
      <InputLabel style={{color:"white"}} htmlFor={id}>{label}</InputLabel>
      <TextField
        id={id}
        variant="outlined"
        multiline={multiline}
        style={style}
        rows={multiline ? rows : 1}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          ...InputProps,
        }}
        {...props}
      />
    </Box>
  );
}

export default CustomTextField;
