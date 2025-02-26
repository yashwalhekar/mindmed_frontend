import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function InfoCard({ title, description }) {
  return (
    <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
     <Card sx={{ width: "100%", maxWidth: 900, boxShadow: 3,p:3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1"  sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default InfoCard;