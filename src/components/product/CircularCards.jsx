import React from "react";
import { Box, Typography } from "@mui/material";

function CircularCard({ gradient, text, fontSize = "11px", fontWeight = 600, color = "white" , onClick }) {
  return (
    <Box
    onClick = {onClick}
      sx={{
        width: 111,
        height: 111,
        borderRadius: "50%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        cursor:"pointer",
        
        
      }}
    >
      {text && (
        <Typography variant="h6" sx={{ fontSize, fontWeight, color }}>
          {text}
        </Typography>
      )}
    </Box>
  );
}

export default CircularCard;