import { fetchEmailDB } from "../../services/emailPost";
import { toast } from "react-toastify";
import { commonToastOptions } from "../../helpers/toastOptions";
import emailRegex from "../../regex/emailRegex";
import React, { useRef } from "react";
import {
  RoadImg,
  SubscribeButton,
  SubscribeContainer,
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeText,
  SubscribeTitle,
  SubscribeTitleWrapper,
  SubscribeWrapper,
} from "./Subscribe.styled";

const Subscribe = React.memo(() => {
  const form = useRef();

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();

    const validEmail = emailRegex.test(email);

    if (email.length === 0) {
      toast.warning(
        "Email field cannot be empty. Please enter your email address.",
        commonToastOptions
      );
      return;
    }

    if (!validEmail) {
      toast.warning(
        "The email address you entered is not valid. Please check and try again.",
        commonToastOptions
      );
      return;
    }

    try {
      const subscribe = { email, subscribed: true };
      await fetchEmailDB(subscribe);

      toast.success(
        "Successfully subscribed! We'll keep you updated with regular deals and fresh tour ideas. Thank you!",
        commonToastOptions
      );
      e.target.email.value = "";
    } catch (error) {
      toast.error(
        "Error subscribing. Please try again later.",
        commonToastOptions
      );
    }
  };

  return (
    <SubscribeContainer>
      <SubscribeWrapper>
        <SubscribeTitleWrapper>
          <SubscribeTitle>
            MORE TOURS.
            <br /> EXCLUSIVE DEALS.
          </SubscribeTitle>
          <SubscribeText>
            Receive fresh tour ideas, curated itineraries, and exclusive deals
            delivered to your inbox every month.
          </SubscribeText>
        </SubscribeTitleWrapper>
        <SubscribeInputWrapper ref={form} onSubmit={handleSubmitEmail}>
          <SubscribeInput
            type="text"
            name="email"
            placeholder="Enter your Email"
          />
          <SubscribeButton type="submit">Subscribe</SubscribeButton>
        </SubscribeInputWrapper>
        <RoadImg />
      </SubscribeWrapper>
    </SubscribeContainer>
  );
});

Subscribe.displayName = "Subscribe";

export default Subscribe;
