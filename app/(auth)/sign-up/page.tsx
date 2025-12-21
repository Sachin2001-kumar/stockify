"use client";

import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SingUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    // try {
    //   const result = await signUpWithEmail(data);
    //   if (result.success) router.push("/");
    // } catch (e) {
    //   console.error(e);
    //   toast.error("Sign up failed", {
    //     description:
    //       e instanceof Error ? e.message : "Failed to create an account.",
    //   });
    // }
  };
  return (
    <>
      <h1 className="form-title"> Sign Up & Personalize</h1>

      <InputField
        name="full Name"
        label="Full Name"
        placeholder="Enter Your Full Name"
        register={register}
        error={errors.fullName}
        validation={{ required: "Full Name is required", minLength: 2 }}
      />
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
      <CountrySelectField
        name="Country"
        label="Country"
        control={control}
        error={errors.country}
        required
      />

      <SelectField
        name="Invesment Goal"
        label="Invesment Goal"
        placeholder="Enter your Invesment goal"
        options={INVESTMENT_GOALS}
        control={control}
        error={errors.investmentGoals}
      />

      <SelectField
        name="Risk Tolerance"
        label="Risk Tolerance"
        placeholder="Enter your Risk Tolerance"
        options={RISK_TOLERANCE_OPTIONS}
        control={control}
        error={errors.riskTolerance}
      />

      <SelectField
        name="Perferred Industry"
        label="Perferred Industry"
        placeholder="Enter your Perferred Industry"
        options={PREFERRED_INDUSTRIES}
        control={control}
        error={errors.preferredIndustry}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>
        <FooterLink
          text="Already having an account?"
          LinkText="Sign in"
          href="/sign-in"
        />
      </form>
    </>
  );
};

export default SingUp;
