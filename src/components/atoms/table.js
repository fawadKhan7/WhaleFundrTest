import * as React from 'react';
import { Box, TableContainer, Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';

function CustomTable({ rows, columnColors,tableType=1 }) {
    const getRowStyle = (index) => {
        if (index % 2 === 0) return { backgroundColor: '#555c57', borderBottom: '0' };
        return { backgroundColor: 'transparent', borderBottom: '0' };
    };

    const getCellStyle = (index, length, cellKey) => {
        const baseStyle = {
            borderBottom: '0',
            color: 'white',
        };

        if (index === 0) {
            baseStyle.borderTopLeftRadius = 20;
            baseStyle.borderBottomLeftRadius = 20;
        } else if (index === length - 1) {
            baseStyle.borderTopRightRadius = 20;
            baseStyle.borderBottomRightRadius = 20;
        }

        const colorStyle = columnColors[cellKey] ? { backgroundColor: columnColors[cellKey] } : {};

        return { ...baseStyle, ...colorStyle };
    };

    const getRowStyleLayer = (index) => {
        if (index % 2 === 0) return { backgroundColor: '#555c57' };
        return { backgroundColor: 'transparent' };
    };

    const getCellStyleLayer = (index, length, key, columnColors) => {
        let style = {
            position: 'relative',
            color: 'white',
            borderBottom: '0',
            '&::before': { 
                content: '""', 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(33, 118, 185, 0.2)',
                zIndex: 0,
            },
            '& > *': { 
                position: 'relative',
                zIndex: 1,
            },
        };
    
    

        if (index === 0) {
            style = { ...style };
        } else if (index === length - 1) {
        }


        if (columnColors[key]) {
            style.backgroundColor = columnColors[key] 
            style['&::before'] = { ...style['&::before'], backgroundColor: 'transparent' };
        }

        return style;
    };

    return (
        <Box sx={{ flexGrow: 1 }}  borderRadius={15}>
            <TableContainer component={Paper} sx={{ backgroundColor: "#1F1C1C", boxShadow: "none",borderRadius:10 }}>
                <Table aria-label="customized table" sx={{ backgroundColor: "#1F1C1C" }}>
                    <TableBody sx={{ backgroundColor: "#1F1C1C" }}>
                        {rows.map((row, rowIndex) => (
                            <TableRow key={rowIndex} sx={tableType == 1 ? getRowStyle(rowIndex):getRowStyleLayer(rowIndex)}>
                                {Object.entries(row).map(([key, cell], cellIndex, cellArray) => (
                                    <TableCell
                                        key={key}
                                        align="left"
                                        sx={tableType == 1 ? getCellStyle(cellIndex, cellArray.length, key):getCellStyleLayer(cellIndex, cellArray.length, key,columnColors)}
                                    >
                                        {cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default CustomTable;
