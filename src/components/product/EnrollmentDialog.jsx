// EnrollmentDialog.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import { prizeDetails, subscriptionPlans } from "../../utils/mindsprintContent";

function EnrollmentDialog({
  open,
  onClose,
  showPaymentDetails,
  onPaymentDetailsClick,
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          textAlign: "center",
          boxShadow: 3,
          background: "linear-gradient(180deg, #42a5f5, #2196f3 )",
          color: "white",
        }}
      >
        Choose Your Subscription Plan
      </DialogTitle>
      <DialogContent>
        {/* Subscription Cards */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {subscriptionPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: 3,
                  height: "100%", // Uniform height
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Hover effect
                  "&:hover": {
                    transform: "scale(1.05)", // Slight zoom on hover
                    boxShadow: 6, // Stronger shadow on hover
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      backgroundImage:
                        "linear-gradient(135deg, rgb(66, 115, 155), #bbdefb)",
                      color: "white",
                      p: 1,
                      fontSize: "14px",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    {plan.title}
                  </Typography>
                  <Box sx={{ flexGrow: 1, mt: 2 }}>
                    {plan.mrp && (
                      <Typography variant="body2">
                        <b>MRP:</b> {plan.mrp}
                      </Typography>
                    )}
                    {plan.discount && (
                      <Typography variant="body2">
                        <b>Discount:</b> {plan.discount}
                      </Typography>
                    )}
                    <Typography variant="body2">
                      <b>Price:</b> {plan.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {plan.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Rewards Section */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mt: 4, textAlign: "center" }}
        >
          Win Big with MindSprint Rewards!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          We believe hard work and improvement should be celebrated. Based on
          your performance, you can win fantastic prizes across different
          grades!
        </Typography>

        {/* Prize Details */}
        <Grid container spacing={3} sx={{ my: 4 }}>
  {prizeDetails.map((reward, index) => (
    <Grid item xs={12} sm={6} key={index}>
      <Card
        sx={{
          borderRadius: "15px",
          boxShadow: 3,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
          height: "100%", // Ensures all cards have equal height
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 2,
              backgroundImage:
                "linear-gradient(135deg, rgb(66, 115, 155), #bbdefb)",
              color: "white",
              p: 1,
              fontSize: "14px",
      
              borderRadius: "10px",
            }}
          >
            {reward.title}
          </Typography>
          {reward.categories.map((category, i) => (
            <Box key={i} sx={{ mt: 2, flexGrow: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {category.label}
              </Typography>
              {category.details.map((detail, j) => (
                <Typography key={j} variant="body2">
                  {detail}
                </Typography>
              ))}
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


        <Typography variant="body2" sx={{ mt: 3, fontStyle: "italic" }}>
          Note: Prizes for “Highest Improvement” are awarded to the student who
          shows the most remarkable progress in terms of percentage of marks
          scored over the academic year!
        </Typography>

        {/* Payment Details Section */}
        {showPaymentDetails && (
          <Box sx={{ mt: 4, p: 2, bgcolor: "#f5f5f5", borderRadius: "8px" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Payment Details
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <b>Payment Methods:</b> Credit Card, Debit Card, UPI, Net Banking
              <br />
              <b>Payment Gateway:</b> Razorpay
              <br />
              <b>Refund Policy:</b> Full refund within 30 days if not satisfied
              <br />
              <b>Mobile Number:</b> +91-9075559311
              <br/>
              <b>Contact Support:</b> contact@Mindmedinnovations.com
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button
          onClick={onPaymentDetailsClick}
          color="primary"
          variant="contained"
        >
          Payment Details
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EnrollmentDialog;
