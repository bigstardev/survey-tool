import React from "react";
import { Input, TextArea, MySelect } from "../../shared";
import {
  questionTypes,
  textQuestion,
  numberQuestion,
  booleanQuestion,
  multipleChoiceQuestion,
} from "../../../contants";
import QuestionDetail from "./QuestionDetail";

export default function EditPanel({
  activeQuestion,
  setActiveQuestion,
  numberOfQuestions,
}) {
  const handleChange = (e, property, edtDetail) => {
    const targetValue = e.target.value;

    /** change question type */

    if (property === "type") {
      if (targetValue === "number") {
        activeQuestion.details = { ...numberQuestion.details };
      }

      if (targetValue === "text") {
        activeQuestion.details = { ...textQuestion.details };
      }
      if (targetValue === "boolean")
        activeQuestion.details = { ...booleanQuestion.details };
      if (targetValue === "multipleChoice")
        activeQuestion.details = {
          ...multipleChoiceQuestion.details,
          choices: [...multipleChoiceQuestion.details.choices],
        };
    } else {
      /** update question details */

      if (edtDetail) activeQuestion.details[property] = targetValue;
      else activeQuestion[property] = targetValue;
    }
    setActiveQuestion(() => ({ ...activeQuestion }));
  };

  return (
    <section className="flex flex-col w-full sm:border-l-[1px] border-gray-400 sm:min-h-screen ">
      <span className="font-bold p-2 md:p-4 text-xl border-b-[1px] border-gray-400">
        Edit
      </span>

      <div className="p-2 md:p-4 flex flex-col gap-2">
        {activeQuestion ? (
          <>
            <Input
              label="Title"
              id="title"
              value={activeQuestion.title}
              onChange={(e) => handleChange(e, "title")}
            />
            <TextArea
              label="Description"
              id="description"
              value={activeQuestion.description}
              onChange={(e) => handleChange(e, "description")}
            />
            <MySelect
              options={questionTypes}
              value={activeQuestion.details.type}
              id="questionType"
              name="Question Type"
              onChange={(e) => handleChange(e, "type")}
            />
            <QuestionDetail
              activeQuestion={activeQuestion}
              handleChange={handleChange}
              handleActiveQuestion={setActiveQuestion}
            />
          </>
        ) : (
          <>
            {numberOfQuestions > 0 ? (
              <div>Please choose question to edit</div>
            ) : (
              <div>Please add question</div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
