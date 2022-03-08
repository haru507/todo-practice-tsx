import { ChangeEvent } from "react";

interface InputButtonProps {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ title, onChange }: InputButtonProps) => {
  return <input value={title} onChange={onChange} />;
};

export default TextInput;
