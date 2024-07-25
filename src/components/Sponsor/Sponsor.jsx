import { SponsorImg, SponsorWrapper } from "./Sponsor.styled";
import sponsorData from "../../data/sponsorsData.json";
import React from "react";

const Sponsor = React.memo(() => {
  return (
    <SponsorWrapper>
      {sponsorData.map(({ id, src, alt }) => (
        <SponsorImg key={id} src={src} alt={alt} loading="lazy" />
      ))}
    </SponsorWrapper>
  );
});

Sponsor.displayName = "Sponsor";

export default Sponsor;
