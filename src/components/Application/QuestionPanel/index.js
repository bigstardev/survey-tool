import React from "react";
import { Button } from "flowbite-react";
import { Question } from "..";
import EditQuestion from "./EditQuestion";

export default function QuestionPanel({
  questions,
  addNewQuestion,
  activeQuestion,
  setActiveQuestion,
  removeQuestion,
  moveUpDown,
}) {
  return (
    <section className="w-full p-2 mt-8">
      <div className="w-full flex flex-col justify-center items-center gap-4 px-4">
        {questions.map((question, index) => (
          <EditQuestion
            key={index}
            data={question}
            index={index}
            activeQuestion={activeQuestion}
            selectQuestion={setActiveQuestion}
            removeQuestion={removeQuestion}
            moveUpDown={moveUpDown}
          >
            <Question data={question} />
          </EditQuestion>
        ))}
        <div className="mt-4">
          <Button
            pill={true}
            color="success"
            onClick={() => {
              addNewQuestion();
            }}
          >
            Add Question
          </Button>
        </div>
      </div>
    </section>
  );
}
