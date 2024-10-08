import styled from "styled-components";
import { primaryFont, secondaryFont } from "../fonts";

export const TestimonialsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TestimonialsSwiperContainer = styled.section`
  width: 100%;
  max-width: 375px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 44rem;

  padding: 0 9.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  width: 65%;
  height: 100%;
  margin: 0 auto;
  padding: 5.4rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.blueColorLowOp};
  background-color: #2998ff50;
`;

export const SlideTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
`;

export const SlideReview = styled.p`
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const SlideNameReview = styled.h4`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const SlideReviewImg = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 50rem;
`;

export const QuoteIcon = styled.span`
  font-size: 4.2rem;
  color: #01be9690;

  position: absolute;
  top: -2.4rem;
  right: 0;
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

export const ReviewsVideoBg = styled.video`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  object-fit: cover;
`;
