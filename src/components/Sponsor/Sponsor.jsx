import { SponsorImg, SponsorWrapper } from "./Sponsor.styled";
import sponsorData from "../../data/sponsorsData.json";

function Sponsor() {
  return (
    <SponsorWrapper>
      {sponsorData.map(({ id, src, alt }) => (
        <SponsorImg key={id} src={src} alt={alt} loading="lazy" />
      ))}
    </SponsorWrapper>
  );
}

export default Sponsor;
