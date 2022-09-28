import React, { useEffect, useState } from "react";
import {
  ToolBar,
  EditPanel,
  QuestionPanel,
} from "../../components/Application";
import {
  textQuestion,
  numberQuestion,
  multipleChoiceQuestion,
  booleanQuestion,
} from "../../contants";
import { swapArrayItem } from "../../utils";

export default function Design({ questions, setQuestions }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const addNewSetActive = (newQuestion) => {
    setQuestions((prev) => [...prev, { ...newQuestion }]);
    setActiveQuestion({ ...newQuestion });
  };

  const removeQuestion = (data) => {
    const deletedQuestionIndex = questions.indexOf(data);
    questions.splice(deletedQuestionIndex, 1);
    setQuestions([...questions]);
    setActiveQuestion(null);
  };

  /**update question list when active question is modified */
  useEffect(() => {
    if (activeQuestion) {
      setQuestions((prev) =>
        prev.map((question) =>
          question.index === activeQuestion.index ? activeQuestion : question
        )
      );
    }
  }, [activeQuestion, setQuestions]);

  /** Create new question based question type */
  const addNewQuestion = (type = "text") => {
    switch (type) {
      case "text":
        addNewSetActive({
          ...textQuestion,
          details: { ...textQuestion.details },
          index: questions.length,
        });
        break;

      case "boolean":
        addNewSetActive({
          ...booleanQuestion,
          details: { ...booleanQuestion.details },
          index: questions.length,
        });
        break;

      case "number":
        addNewSetActive({
          ...numberQuestion,
          details: { ...numberQuestion.details },
          index: questions.length,
        });
        break;

      case "multipleChoice":
        addNewSetActive({
          ...multipleChoiceQuestion,
          details: {
            ...multipleChoiceQuestion.details,
            choices: [...multipleChoiceQuestion.details.choices],
          },
          index: questions.length,
        });
        break;
      default:
        break;
    }
  };

  /** Change order of the current question */
  const moveUpDown = (question, delta) => {
    const newQuestions = swapArrayItem(questions, question, delta);
    if (newQuestions) setQuestions(newQuestions);
  };

  return (
    <div className="flex flex-col  sm:flex-row w-full bg-slate-100 ">
      <ToolBar addNewQuestion={addNewQuestion} />
      <div className="flex flex-col w-full sm:flex-row">
        <div className="w-full sm:w-2/3 lg:w-3/4">
          <QuestionPanel
            addNewQuestion={addNewQuestion}
            questions={questions}
            moveUpDown={moveUpDown}
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            removeQuestion={removeQuestion}
          />
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <EditPanel
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            numberOfQuestions={questions.length}
          />
        </div>
      </div>
    </div>
  );
}
