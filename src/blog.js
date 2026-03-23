import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Title from "./Title";
const blog = [
  {
    img: "/images/blog1.webp",
    date: "July 21, 2020",
    title: "Fitnes Mantra To Live Fit Life",
    body: "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament",
  },
  {
    img: "/images/blog2.webp",
    date: "May 03, 2020",
    title: "Beautiful & Special Moment",
    body: "Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.",
  },
  {
    img: "/images/blog3.webp",
    date: "Apr 02, 2020",
    title: "Beauti lies within special",
    body: "Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at.",
  },
];

const blogList = blog.map((elem) => {
  return (
    <Card
      sx={{
        borderRadius: "5px",
        overflow: "hidden",
        margin: { xs: "0 auto 20px", md: "0" },
        transition: ".3s",
        width: "fit-content",
        boxShadow: "0",
        "&:hover": { boxShadow: "0 4px 12px #00000020" },
      }}
    >
      <div>
        <img style={{ maxWidth: "350px" }} src={elem.img} alt="blog_image" />
      </div>
      <Typography sx={{ color: "orange", m: "10px" }}>{elem.date}</Typography>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "bold",
          margin: "15px 10px",
          color: "#0A2351",
        }}
        variant="h4"
      >
        {elem.title}
      </Typography>
      <Typography sx={{ margin: "15px 10px" }}>{elem.title}</Typography>
      <Button variant="text" sx={{ color: "orange", mb: "10px", ml: "-6px" }}>
        <PlayArrowIcon
          color="orange"
          sx={{ color: "orange", padding: "0px" }}
        />{" "}
        Read More
      </Button>
    </Card>
  );
});

export default function Blog() {
  return (
    <Box sx={{ margin: "20px auto 150px" }}>
      <Title
        title="Latest Blog"
        parag="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
        id="blog"
      />
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          mt: "-30px"
        }}
      >
        {blogList}
      </Box>
    </Box>
  );
}
