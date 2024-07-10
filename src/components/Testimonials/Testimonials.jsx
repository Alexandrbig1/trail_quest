import { Swiper, SwiperSlide } from "swiper/react";
import reviews from "../../data/reviews.json";
import HeadingSection from "../UI/Heading/Heading";
import StarRating from "../UI/StarRating/StarRating";
import { IoIosQuote } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import {
  Pagination,
  Autoplay,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import {
  QuoteIcon,
  ReviewsVideoBg,
  SlideNameReview,
  SlideReview,
  SlideReviewImg,
  SlideTextWrapper,
  SlideWrapper,
  SwiperContainer,
  TestimonialsContainer,
  TestimonialsSwiperContainer,
} from "./Testimonials.styled";

function Testimonials() {
  return (
    <TestimonialsContainer id="reviews">
      <ReviewsVideoBg autoPlay muted loop preload="auto">
        <source src="images/reviews_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag or the file format of this
        video.
      </ReviewsVideoBg>
      <TestimonialsSwiperContainer>
        <HeadingSection>We make people happy</HeadingSection>
        <SwiperContainer>
          <Swiper
            slidesPerView={1}
            // loop={true}
            speed={600}
            navigation={true}
            pagination={{
              // el: `.${cl.paginationContainer}`,
              clickable: true,
              dynamicBullets: true,
              // bulletClass: cl.paginationBullet,
              // bulletActiveClass: cl.paginationBulletActive,
            }}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation, Mousewheel, Keyboard]}
            // className={cl.swiperWrapper}
          >
            {reviews.map(({ id, name, stars, review, img }) => (
              <SwiperSlide key={id}>
                <SlideWrapper>
                  <SlideReviewImg src={img} alt={name} />
                  <SlideTextWrapper>
                    <StarRating stars={stars} />
                    <QuoteIcon>
                      <IoIosQuote />
                    </QuoteIcon>
                    <SlideReview>{review}</SlideReview>
                    <SlideNameReview>{name}</SlideNameReview>
                  </SlideTextWrapper>
                </SlideWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className={cl.paginationContainer} /> */}
        </SwiperContainer>
      </TestimonialsSwiperContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;
