import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import MarkdownEditor from "@uiw/react-markdown-editor";

const StatementModal = ({ statement, isOpen, onOpenChange }) => {
  return (
    <div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        placement="center"
        scrollBehavior="inside"
        size="5xl"
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#25162d]/70",
          base: "border-[#292f46] bg-[#0e0910] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {statement.title}
              </ModalHeader>
              <ModalBody>
                <MarkdownEditor.Markdown
                  source={statement.description}
                  className=" bg-transparent"
                  height="200px"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default StatementModal;
