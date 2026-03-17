import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <section>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "80px" }}>
        <div>
          <Typography
            variant="h3"
            sx={{ color: "#0a2351", fontWeight: "bold" }}
          >
            WE Are Creative
          </Typography>
          <Typography variant="h3" sx={{ color: "orange", fontWeight: "bold" }}>
            Deneb Agency
          </Typography>
          <Typography variant="p" sx={{ color: "#7a838a", fontWeight: "bold", mt: "10px", display: "block" }}>
            We Are Professional Freelance Web Dessigner
          </Typography>
          <Button variant="contained" sx={{color: "white", bgcolor: "orange", borderRadius: "20px", mt: "20px"}}>Hire Us</Button>
        </div>
        <div>
            <div className="image">
                <img src="/images/banner_1.webp" alt="banner" style={{width: "100%"}} />
            </div>
        </div>
      </div>
    </section>
  );
}
