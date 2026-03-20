import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Title from "./Title";
const cards = [
  {
    id: 1,
    img: "/images/basic.png",
    title: "Basic",
    body: {
      one: "Graphic Design",
      two: "Web Design",
      three: "UI/UX",
      four: "HTML/CSS",
      five: "SEO Marketing",
      six: "Business Analysis",
    },
    price: "$75 / month",
  },
  {
    id: 2,
    img: "images/standard.png",
    title: "Standard",
    body: {
      one: "Graphic Design",
      two: "Web Design",
      three: "UI/UX",
      four: "HTML/CSS",
      five: "SEO Marketing",
      six: "Business Analysis",
    },
    price: "$95 / month",
  },
  {
    id: 3,
    img: "/images/premium.png",
    title: "Premium",
    body: {
      one: "Graphic Design",
      two: "Web Design",
      three: "UI/UX",
      four: "HTML/CSS",
      five: "SEO Marketing",
      six: "Business Analysis",
    },
    price: "$99 / month",
  },
];

const cardList = cards.map((ele) => {
  return (
    <Card
      key={ele.id}
      sx={{
        width: "300px",
        transition: ".3s",
        textAlign: "center",
        boxShadow: "0 4px 10px #00000028",
        border: "2px transparent dashed",
        "&:hover": { border: "2px orange dashed" },
        margin: { xs: "20px auto", md: "0" },
      }}
    >
      <div style={{ margin: "15px auto" }}>
        <img src={ele.img} style={{ width: "50px" }} alt="price_image" />
      </div>
      <Typography
        sx={{ fontWeight: "900", color: "#0a2351", margin: "15px auto" }}
        variant="h4"
      >
        {ele.title}
      </Typography>
      <Typography>{ele.body.one}</Typography>
      <Typography>{ele.body.two}</Typography>
      <Typography>
        {ele.id === 1 ? <del>{ele.body.three}</del> : ele.body.three}
      </Typography>
      <Typography>
        {ele.id === 1 ? <del>{ele.body.four}</del> : ele.body.four}
      </Typography>
      <Typography>
        {ele.id === 3 ? ele.body.five : <del>{ele.body.five}</del>}
      </Typography>
      <Typography>
        {ele.id === 3 ? ele.body.six : <del>{ele.body.six}</del>}
      </Typography>
      <Typography
        sx={{ fontWeight: "900", color: "#0a2351", margin: "15px auto" }}
        variant="h4"
      >
        {ele.price}
      </Typography>
      <Button
        variant="contained"
        sx={{
          color: "white",
          bgcolor: "orange",
          borderRadius: "20px",
          margin: "15px auto",
        }}
      >
        Start Now
      </Button>
    </Card>
  );
});
export default function Pricing() {
  return (
    <>
      <Title
        title="Affordable Pricing"
        parag="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
        id="3"
      />
      <Box
        sx={{
          display: { md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          margin: "-20px auto 150px",
        }}
      >
        {cardList}
      </Box>
    </>
  );
}
