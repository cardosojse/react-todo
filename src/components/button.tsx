import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-blue-100 hover:bg-blue-200 rounded-lg text-gray-100 font-semibold p-4 w-[20%]"
      {...props}
    ></button>
  );
};

export default Button;
