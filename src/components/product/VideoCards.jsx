import React, { useState } from "react";
import {
  Modal,
  Box,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const VideoCard = ({ videoId, title }) => {
  const [open, setOpen] = useState(false);
   const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width:isMobile?180:220,
        height: isMobile?220:300,
        boxShadow: 3,
        borderRadius: 2,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      {/* Video Thumbnail */}
      <Box sx={{ position: "relative", cursor: "pointer" }} onClick={() => setOpen(true)}>
        <CardMedia
          component="img"
          height="200"
          image={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video Thumbnail"
        />
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: 50,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            transition: "background-color 0.3s ease",
            "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
          }}
        >
          <PlayCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold" fontSize="18px">
          {title}
        </Typography>
      </CardContent>

      {/* Video Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "black",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
          }}
        >
          <iframe
             width={isMobile?"310":"560"}
             height={isMobile?"210":"315"}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Card>
  );
};

export default VideoCard;
