import React from "react";
import { Input, MyRadio } from "../../shared";

export default function Question({ data }) {
  const {
    title,
    description,
    details,
    details: { type },
  } = data;
  return (
    <div className=" w-full py-4 px-4 sm:px-6 border rounded border-gray-400 bg-white flex flex-col gap-2">
      <div className="font-bold text-lg">{title}</div>
      <div className="text-gray-500">{description}</div>
      {type === "text" && (
        <Input type="text" placeholder={details.placeholder} />
      )}
      {type === "number" && (
        <Input type="number" placeholder={details.placeholder} />
      )}
      {type === "boolean" && (
        <div className="flex flex-col gap-2">
          <MyRadio
            id={"labelTrue"}
            label={details.labelTrue}
            value={details.labelTrue}
            onChange={() => {}}
            defaultChecked={true}
          />
          <MyRadio
            id={"labelFalse"}
            label={details.labelFalse}
            value={details.labelFalse}
            onChange={() => {}}
            defaultChecked={false}
          />
        </div>
      )}
      {type === "multipleChoice" && (
        <div className="flex flex-col divide-y">
          {details.choices.map((choice, index) => (
            <div className="p-2" key={index}>
              {choice}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
