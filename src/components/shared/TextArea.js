import { Label, Textarea } from "flowbite-react";

export default function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  disabled,
}) {
  return (
    <div>
      <div className="mb-1">
        {" "}
        <Label htmlFor={id} value={label} />
      </div>

      <Textarea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
