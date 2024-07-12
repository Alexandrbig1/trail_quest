import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { commonToastOptions } from "../../../helpers/toastOptions";
import { FormBtn, FormInput, FormWrapper } from "./Form.styled";
import { capitalizeName } from "../../../helpers/capitalizeWord";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  groupSize: z.enum(["small", "large"]),
});

function Form() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    toast.success(
      `Thank you ${capitalizeName(
        data.name
      )} for your message! We will get back to you shortly.`,
      commonToastOptions
    );
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
      <FormInput
        {...register("name")}
        type="text"
        id="name"
        placeholder="Your Name"
        aria-label="Your Name"
        aria-required="true"
      />
      <FormInput
        {...register("email")}
        type="email"
        id="email"
        placeholder="Your E-mail"
        aria-label="Your E-mail"
        aria-required="true"
      />
      <div>
        <label>
          <input
            {...register("groupSize")}
            type="radio"
            value="small"
            aria-label="Small tour group"
          />
          Small tour group
        </label>
        <label>
          <input
            {...register("groupSize")}
            type="radio"
            value="large"
            aria-label="Large tour group"
          />
          Large tour group
        </label>
      </div>
      <FormBtn type="submit" aria-label="Submit the form">
        Book Now!
      </FormBtn>
    </FormWrapper>
  );
}

export default Form;
