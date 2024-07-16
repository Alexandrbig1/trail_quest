import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { commonToastOptions } from "../../../helpers/toastOptions";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { capitalizeName } from "../../../helpers/capitalizeWord";
import { fetchEmailDB } from "../../../services/emailPost";
import {
  FormBtn,
  FormCustomRadio,
  FormHiddenRadio,
  FormInput,
  FormInputLabel,
  FormInputWrapper,
  FormLabelIcon,
  FormLegend,
  FormRadioButtonsWrapper,
  FormRadioLabel,
  FormWrapper,
} from "./Form.styled";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  groupSize: z.enum(["small", "large"]),
});

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    toast.success(
      `Thank you ${capitalizeName(
        data.name
      )} for your message! We will get back to you shortly.`,
      commonToastOptions
    );

    await fetchEmailDB(data);

    reset();
  };

  const onError = (errors) => {
    if (errors.name) {
      toast.error(
        "Name is required. Please enter your name.",
        commonToastOptions
      );
    } else if (errors.email) {
      toast.error(
        "Invalid email address. Please enter a valid email.",
        commonToastOptions
      );
    } else if (errors.groupSize) {
      toast.error("Please select a group size.", commonToastOptions);
    } else {
      toast.error(
        "There was an error submitting the form. Please check your inputs.",
        commonToastOptions
      );
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit, onError)}>
      <FormInputWrapper>
        <FormLegend>Contact Information</FormLegend>
        <FormInputLabel htmlFor="name">
          <FormInput
            {...register("name")}
            type="text"
            id="name"
            placeholder="Your Name"
            aria-label="Your Name"
            aria-required="true"
            $error={!!errors.name}
          />
          <FormLabelIcon>
            <IoPerson />
          </FormLabelIcon>
        </FormInputLabel>
        <FormInputLabel htmlFor="email">
          <FormInput
            {...register("email")}
            type="email"
            id="email"
            placeholder="Your E-mail"
            aria-label="Your E-mail"
            aria-required="true"
            $error={!!errors.email}
          />
          <FormLabelIcon>
            <MdOutlineMailOutline />
          </FormLabelIcon>
        </FormInputLabel>
      </FormInputWrapper>
      <FormRadioButtonsWrapper>
        <FormLegend>Group Size</FormLegend>
        <FormRadioLabel>
          <FormHiddenRadio
            {...register("groupSize")}
            type="radio"
            value="small"
            aria-label="Small tour group"
          />
          <FormCustomRadio />
          <span>Small tour group</span>
        </FormRadioLabel>
        <FormRadioLabel>
          <FormHiddenRadio
            {...register("groupSize")}
            type="radio"
            value="large"
            aria-label="Large tour group"
          />
          <FormCustomRadio />
          <span>Large tour group</span>
        </FormRadioLabel>
      </FormRadioButtonsWrapper>
      <FormBtn type="submit" aria-label="Submit the form">
        Book Now!
      </FormBtn>
    </FormWrapper>
  );
}

export default Form;
