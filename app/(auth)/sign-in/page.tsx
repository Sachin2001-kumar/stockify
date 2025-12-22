import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async () => {};

  return (
    <>
      <h1> Let's Sign In</h1>

      <InputField
        name="Email"
        label="Email"
        placeholder="schn@gmail.com"
        type="email"
        register={register}
        error={errors.email}
        validation={{ required: "Email is required", minLength: 2 }}
      />
      <InputField
        name="Password"
        label="Password"
        placeholder="Enter Your Password"
        type="password"
        register={register}
        error={errors.password}
        validation={{ required: "Password is required", minLength: 8 }}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Is Signing" : "Sign in"}
        </Button>
        <FooterLink
          text="Don't Sign Up yet?"
          LinkText="Sign up"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
