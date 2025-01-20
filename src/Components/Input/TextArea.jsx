import { Textarea } from "@nextui-org/react";
import React from "react";

function UITextArea({ placeholder, startContent, onChange, isRequired, type, value }) {
  return (
    <div>
      {" "}
      <Textarea
        sClearable={true}
        //   className=" w-full"
        radius="sm"
        size="md"
        type={type}
        isRequired={isRequired}
        value={value}
        onChange={onChange}minRows={20}        startContent={startContent}
        classNames={{
          label: "text-white/90 text-xl pt-3",
          input: [
            "bg-transparent",
            "text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "m",
            "shadow-xl",
            "bg-gray-600",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder={placeholder}
      />
    </div>
  );
}

export default UITextArea;
