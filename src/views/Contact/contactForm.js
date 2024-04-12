import { Box, Typography  } from '@mui/material'
import CustomTextField from '@/components/atoms/CustomTextArea';
import CustomFileUpload from '@/components/atoms/CustomFileUploads';
import CustomButton from '@/components/atoms/button';

const ContactForm = () => {

    const InputStyle= { width: "100%", borderColor: "#2176B9", borderWidth: 2, borderStyle: "solid",borderRadius:20 }
    const InputPropStyle= {
      height: 30,
      borderRadius:20,
      color:"white",
      background:"black"
    }
  

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection={"column"} paddingX={3} gap={4}>
    <Box p={3} sx={{ width:"100%"}}>
    <Typography variant="h3" textAlign={"start"} style={{fontWeight:800}}>Stay Connected</Typography>
  </Box>
    <CustomTextField
    label="Your Name"
    style={InputStyle}
    InputLabelProps={{
      shrink: true,
    }}
      InputProps={{
      sx: InputPropStyle
    }}
  />
    <CustomTextField
    label="Your Email"
    type={"email"}
    style={InputStyle}
    InputLabelProps={{
      shrink: true,
    }}
      InputProps={{
      sx: InputPropStyle
    }}
  />
    <CustomTextField
    label="Your Message"
    placeholder={"Type Something..."}
    multiline={true}
    rows={4}
    type={"email"}
    style={InputStyle}
    InputLabelProps={{
      shrink: true,
    }}
      InputProps={{
      sx: {
        height: "auto",
        borderRadius:5,
        background:"black",
        color:"white"
      }
    }}
  />
  
  <CustomFileUpload label="Attach Files"/>
  <CustomButton variant='contained' style={{borderRadius:"50px", fontSize:10,paddingInline:40,paddingBlock:10}} label={"Submit"}/>
  
    </Box>
    )
}

export default ContactForm