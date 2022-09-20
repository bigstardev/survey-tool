import { Tooltip } from "flowbite-react";

export default function ToolTip({ content, placement, children }) {
  return (
    <Tooltip placement={placement} content={content}>
      {children}
    </Tooltip>
  );
}
