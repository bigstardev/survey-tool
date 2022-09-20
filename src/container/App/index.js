import { useState } from "react";
import Design from "../Design";
export default function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center font-bold text-3xl w-full py-4">
        Survery Creator
      </div>
      <Design questions={questions} setQuestions={setQuestions} />
    </div>
  );
}
