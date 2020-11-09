import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  defaultValues?: Record<string, any>;
  children?: any;
  onSubmit: any;
};

const Form: React.FC<Props> = ({ defaultValues, children, onSubmit }) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit, errors } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return child?.props?.name
          ? React.createElement(child?.type, {
              ...{
                ...child?.props,
                errors,
                register: methods.register,
                key: child?.props?.name
              }
            })
          : child;
      })}
    </form>
  );
};

export default Form;
