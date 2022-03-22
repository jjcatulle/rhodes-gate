import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { height } from "@mui/system";

import { useNavigate } from "react-router-dom";
import { myItem } from "../data/constant";


// [Math.floor(Math.random()*myData.length)]

export default function ActionAreaCard({
  id=myItem.id,
  title = myItem.title,
  subtitle = myItem.date,
  image = myItem.image
}) {
  const navigate = useNavigate();
  const handleClick = () => navigate("/projects/"+id);

  return (
    <Card
      className="card"
      onClick={handleClick}
      style={{ borderRadius: ".7rem", }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          // height="500"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              "font-family": `"Ubuntu", sans-serif`,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              borderRadius: "2rem",
              "font-family": `"Ubuntu", sans-serif`,
            }}
          >
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
