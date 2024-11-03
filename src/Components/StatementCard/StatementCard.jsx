import React, { useState, useEffect } from "react";
import { useDisclosure } from "@nextui-org/react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import StatementModal from "./StatementModal";

const StatementCard = ({ statement }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [textLimit, setTextLimit] = useState(920);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setTextLimit(screenWidth < 640 ? 250 : 920);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="relative bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 shadow-lg rounded-lg overflow-hidden p-4 m-6 md:p-6 md:m-8 cursor-pointer"
        onClick={onOpen}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            rx="8"
            ry="8"
            className="line"
            height="100%"
            width="100%"
            strokeLinejoin="round"
            style={{
              fill: "none",
              stroke: "#4a5568",
              strokeWidth: 2,
              strokeDasharray: 510,
              animation: "svgAnimation 5s linear infinite",
            }}
          />
        </svg>
        <div className="flex relative items-center">
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white">
              {statement.title}
            </h3>
            {/* <p className="text-gray-300">{statement.description.slice(0,textLimit) + "     ....."}</p> */}
            <MarkdownEditor.Markdown
              source={statement.description.slice(0, textLimit) + " ...."}
            />
          </div>
        </div>
      </div>
      <StatementModal
        statement={statement}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default StatementCard;
