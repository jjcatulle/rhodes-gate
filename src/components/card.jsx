import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { height } from "@mui/system";

const myImage =
  "https://oci.mypinata.cloud/ipfs/QmPBNhpXDssjrJwq3QqWYwVLewyHBoocxa63e2AjLJdbfP/2.png";

export default function ActionAreaCard({
  title = "Imx Rovers",
  subtitle = "by orignal cosmic 2022",
  image = "https://oci.mypinata.cloud/ipfs/QmPBNhpXDssjrJwq3QqWYwVLewyHBoocxa63e2AjLJdbfP/2.png",
}) {
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          // height="500"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
