import { LoaderDivWrapper } from "./Loader.styled";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderDivWrapper>
      <RotatingLines
        strokeColor="#a2d2ff"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderDivWrapper>
  );
}
