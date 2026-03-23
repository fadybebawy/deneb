import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function Mind() {
  return (
    <Card
      className="container"
      sx={{
        backgroundColor: "#FEB50E",
        padding: "50px 30px",
        marginBottom: "150px",
        maxWidth: "970px",
        marginLeft: "auto",
        marginRight: "auto",
        display: { md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        margin: { xs: "0 20px 150px", md: "0 auto 150px" },
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "white",
            fontWeight: { md: "bold" },
            marginBottom: "10px",
          }}
          variant="h4"
        >
          Have Any Project in Mind ?
        </Typography>
        <Typography
          sx={{ color: "white", marginBottom: "10px", maxWidth: "500px" }}
        >
          Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet
          et leo sed ut nibh feugiat, auctor enim quis.
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: "25px",
          backgroundColor: "white",
          color: "black",
          padding: "15px 30px",
        }}
      >
        Hire Us
      </Button>
    </Card>
  );
}
