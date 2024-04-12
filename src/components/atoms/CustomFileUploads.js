import React from 'react';
import { Button, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function CustomFileUpload({ label }) {
  const fileInputRef = React.useRef(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <IconButton onClick={handleFileInputClick} aria-label="upload file">
        <AttachFileIcon style={{color:"white"}}/>
      </IconButton>
      <Button onClick={handleFileInputClick} style={{ textTransform: 'none',color:"white",textDecoration:"underline" }}>
        {label}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => console.log(e.target.files)} 
      />
    </div>
  );
}

export default CustomFileUpload;
