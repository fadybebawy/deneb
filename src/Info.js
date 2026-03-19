import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Info() {
  return (
    <section style={{ margin: "100px auto" }}>
      <Box className="container" sx={{display: {md: "flex"}, gap: "30px", alignItems: "center" }} >
        <div className="image" style={{ marginBottom: "40px" }}>
          <img src="/images/about.webp" alt="info_image" />
        </div>
        <div className="info">
          <Typography
            sx={{
              margin: "0px auto 20px",
              color: "#0a2351",
              fontWeight: "bold",
            }}
            variant="h3"
          >
            Why You Hire Us
          </Typography>
          <Typography sx={{fontWeight: "500", letterSpacing: "-2"}} >
            Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna.
            Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit
            amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
          </Typography>
          <br />
          <Typography sx={{fontWeight: "500", letterSpacing: "-2"}} >
            Suspendisse potenti. Aliquam elementum felis purus, quis vulputate
            libero semper nec. Morbi tincidunt maximus nisl vel placerat.
            Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec
            metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus
            elementum arcu, eget eleifend tortor.
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "white",
              bgcolor: "orange",
              borderRadius: "20px",
              marginTop: "20px",
            }}
          >
            Read More
          </Button>
        </div>
      </Box>
    </section>
  );
}
