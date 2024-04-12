import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, styled, Box } from '@mui/material';

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    borderRadius: 30,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:focus': {
      borderRadius: 30,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',  
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
  }
}));
const CustomSelectField = ({
  id,
  label,
  options = [],
  error = false,
  helperText = '',
  style = {},
  ...props
}) => {
  return (
      <FormControl fullWidth variant="outlined" error={error}>
        <StyledSelect
          id={id}
          {...props}
          displayEmpty
          // renderValue={(selected) => {
          //   const selectedItem = options.find(option => option.value === selected);
          //   return (
          //     <Box sx={{ display: 'flex', alignItems: 'center' }}>
          //       {option.flagUrl&&selectedItem ? <img src={selectedItem.flagUrl} alt={selectedItem.label} style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 1 }} />:''}
          //       {selectedItem ? selectedItem.label : ''}
          //     </Box>
          //   );
          // }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.flagUrl?< img src={option.flagUrl} alt={option.label} style={{ width: 30, height: 30, marginRight: 10, verticalAlign: 'middle', borderRadius: "50%" }} />:''}
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
  );
};

export default CustomSelectField;
