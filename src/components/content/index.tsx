import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CustomizedSearch from "./customizedSearch";

const Content: React.FC = () => {
  const textPrintRef = useRef(null);

  const handlePrintText = useReactToPrint({
    content: () => textPrintRef.current,
    documentTitle: "Info Text",
  });

  return (
    <div>
      <div ref={textPrintRef}>
        <h1>Info</h1>
        <CustomizedSearch/>
      </div>
      <button onClick={handlePrintText}>Print</button>
    </div>
  );
};

export default Content;
