// MindSprint.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import img from "../../assets/images/mindsprint.png";
import CircularCard from "../../components/product/CircularCards";
import InfoCard from "../../components/product/InfoCard";
import { circleInfo } from "../../utils/mindsprintContent";
import EnrollmentDialog from "../../components/product/EnrollmentDialog";
import VideoCard from "../../components/product/VideoCards";

import { videos } from "../../utils/mindsprintContent";

function MindSprint() {
  const [selectedCircle, setSelectedCircle] = useState(circleInfo[0].title);
  const [openDialog, setOpenDialog] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Handle circle click
  const handleCircleClick = (title) => {
    setSelectedCircle(title);
  };

  // Handle dialog open
  const handleOpenDialog = () => {
    setOpenDialog(true);
    setShowPaymentDetails(false);
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Handle payment details button click
  const handlePaymentDetailsClick = () => {
    setShowPaymentDetails(!showPaymentDetails);
  };

  return (
    <>
      <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
        {/* Top Section */}
        <Box
          sx={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            p: { xs: 2, sm: 3 },
            py: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            background: "linear-gradient(45deg,rgb(198, 223, 248), #759EC8)",
          }}
        >
          <img
            alt="mindsprint"
            src={img}
            style={{ width: "100%", maxWidth: "400px", alignSelf: "center" }}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ alignSelf: { xs: "center", sm: "flex-end" }, color: "white" }}
            onClick={handleOpenDialog}
          >
            Enroll Now
          </Button>
        </Box>

        {/* What Makes MindSprint Unique? Section */}
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            mt: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              my: 3,
              fontSize: { xs: "28px", sm: "35px" },
              opacity: "80%",
            }}
          >
            What Makes MindSprint Unique?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", opacity: "80%" }}
          >
            MindSprint is more than just a study program—it’s a transformational
            learning experience powered by AI-driven technology and storytelling
            methodologies to make education engaging, effective, and impactful.
          </Typography>
        </Box>

        {/* Key Features & Benefits Section */}
        <Box
          sx={{
            p: { xs: 2, sm: 5 },
            mt: 4,
            height: { xs: "auto", sm: "280px" },
            display: "flex",
            flexDirection: "column",
            position: "relative",
            textAlign: "center",
            boxShadow: 2,
            bgcolor: "#eeeeee ",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: "28px", sm: "35px" },
              opacity: "80%",
            }}
          >
            Key Features & Benefits
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: "80%" }}>
            <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
              130 AI-Driven Video Lessons
            </span>
            <br />
            <span>
              A curated collection of interactive, engaging video lessons
              powered by advanced AI, catering to diverse learning styles for a
              personalized educational experience.
            </span>
          </Typography>

          {/* Circular Cards */}
          <Box
            sx={{
              position: { xs: "static", sm: "absolute" },
              bottom: { xs: 0, sm: "-50px" },
              left: "50%",
              transform: { xs: "none", sm: "translateX(-50%)" },
              display: "flex",
              gap: { xs: 2, sm: 8 },
              mt: { xs: 3, sm: 0 },
              justifyContent: "center",
              flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
            }}
          >
            {circleInfo.map((info) => (
              <CircularCard
                key={info.id}
                gradient={
                  "linear-gradient(135deg,rgb(62, 128, 168),rgb(106, 143, 255))"
                }
                text={info.title}
                onClick={() => handleCircleClick(info.title)}
              />
            ))}
          </Box>
        </Box>

        {/* Display Selected Circle Information */}
        {selectedCircle && (
          <InfoCard
            title={selectedCircle}
            description={
              circleInfo.find((info) => info.title === selectedCircle)
                ?.description
            }
          />
        )}

        {/* Storytelling as a Core Methodology Section */}
        <Box
          sx={{ p: { xs: 2, sm: 4 }, mt: 4, boxShadow: 2, bgcolor: "#fafafa" }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "24px", sm: "32px" },
              textAlign: "left",
              opacity: "80%",
            }}
          >
            Storytelling as a Core Methodology
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              textAlign: "left",
              opacity: "80%",
              my: 3,
            }}
          >
            <b>
              MindSprint harnesses the power of storytelling to make lessons
              relatable and memorable.
            </b>
            <br />
            <br /> <b>Through engaging narratives, students can:</b>
            <br />
            Overcome procrastination & distractions. Develop a positive attitude
            towards learning. Apply theoretical concepts to real-life situations
            effortlessly.
            <br />{" "}
            <b>
              This approach ensures long-term knowledge retention and helps
              students integrate learning into their everyday lives.
            </b>
          </Typography>
        </Box>

        {/* Why Choose MindSprint for Your Institution? Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg,rgb(53, 127, 255), #82b1ff )",
            p: 3,
            mt: 5,
            borderTopRightRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "24px", sm: "32px" },
              textAlign: "left",
              color: "white",
            }}
          >
            Why Choose MindSprint for Your Institution?
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            mt: 2,
            boxShadow: 2,
            borderTopRightRadius: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "16px" },
              textAlign: "left",
              my: 3,
            }}
          >
            <b>
              <span style={{ fontSize: "18px" }}>
                MindSprint is not just about individual success—
              </span>
              it’s about empowering institutions with a future-ready education
              model.
            </b>
            <br />
            <br /> <b>Enhance Academic Reputation </b>
            <br />
            By improving student performance, your institution gains recognition
            and stands out as a leader in education.
            <br />
            <br /> <b>Strengthen Community Engagement</b> <br />
            Introduce an innovative program that resonates with parents,
            educators, and stakeholders, showcasing your commitment to holistic
            student development.
            <br />
            <br /> <b>Drive Sustainable Growth</b> <br /> Attract and retain
            students by offering cutting-edge learning solutions focused on
            academic excellence and personal growth.
          </Typography>
        </Box>

        {/* Learning Features: Smarter, Safer Learning Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg,rgb(53, 127, 255), #82b1ff )",
            p: 3,
            mt: 5,
            borderTopRightRadius: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "24px", sm: "32px" },
              textAlign: "left",
              color: "white",
            }}
          >
            Learning Features: Smarter, Safer Learning
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            mt: 2,
            boxShadow: 2,
            borderTopRightRadius: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "16px" },
              textAlign: "left",
              my: 3,
              opacity: "80%",
            }}
          >
            <b>
              MindSprint’s Learning Management System (LMS) is designed with
              intelligent controls for better student engagement and responsible
              screen time management:
            </b>
            <br />
            <br />
            <b>Video Unlocking Sequence</b> – Lessons unlock one by one to
            ensure progressive learning. Student Attentiveness Assessments –
            Built-in tests to track understanding & engagement. Parental
            Notifications – Periodic updates keep parents informed about their
            child’s learning journey.
            <br />
            <br />
            <b>Screen Time Limits </b>– Daily usage restrictions to promote
            healthy study habits. User-Friendly Interface – Simple, intuitive
            navigation for a seamless learning experience.
          </Typography>
        </Box>
        <Box p={3}>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              justifyContent: "flex-start",
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome/Safari
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            {videos.map((video, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "80%", sm: "50%", md: "20%" },
                }}
              >
                <VideoCard
                  videoId={video.videoId}
                  title={video.title}
                  description={video.description}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Enroll Now Button */}
        <Box sx={{ width: "100%", p: 3 }}>
          <Button
            variant="contained"
            size="small"
            fullWidth
            onClick={handleOpenDialog}
          >
            Hurry Up - Limited Time offer!
          </Button>
        </Box>

        {/* Use the EnrollmentDialog component */}
        <EnrollmentDialog
          open={openDialog}
          onClose={handleCloseDialog}
          showPaymentDetails={showPaymentDetails}
          onPaymentDetailsClick={handlePaymentDetailsClick}
        />
      </Box>
    </>
  );
}

export default MindSprint;
