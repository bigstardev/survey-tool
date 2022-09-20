const defaultProperty = {
  name: "",
  title: "Title",
  description: "decription",
};
export const textQuestion = {
  ...defaultProperty,
  details: { type: "text", placeholder: "" },
};
export const booleanQuestion = {
  ...defaultProperty,
  details: {
    labelTrue: "Yes",
    labelFalse: "No",
    type: "boolean",
  },
};
export const numberQuestion = {
  ...defaultProperty,
  details: {
    type: "number",
    placeholder: "",
  },
};
export const multipleChoiceQuestion = {
  ...defaultProperty,
  details: {
    type: "multipleChoice",
    choices: ["item", "item", "item"],
  },
};

export const questionTypes = [
  { name: "Text", value: "text" },
  { name: "Number", value: "number" },
  { name: "Boolean", value: "boolean" },
  { name: "Multiple Choice", value: "multipleChoice" },
];
