import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

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
        <p>
          Nulla malesuada pellentesque elit eget gravida cum sociis natoque
          penatibus. Cursus turpis massa tincidunt dui ut ornare. Ornare aenean
          euismod elementum nisi. Vivamus at augue eget arcu. Sed faucibus
          turpis in eu mi bibendum. Elit ut aliquam purus sit amet luctus
          venenatis lectus. Vitae nunc sed velit dignissim. Pulvinar etiam non
          quam lacus suspendisse faucibus interdum posuere lorem.
        </p>
        <p>
          Integer enim neque volutpat ac tincidunt. Aenean vel elit scelerisque
          mauris pellentesque pulvinar pellentesque habitant. Malesuada proin
          libero nunc consequat interdum varius sit. At tempor commodo
          ullamcorper a lacus. Consequat id porta nibh venenatis cras sed.
          Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Quis
          vel eros donec ac odio. Ac felis donec et odio pellentesque diam
          volutpat commodo. Risus ultricies tristique nulla aliquet enim tortor.
          Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales.
          Mattis pellentesque id nibh tortor id.
        </p>
        <p>
          Aliquam vestibulum morbi blandit cursus. Mi proin sed libero enim sed
          faucibus turpis in eu. Cras sed felis eget velit aliquet sagittis id.
          Condimentum vitae sapien pellentesque habitant morbi tristique
          senectus et netus. Mi ipsum faucibus vitae aliquet nec ullamcorper.
          Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
          tortor. Arcu vitae elementum curabitur vitae nunc sed velit dignissim
          sodales. Massa tempor nec feugiat nisl pretium fusce id velit.
        </p>
      </div>
      <button onClick={handlePrintText}>Print</button>
    </div>
  );
};

export default Content;
