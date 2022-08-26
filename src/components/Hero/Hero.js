import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Hamza's Portfolio
      </SectionTitle>
      <SectionText>
        Front End Web Engineer was responsible for creating many tiny to huge
        projects in different areas like Products management Systems,
        eCommerces, Landing Pages and many more
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto: hamza.alaydi.99@outlook.sa")}
      >
        Email me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
