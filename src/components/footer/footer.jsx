import React from "react";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

import { Box } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#ee6d37", textAlign: "center" }}>
        Rhodes Gate: A Launchpad for everyone
      </h1>

      <div className="btn">
        <a
          href="https://twitter.com/RhodesGate"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        {/* <a href="/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a> */}
      </div>
      <div className="trademark">
        2022 - &copy; Rhode's Gate - All Rights Reserved
      </div>
    </Box>
  );
};
export default Footer;
