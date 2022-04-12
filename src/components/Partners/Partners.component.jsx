import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Grid from "@mui/material/Grid";

import { TeamCtn, TeamItem } from "./Partners.styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#ee6d37",
    color: "#ee6d37",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function BadgeAvatars({ name, role, image, links, styles }) {
  return (
    <TeamItem>
      {/* <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <BsFillCheckCircleFill
            style={{
              color: "#ee6d37",
              fill: "#FFFFF",
              fontSize: "2rem",
              border: "3px solid #ffff",
              background: "#ffff",
              borderRadius: "2rem",
            }}
          />
        }
      >
        <Avatar alt={name} src={image} sx={{ width: 86, height: 86 }} />
      </Badge> */}

      <a href={`${links[0]}`} target="_blank" rel="noreferrer">
        <img 
          alt={name} src={image} 
          style={{width:`${styles[0]}`, 
            height:`${styles[1]}`, 
            borderRadius:`${styles[2]}`, 
            backgroundColor: `${styles[3]}`,
            padding: `${styles[4]}` }}/>
      </a>

      {/* <div className="name">{name}</div>
      <div className="position">{role}</div>
      <div className="icons">
        <a href={`${links[0]}`} target="_blank" rel="noreferrer" style={{color: "#000"}}>
          <FaTwitter />
        </a>
        <FaLinkedin />
      </div> */}
    </TeamItem>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Partners = () => {
  return (
    <TeamCtn>
      <div className="header">
        <div className="title">
          Meet Our <span>Partners</span>
        </div>
        <div className="description">
          some of our official partners
        </div>
      </div>
      <div className="body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 3, sm: 3, md: 12 }}
          >
            {[
              {
                name: "Acrona City",
                role: "Metaverse",
                image:
                  "https://acronacity.com.au/assets/img/png/logo.png",
                links: [ "https://acronacity.com.au/", "https://twitter.com/AcronaCity" ],
                styles: [ "146px", "118px", "0", "none" ]
              },
              {
                name: "IMX Rarity",
                role: "Rarity tool",
                image:
                  "https://imxrarity.io/images/logo-light.svg",
                links: [ "https://imxrarity.io/", "https://twitter.com/IMXrarity" ],
                styles: [ "240px", "60px", "0", "#1c2836", "5px" ]
              },
              {
                name: "Original Cosmic Interactive",
                role: "",
                image: "https://cdn.discordapp.com/attachments/895050963377848361/963154840442245201/OCILOGNW-blk.png",
                links: [],
                styles: [ "241px", "86px", "0", "none" ]
              }
            ].map((data, index) => (
              <Grid
                style={{ margin: "auto auto 20px" }}
                item
                xs={12}
                sm={4}
                md={4}
                key={uuidv4()}
              >
                <BadgeAvatars {...data} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </TeamCtn>
  );
};

export default Partners;
