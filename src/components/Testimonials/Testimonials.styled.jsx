import styled from "styled-components";
import { primaryFont, secondaryFont } from "../fonts";

export const TestimonialsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9.2rem;
  margin-top: 9.6rem;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 44rem;

  padding: 0 9.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  padding: 5.4rem;
  border-radius: 1.2rem;
  background-color: red;
  transform: skewX(-12deg);

  & > * {
    transform: skewX(12deg);
  }
`;

export const SlideReview = styled.p`
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.paragraphTextColor};
`;

export const SlideNameReview = styled.h4`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

// .paginationContainer {
//   position: absolute;
//   bottom: -40px !important;
//   left: 50%;
//   transform: translateX(-50%);
// }

// .paginationBullet {
//   border-radius: 50%;
//   background-color: #d9d9d9;
//   margin: 0 5px;
//   padding: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// }

// .paginationBulletActive {
//   background-color: #000;
// }
