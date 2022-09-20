import React from "react";
import { Label, TextInput } from "flowbite-react";
export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  disabled,
  onChange,
  value,
}) {
  return (
    <div>
      {label && (
        <div className="mb-1">
          <Label htmlFor={id} value={label} />
        </div>
      )}

      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
