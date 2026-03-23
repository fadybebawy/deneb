import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import Button from "@mui/material/Button";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#F8F8FA" }}>
      <Box
        className="container"
        sx={{
          paddingTop: "20px",
          display: "flex",
          paddingBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ marginBottom: "25px" }}>
          <div>
            <a href="#home">
              <img
                style={{ maxWidth: "100px" }}
                src="/images/logo_1.webp"
                alt="logo_image"
              />
            </a>
          </div>
          <Typography sx={{ maxWidth: "300px", margin: "15px 0" }}>
            Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi
            est arcu, hendrerit ac vehicula condimentum, euismod nec tortor
            praesent consequat urna.
          </Typography>
          <div className="icons">
            <span style={{ marginRight: "5px" }}>
              <FacebookIcon sx={{ color: "orange" }} />
            </span>
            <span style={{ marginRight: "5px" }}>
              <XIcon sx={{ color: "orange" }} />
            </span>
            <span style={{ marginRight: "5px" }}>
              <InstagramIcon sx={{ color: "orange" }} />
            </span>
          </div>
        </Box>
        <Box>
          <Typography
            sx={{ wordSpacing: "-3px", fontWeight: { md: "bold" }, color: "#0A2351" }}
            variant="h5"
          >
            Learn More
          </Typography>
          <div style={{ margin: "10px 0" }}>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="#services"
            >
              Services
            </a>
          </div>
          <div style={{ margin: "10px 0" }}>
            <a style={{ color: "black", textDecoration: "none" }} href="#about">
              About Us
            </a>
          </div>
          <div style={{ margin: "10px 0" }}>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="#portfolio"
            >
              Portfolio
            </a>
          </div>
          <div style={{ margin: "10px 0" }}>
            <a style={{ color: "black", textDecoration: "none" }} href="#blog">
              Blog
            </a>
          </div>
          <div style={{ margin: "10px 0" }}>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="#contact"
            >
              Contact Us
            </a>
          </div>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <Typography
            sx={{ wordSpacing: "-3px", fontWeight: { md: "bold" }, color: "#0A2351" }}
            variant="h5"
          >
            Contact Us
          </Typography>
          <div
            className="phone"
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <span>
              <PhoneIcon sx={{ marginRight: "8px", color: "orange" }} />
            </span>
            <div>
              1800-121-3637
              <br />
              +91 924-614-7999
            </div>
          </div>
          <div
            className="mail"
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <span>
              <EmailIcon sx={{ marginRight: "8px", color: "orange" }} />
            </span>
            <div>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto:fadybebawy83@gmail.com"
              >
                fadybebawy83@gmail.com
              </a>
              <br />
              service@denb.com
            </div>
          </div>
          <div
            className="location"
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <span>
              <LocationPinIcon sx={{ marginRight: "8px", color: "orange" }} />
            </span>
            <div>
              125, Park street aven, <br />
              Brocklyn, .Newyork99
            </div>
          </div>
        </Box>
        <Box>
          <Typography
            sx={{ wordSpacing: "-3px", fontWeight: { md: "bold" }, color: "#0A2351" }}
            variant="h5"
          >
            News
          </Typography>
          <Typography sx={{ margin: "15px 0", maxWidth: "300px" }}>
            Subscribe to our newsletter to receive latest news on our services.
          </Typography>
          <input
            style={{
              width: "275px",
              borderRadius: "20px",
              height: "40px",
              padding: "0 0px 0 10px",
              border: "0",
              outline: "none",
              boxShadow: "0 2px 10px #00000020",
              marginBottom: "20px",
            }}
            placeholder="Your Email Address"
            type="text"
          />
          <br />
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              backgroundColor: "orange",
              color: "white",
              padding: "10px 15px",
            }}
          >
            Sunsribe
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#edecf0",
          height: "50px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0A2351",
          fontWeight: "500"
        }}
      >
        &copy; 2026  <span style={{color: "orange", fontWeight: "bold"}} >  deneb</span> , All Rights Reserved.
      </Box>
    </footer>
  );
}
