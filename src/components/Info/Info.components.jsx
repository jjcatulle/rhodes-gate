import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";

import { BsLightbulbFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { FaGlobe, FaCode } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { GiToken } from "react-icons/gi";

import { InfoCtn, InfoItem } from "./Info.styles";
const data = [
  {
    title: "Advising",
    description:
      "Happy to help. We walk you step-by-step in the project launching process.",
    icon: <BsLightbulbFill />,
  },
  {
    title: "Ideation & Planning",
    description:
      "Great minds think alike. Our collective ideas and our experience means a detailed plan of execution.",
    icon: <BsFillCalendarCheckFill />,
  },
  {
    title: "Custom Websites",
    description:
      "We tailor websites that truly portray your project and its vision.",
    icon: <FaGlobe />,
  },
  {
    title: "MultiChain",
    description:
      "We will launch your project on Ethereum, Avalanche, Polygon, Solana, or Immutable X.",
    icon: <SiHiveBlockchain />,
  },
  {
    title: "Tokenomic Implementation",
    description:
      "We generate custom token contracts, catered specifically for you and your economy.",
    icon: <GiToken />,
  },
  {
    title: "Personalized Contracts",
    description:
      "Extra detail and attention to optimize your collection’s minting and utilities.",
    icon: <FaCode />,
  },
];

const Info = () => {
  return (
    <InfoCtn>
      <div className="header">
        <div className="title">
          The Role of Rhode's Gate in <span>Web3</span>
        </div>
        <div className="description">
          we provide a diverse list of services
        </div>
      </div>

      <div className="body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((i, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <InfoItem>
                  <div className="icon">
                    {i.icon}
                  </div>
                  <div className="title">{i.title}</div>
                  <div className="description">{i.description}</div>
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
