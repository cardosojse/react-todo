import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return (
    <input
      className="w-[80%] bg-black-200 text-gray-300 p-4 border border-black-400 rounded-lg focus:text-gray-100 focus:border-purple-200 focus:outline-none"
      {...props}
    />
  );
};

export default Input;
