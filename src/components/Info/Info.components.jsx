import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BsBox } from "react-icons/bs";

import { InfoCtn, InfoItem } from "./Info.styles";

const Info = () => {
  return (
    <InfoCtn>
      <div className="header">
        <div className="title">
          Varius <span>placerat</span> sot ultricies
        </div>
        <div className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
        </div>
      </div>

      <div className="body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <InfoItem>
                  <div className="icon">
                    <BsBox />
                  </div>
                  <div className="title">Push to Deploy</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla cumque minus laborum beatae.
                  </div>
                </InfoItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </InfoCtn>
  );
};

export default Info;
