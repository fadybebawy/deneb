import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Achieve() {
  return (
    <section>
      <Box className="container" sx={{display: {md: "flex"}, gap: "40px", justifyContent: "space-between"}}>
        <div className="achives" style={{maxWidth :"600px", marginBottom: "50px"}}>
          <Typography
            sx={{
              margin: "0px auto 20px",
              color: "#0a2351",
              fontWeight: "bold",
            }}
            variant="h3"
          >
            Over 500+ Completed work & Still Counting
          </Typography>
          <Typography sx={{ fontWeight: "500", letterSpacing: "-2" }}>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Phasellus at orci non risus luctus commodo.
            Ut nibh tellus, faucibus nec gravida.
          </Typography>
          <br />
          <Typography sx={{ fontWeight: "500", letterSpacing: "-2" }}>
            Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis vel
            non ex. Quisque a finibus justo.
          </Typography>
        </div>
        <div className="statistics" style={{display:"flex", gap: "30px", justifyContent: "center"}}>
          <Typography className="column" sx={{marginTop: {md: "-30px"}}} >
            <Box
              sx={{
                textAlign: "center",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: ".3s",
                border: "2px dashed transparent",
                boxShadow: "0 4px 10px #0000001f",
                "&:hover": {border: "2px dashed orange"},
                marginBottom: "30px"
              }}
            >
              <img src="images/list.webp" alt="achieve_image" />
              <h4 style={{ color: "orange", margin: "5px auto" }}>300+</h4>
              <p style={{margin: "5px auto"}}>Project Done</p>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: ".3s",
                border: "2px dashed transparent",
                boxShadow: "0 4px 10px #0000001f",
                "&:hover": {border: "2px dashed orange"}
              }}
            >
              <img src="images/energy.webp" alt="achieve_image" />
              <h4 style={{ color: "orange", margin: "5px auto" }}>200+</h4>
              <p style={{margin: "5px auto"}}>Active Projects</p>
            </Box>
          </Typography>

          <Typography className="column">
            <Box
              sx={{
                textAlign: "center",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: ".3s",
                border: "2px dashed transparent",
                boxShadow: "0 4px 10px #0000001f",
                "&:hover": {border: "2px dashed orange"},
                marginBottom: "30px"
              }}
            >
              <img src="/images/smile.webp" alt="achieve_image" />
              <h4 style={{ color: "orange", margin: "5px auto" }}>250+</h4>
              <p style={{margin: "5px auto"}}>Project Done</p>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: ".3s",
                border: "2px dashed transparent",
                boxShadow: "0 4px 10px #0000001f",
                "&:hover": {border: "2px dashed orange"}
              }}
            >
              <img src="images/trophy.webp" alt="achieve_image" />
              <h4 style={{ color: "orange", margin: "5px auto" }}>5+</h4>
              <p style={{margin: "5px auto"}}>Years Experience</p>
            </Box>
          </Typography>
        </div>
      </Box>
    </section>
  );
}
