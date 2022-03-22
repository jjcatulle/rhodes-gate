import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";

import ActionAreaCard from "../card";

import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useNavigate } from "react-router-dom";

import myData from "../../data/projects.json";

import { UpcomingCtn } from "./styles";

function MediaControlCard({
  id = 1,
  title = "Imx Rovers",
  subtitle = "by orignal cosmic 2022",
  image = "https://oci.mypinata.cloud/ipfs/QmPBNhpXDssjrJwq3QqWYwVLewyHBoocxa63e2AjLJdbfP/2.png",
  description = "lol tesstttsts",
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => navigate("/projects/" + id);

  return (
    <Card
      sx={{ display: "flex" }}
      style={{ borderRadius: ".7rem", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            style={{
              color: "#ee6d37",
            }}
          >
            {subtitle}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <div className="des">{description.substring(0, 120)}...</div>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="profile image"
      />
    </Card>
  );
}

const Upcoming = () => {
  return (
    <UpcomingCtn name="upcoming">
      
      <div className="header">
        <span>Upcoming</span> Drops
      </div>
      <div className="body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {myData
              .filter((i) => i.date.toUpperCase() == "TBA")
              .map((item, index) => (
                <Grid item xs={4} sm={4} md={4} key={uuidv4()}>
                  <MediaControlCard
                    id={item.id}
                    title={item.title}
                    subtitle={item.date}
                    image={item.image}
                    description={item.description}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    </UpcomingCtn>
  );
};

export default Upcoming;
