import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import HeadingSection from "../UI/Heading/Heading";
import {
  SlideNameReview,
  SlideReview,
  SlideWrapper,
  SwiperContainer,
  TestimonialsContainer,
} from "./Testimonials.styled";
import reviews from "../../data/reviews.json";
import StarRating from "../UI/StarRating/StarRating";

function Testimonials() {
  return (
    <TestimonialsContainer id="reviews">
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
          {reviews.map(({ id, name, stars, review }) => (
            <SwiperSlide key={id}>
              <SlideWrapper>
                <StarRating stars={stars} />
                <SlideReview>{review}</SlideReview>
                <SlideNameReview>{name}</SlideNameReview>
              </SlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={cl.paginationContainer} /> */}
      </SwiperContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;
