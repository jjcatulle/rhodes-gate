import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import styled from "styled-components";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { ContactPageCtn, Spacer } from "./styles";

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #ee6d37;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #ee6d37;
    }
  }
`;

const WhiteBorderRadio = styled(Radio)`
  & label.Mui-focused {
    color: #ee6d37;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #ee6d37;
    }
  }
`;

const ContactPage = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    business: false,
    personal: false,
    inquiry: "",
  });

  const handleSubMit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  

  return (
    <ContactPageCtn>
      <div className="ctn">
        <Card className="card">
          <CardContent className="ctn">
            <div className="title">Contact US</div>
            <form
              method="post"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdXhNtaOrTkBiDrYK8qu3G348BKQVo7PhXWNiH7f10fD1irJg/formResponse"
            >
              <WhiteBorderTextField
                //   error
                //   id="outlined-error"
                label="Name"
                name="entry.629328009"
                //   defaultValue="Hello World"
                onChange={(e) => {
                  setformData({ ...formData, name: e.target.value });
                }}
              />
              <Spacer></Spacer>
              <WhiteBorderTextField
                // error
                //   id="outlined-error"
                name="emailAddress"
                label="Email"
                //   defaultValue="Hello World"
                onChange={(e) => {
                  setformData({ ...formData, email: e.target.value });
                }}
              />
              <Spacer></Spacer>
              <WhiteBorderTextField
                // error
                //   id="outlined-error"
                name="entry.1911493552"
                label="what is your query about?"
                //   defaultValue="Hello World"
                onChange={(e) => {
                  setformData({ ...formData, email: e.target.value });
                }}
              />

              <Spacer></Spacer>

              <WhiteBorderTextField
                name="entry.1268944789"
                id="outlined-multiline-static"
                label="inquiry"
                multiline
                rows={4}
                onChange={(e) => {
                  setformData({ ...formData, inquiry: e.target.value });
                }}
              />

              <Button type="submit" className="btn" variant="contained">
                Contact Us Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ContactPageCtn>
  );
};

export default ContactPage;
