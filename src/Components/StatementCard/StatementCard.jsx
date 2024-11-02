import React,{useState, useEffect} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";


const StatementCard = ( {statement} ) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
    
    <div className="relative bg-zinc-800 shadow-lg rounded-lg overflow-hidden p-4 m-6 md:p-6 md:m-8">
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect
        rx="8"
        ry="8"
        className="line"
        height="100%"
        width="100%"
        strokeLinejoin="round"
        style={{
          fill: 'none',
          stroke: '#4a5568',
          strokeWidth: 2,
          strokeDasharray: 510,
          animation: 'svgAnimation 5s linear infinite',
        }}
      />
    </svg>
    <div className="flex relative items-center">
    <div className="relative z-10">
      <h3 className="text-xl font-semibold text-white cursor-pointer hover:underline" onClick={onOpen}>{statement.title}</h3>
      <p className="text-gray-300">{statement.description.slice(0,textLimit) + "     ....."}</p>
    </div>
    </div>
  </div>

  <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        placement="center"
        scrollBehavior="inside"
        size="md"
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
              <ModalHeader className="flex flex-col gap-1">{statement.title}</ModalHeader>
              <ModalBody>
                <p>{statement.description}</p>
              </ModalBody>
 
            </>
          )}
        </ModalContent>
      </Modal>
  </>
    
  );
};

export default StatementCard;
