import { Select, Label } from "flowbite-react";

export default function MySelect({ options, value, onChange, name, id }) {
  return (
    <div>
      <div className="mb-1">
        <Label htmlFor={id} value={name} />
      </div>

      <Select id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    </div>
  );
}
