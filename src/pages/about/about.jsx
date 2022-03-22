import React from "react";
import { AboutCtn } from "./styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { Profiles } from "../../data/profiles";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <AboutCtn>
      <div className="about-ctn">
        <div className="title">
          About <span>us</span>
        </div>
        <div className="desc">
          Rhode’s Gate is a launchpad company that specializes in the release of
          non-fungible token projects in the crypto space. We here at Rhode’s
          Gate utilize our launching expertise to craft projects from ideation
          to final product with efficiency and blockchain preference
          flexibility. We prefer to deliver quality and personalization over
          quantity and standardization. We are here for you every step of the
          way; care and attention is something you rarely see in launchpads, and
          our mission is to change that. If you have a project in ideation that
          you wish to execute, you have come to the right place!
        </div>
        <Button
          onClick={() => navigate("/contact")}
          className="btn"
          variant="contained"
        >
          Contact Us Now
        </Button>
      </div>

      <div className="myTeam">
        <div className="header">
          Meet the <span>team</span>
        </div>

        <div className="body">
          <Grid container justifyContent="center" spacing={3}>
            {Profiles.map((profile) => {
              return (
                <Grid item xs={10} md={6} lg={3}>
                  <Card className="card" style={{ borderRadius: ".7rem" }}>
                    {/* <CardActionArea> */}
                    <CardMedia
                      component="img"
                      // height="500"
                      image={profile.pfp}
                      alt="green iguana"
                    />
                    <div className="name">{profile.name}</div>
                    <div className="title">{profile.title}</div>
                    <div className="list-inline">
                      {profile.social.facebook.length > 0 ? (
                        <div className="list-inline-item">
                          <a
                            href={profile.social.facebook}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faFacebook}
                              width="36"
                              height="36"
                            />
                          </a>
                        </div>
                      ) : null}
                      {profile.social.twitter.length > 0 ? (
                        <div className="list-inline-item">
                          <a
                            href={profile.social.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faTwitter}
                              width="36"
                              height="36"
                            />
                          </a>
                        </div>
                      ) : null}
                      {profile.social.instagram.length > 0 ? (
                        <div className="list-inline-item">
                          <a
                            href={profile.social.instagram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faInstagram}
                              width="36"
                              height="36"
                            />
                          </a>
                        </div>
                      ) : null}
                      {profile.social.tiktok.length > 0 ? (
                        <div className="list-inline-item">
                          <a
                            href={profile.social.tiktok}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faTiktok}
                              width="36"
                              height="36"
                            />
                          </a>
                        </div>
                      ) : null}
                      {profile.social.linkedin.length > 0 ? (
                        <div className="list-inline-item">
                          <a href="/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              width="36"
                              height="36"
                            />
                          </a>
                        </div>
                      ) : null}
                    </div>
                    <div className="bio">{profile.bio}</div>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </AboutCtn>
  );
};

export default AboutPage;
