import Typography from "@mui/material/Typography";

export default function Title({ title, parag, id }) {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0a2351",
        flexDirection: "column",
        width: "100%",
        margin: "80px auto"
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "600" }}>
        {title}
      </Typography>
      <Typography
        sx={{
          wordSpacing: "-2px",
          maxWidth: "500px",
          textAlign: "center",
          mt: "20px",
          fontWeight: "500",
          color: "black",
        }}
      >
        {parag}
      </Typography>
    </div>
  );
}
