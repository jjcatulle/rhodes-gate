import React, { useState, useEffect } from "react";
import { PreviousCtn } from "./styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ActionAreaCard from "../card";
import { v4 as uuidv4 } from "uuid";

import myData from "../../data/projects.json";

const PreviousDrop = () => {
  return (
    <PreviousCtn>
      <div className="header">
        <span>Previous</span> Drops
      </div>
      <div className="body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            justifyContent="center"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {myData
              .filter((i) => i.date.toUpperCase() != "TBA")
              .map((item, index) => (
                <Grid item xs={4} sm={4} md={4} key={uuidv4()}>
                  <ActionAreaCard
                    id={item.id}
                    title={item.title}
                    subtitle={item.date}
                    image={item.image}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    </PreviousCtn>
  );
};

export default PreviousDrop;
