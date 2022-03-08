import { ChangeEvent, FormEvent } from "react";
import { TextInput, SubmitButton } from "../atoms";

interface FormProps {
  displayName: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ displayName, title, onChange, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput title={title} onChange={onChange} />
      <SubmitButton displayName={displayName} />
    </form>
  );
};

export default Form;
