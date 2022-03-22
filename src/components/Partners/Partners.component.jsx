import React from "react";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#dd1155",
    color: "#dd1155",
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

function BadgeAvatars({
  name,
  role,
  image,
}) {
  return (
    <TeamItem>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <BsFillCheckCircleFill
            style={{
              color: "#dd1155",
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
      </Badge>

      <div className="name">{name}</div>
      <div className="position">{role}</div>
      <div className="icons">
        <FaTwitter />
        {/* <FaLinkedin /> */}
      </div>
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
          meet the teams that we are official partners with
        </div>
      </div>
      <div className="body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {[
              {
                name: "Acrona City",
                role: "Metaverse",
                image:
                  "https://geekpandaz.xyz/static/media/acrona-city.74d379ed.png",
              },
              {
                name: "IMX Rarity",
                role: "Rarity tool",
                image:
                  "data:image/jpeg;base64,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",
              },
            
            ].map((data, index) => (
              <Grid
                style={{ margin: "auto" }}
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
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
