import Typography from "@mui/material/Typography";
import Title from "./Title";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function Service() {
  const cards = [
    {
      img: "/images/phone.webp",
      title: "App Design",
      parag:
        "Comprehensive App Design Services Our App Design service focuses on...",
    },
    {
      img: "/images/analys.webp",
      title: "Business Analysis",
      parag:
        "Comprehensive Business Analysis Services Our Business Analysis service provides deep...",
    },
    {
      img: "/images/statics.webp",
      title: "Digital Marketing",
      parag:
        "Holistic Digital Marketing Solutions Our Digital Marketing service is designed...",
    },
    {
      img: "/images/lamp.webp",
      title: "Research",
      parag:
        "Strategic Research and Consulting Our Strategy & Research service provides...",
    },
    {
      img: "/images/coding.webp",
      title: "Web Development",
      parag:
        "Comprehensive Web Development Services Our Web Development service offers end-to-end...",
    },
    {
      img: "/images/jewlay.webp",
      title: "Web Solution",
      parag:
        "Comprehensive Web Solutions Our Web Solution service provides end-to-end web...",
    },
  ];

  let cardList = cards.map((card) => {
    return (
      <Box
        key={card.title}
        sx={{
          textAlign: "center",
          padding: "20px 10px ",
          border: "2px dashed transparent",
          transition: ".3s",
          "&:hover": { border: "2px dashed orange" },
          width: "300px",
          margin: "auto"
        }}
      >
        <div className="image">
          <img src={card.img} alt="card_image" />
        </div>
        <Typography variant="h4" sx={{ color: "#0a2351" }}>
          {card.title}
        </Typography>
        <Typography
          sx={{ maxWidth: "350px", textAlign: "center", margin: "auto" }}
        >
          {card.parag}
        </Typography>
        <Button sx={{ color: "orange" }} variant="text">
          READ MORE
        </Button>
      </Box>
    );
  });

  return (
    <section>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "80px",
        }}
      >
        <Title
          title="Our Service"
          parag="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
          id="service"
        />
      </div>
      <Box
        className="cards"
        sx={{
          display: { md: "flex" },
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {cardList}
      </Box>
    </section>
  );
}
