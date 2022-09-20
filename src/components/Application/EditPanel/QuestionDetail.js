import { Input } from "../../shared";
import EditMultipleChioce from "./EditMultipleChioce";

export default function QuestionDetail({
  activeQuestion,
  handleChange,
  handleActiveQuestion,
}) {
  const {
    details: { type },
  } = activeQuestion;

  if (type === "text")
    return (
      <Input
        label="Input placeholder"
        id="input-place-holder"
        value={activeQuestion.details.placeholder}
        onChange={(e) => handleChange(e, "placeholder", true)}
      />
    );
  if (type === "number")
    return (
      <Input
        label="Number placeholder"
        id="number-place-holder"
        value={activeQuestion.details.placeholder}
        onChange={(e) => handleChange(e, "placeholder", true)}
      />
    );
  if (type === "boolean")
    return (
      <div className="flex flex-col gap-4">
        <Input
          label="Label True"
          id="label-true"
          value={activeQuestion.details.labelTrue}
          onChange={(e) => handleChange(e, "labelTrue", true)}
        />
        <Input
          label="Label False"
          id="label-false"
          value={activeQuestion.details.labelFalse}
          onChange={(e) => handleChange(e, "labelFalse", true)}
        />
      </div>
    );
  if (type === "multipleChoice")
    return (
      <EditMultipleChioce
        activeQuestion={activeQuestion}
        handleActiveQuestionChange={handleActiveQuestion}
      />
    );
}
