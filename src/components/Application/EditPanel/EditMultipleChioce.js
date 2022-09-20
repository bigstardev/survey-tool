import { Input } from "../../shared";
import { Button } from "flowbite-react";

export default function EditMultipleChioce({
  activeQuestion,
  handleActiveQuestionChange,
}) {
  const handleChange = (e, index) => {
    activeQuestion.details.choices[index] = e.target.value;
    handleActiveQuestionChange({ ...activeQuestion });
  };
  const addNewChoice = () => {
    activeQuestion.details.choices.push("");
    handleActiveQuestionChange({ ...activeQuestion });
  };
  const removeChoice = (index) => {
    activeQuestion.details.choices.splice(index, 1);
    handleActiveQuestionChange({ ...activeQuestion });
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-end items-center">
        <div className="flex justify-end items-center">
          <Button size="xs" onClick={addNewChoice}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Choices
          </Button>
        </div>
      </div>

      {activeQuestion.details.choices.map((choice, index) => (
        <div className="flex items-center justify-between w-full" key={index}>
          <div className="w-full mr-2">
            <Input
              label=""
              id="numberOfChoices"
              value={choice}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div onClick={() => removeChoice(index)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:text-red-700 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
