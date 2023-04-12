import { useForm } from "react-hook-form";
import React from "react";

const ExampleForm: React.FunctionComponent = () => {
  const {
    register,
    formState: { isValid },
  } = useForm<any>();

  return (
    <form>
      <label>
        End time
        <input type="text" {...register("endTime", { required: true })} />
      </label>

      <button type="submit" disabled={!isValid}>
        Save
      </button>
    </form>
  );
};

export default ExampleForm;
