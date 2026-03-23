import * as React from "react";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="hello"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const tabs = [
  { id: 0, label: "ALL" },
  { id: 1, label: "WEB DESIGN" },
  { id: 2, label: "WEB DEVELOPMENT" },
  { id: 3, label: "BRANDING" },
  { id: 4, label: "MOBILE APP" },
  { id: 5, label: "SEO" },
];
const tabList = tabs.map((elem) => {
  return <Tab label={elem.label} {...a11yProps(elem.id)} />;
});

const cards = [
  {
    cat: 1,
    title: "Web Design Projrct",
    body: "Web Design",
    img: "/images/webDesign.webp",
  },
  {
    cat: 2,
    title: "Web Develpment Project",
    body: "Web Development",
    img: "/images/webDev.webp",
  },
  {
    cat: 2,
    title: "E-commerce Platform Development",
    body: "Web Development",
    img: "images/eCommerce.webp",
  },
  {
    cat: 3,
    title: "Branding Project",
    body: "Branding",
    img: "/images/Banding.webp",
  },
  {
    cat: 3,
    title: "Corporate Rebranding Initiative",
    body: "Branding",
    img: "/images/coffe.webp",
  },
  {
    cat: 4,
    title: "Mopile App Develpment",
    body: "Mopile App",
    img: "/images/green.webp",
  },
  {
    cat: 4,
    title: "Healthcare Mopile App Development",
    body: "Mopile App",
    img: "/images/blue.webp",
  },
  {
    cat: 5,
    title: "SEO Transformation Project",
    body: "SEO",
    img: "/images/seo.webp",
  },
];

export default function Projects() {
  //* to calc the width of card
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollAmount = width > 1000 ? 348 : width - 63;
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    console.log(width);
    return () => clearInterval(interval);
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function cardsData() {
    const currentCards = cards.filter((ele) => {
      if (value == 0) {
        return ele;
      }
      return ele.cat == value;
    });

    return currentCards.map((obj) => {
      return (
        <CustomTabPanel value={value} index={value}>
          <Card
            key={obj.cat}
            sx={{
              boxShadow: "0",
              width: { xs: "100%", md: "300px" },
              cursor: "pointer",
              "&:hover": { boxShadow: "0 4px 10px #0000002c", color: "orange" },
            }}
          >
            <div className="image">
              <img className="projectImage" src={obj.img} alt="project_image" />
            </div>
            <CardContent>
              <Typography
                sx={{
                  color: "#0a2351",
                  fontWeight: "bold",
                  fontSize: "25px",
                  marginBottom: "8px",
                }}
                variant="h4"
              >
                {obj.title}
              </Typography>
              <Typography>{obj.body}</Typography>
            </CardContent>
          </Card>
        </CustomTabPanel>
      );
    });
  }

  return (
    <Box sx={{ width: "100%", margin: "150px auto" }}>
      <Title
        title="Our Latest Projects"
        parag="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
        id="portfolio"
      />
      <Box sx={{ marginTop: "-35px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabList}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={value}>
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "hidden",
            width: { xs: "100%", md: "1056px" },
            margin: { xs: "0", md: "auto" },
          }}
        >
          {cardsData()}
        </Box>
      </CustomTabPanel>
      <div></div>
    </Box>
  );
}
