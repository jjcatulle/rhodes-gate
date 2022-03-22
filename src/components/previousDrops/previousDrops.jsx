import React, { useState, useEffect } from 'react';
import { PreviousCtn } from './styles';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ActionAreaCard from '../card';


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

const PreviousDrop=()=>{
    return (
      <PreviousCtn>
        <div className="header">
          <span>Previous</span> Drops
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
                  <ActionAreaCard
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </PreviousCtn>
    );
}

export default PreviousDrop;