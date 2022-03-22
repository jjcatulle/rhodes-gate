import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { height } from "@mui/system";
import { LandingCtn } from "./styles";
import ActionAreaCard from "../card";

export default function Landing() {
  return (
    <LandingCtn>
      <div className="left">
        <div className="items">
          <h2>We will help you launch your nft Project.</h2>
          <div className="disc">
            Let us handle all of the technically <br></br> work for you.
          </div>
          <Button className="btn" variant="contained">Contact Us Now</Button>
        </div>
      </div>
      <div className="right">
        <div className="ctn">
          <ActionAreaCard />
        </div>
      </div>
    </LandingCtn>
  );

}
