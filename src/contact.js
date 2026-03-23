import Box from "@mui/material/Box";
import Title from "./Title";

export default function Contact() {
  return (
    <Box sx={{marginTop: "200px"}}>
      <Title
        title="Get In Touch With Us"
        parag="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
        id="contact"
      />
      <Box
        className="container"
        id="contactBox"
        sx={{
          marginTop: "-80px",
          display: "flex",
          marginBottom: "150px",
          gap: "50px",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <div className="imageDiv" style={{ marginBottom: "50px" }}>
          <img
            className="contactImage"
            style={{ margin: "auto", maxWidth: "525px" }}
            src="/images/contact.webp"
            alt="contact_image"
          />
        </div>
        <Box className="contact">
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
              marginRight: "15px",
              // display: "block",
            }}
            placeholder="First Name"
            type="text"
          />
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
              // display: "block",
            }}
            placeholder="Last Name"
            type="text"
          />
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
              marginRight: "15px",
              // display: "block",
            }}
            placeholder="Email Address"
            type="email"
          />
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
              // display: "block",
            }}
            placeholder="Phone Numper"
            type="text"
          />
          <textarea
            style={{
              width: "100%",
              borderRadius: "20px",
              minHeight: "150px",
              padding: "10px 0px 0 10px",
              border: "0",
              outline: "none",
              boxShadow: "0 2px 10px #00000020",
              marginBottom: "20px",
              // display: "block",
            }}
            placeholder="Message"
          />
        </Box>
      </Box>
    </Box>
  );
}
