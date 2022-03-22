import React, { useState, useEffect } from "react";
import { UpcomingCtn } from "./styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
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

function MediaControlCard({
  title = "Imx Rovers",
  subtitle = "by orignal cosmic 2022",
  image = "https://oci.mypinata.cloud/ipfs/QmPBNhpXDssjrJwq3QqWYwVLewyHBoocxa63e2AjLJdbfP/2.png",
}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            05/20/2022
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit.sint aspernatur repudiandae vero rem cum?</div>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );
}

const dataArray = [
  {
    title: "Icey Pandaz",
    subtitle: "a collaction of 2500 pandaz",
    image:
      "https://pbs.twimg.com/profile_images/1480958922332770306/SnCcyVrP_400x400.jpg",
  },
  {
    title: "Imx Rovers",
    subtitle: "by Original Cosmic 2022",
    image: "https://pbs.twimg.com/media/FMzB0oAXoAUx4t6?format=jpg&name=medium",
  },
  {
    title: "Luxe Ladies",
    subtitle: "by Cataldo Company,inc",
    image:
      "https://pbs.twimg.com/profile_images/1495072669410209803/Sfwu_TS5_400x400.jpg",
  },
];

const Upcoming = () => {
  return (
    <UpcomingCtn>
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
            {dataArray.map((item, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <MediaControlCard
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
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
