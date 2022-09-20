import { Radio, Label } from "flowbite-react";

export default function MyRadio({
  id,
  name,
  value,
  onChange,
  defaultChecked,
  label,
}) {
  return (
    <div className="flex items-center gap-2">
      <Radio
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        // checked={value===}
        defaultChecked={defaultChecked}
      />
      <Label htmlFor={id} value={label} />
    </div>
  );
}
