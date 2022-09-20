import { ToolTip } from "../../shared";
export default function ToolBar({ addNewQuestion }) {
  return (
    <div className="flex flex-row sticky top-0 bg-white opacity-70 sm:opacity-100  sm:bg-transparent sm:flex-col gap-2 p-3">
      <ToolTip placement={"right"} content="Text">
        <div
          onClick={() => addNewQuestion("text")}
          className="bg-green-700 rounded-full flex items-center p-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </ToolTip>
      <ToolTip placement={"right"} content="Boolean">
        <div
          onClick={() => addNewQuestion("boolean")}
          className="bg-green-700 rounded-full flex items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>
      </ToolTip>
      <ToolTip placement={"right"} content="Multiple Choice">
        <div
          onClick={() => addNewQuestion("multipleChoice")}
          className="bg-green-700 p-2 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </ToolTip>
      <ToolTip placement={"right"} content="Number">
        <div
          onClick={() => addNewQuestion("number")}
          className="bg-green-700 p-2 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
      </ToolTip>
    </div>
  );
}
