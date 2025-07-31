import { useState } from "react";

const ExpandableText = () => {
  const [expanded, setExpanded] = useState(false);

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis soluta quasi amet totam unde doloremque, accusamus, perspiciatis, laborum quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis soluta quasi amet totam unde doloremque, accusamus, perspiciatis, laborum quae.";

  const shortText = text.substring(0, 100) + "...";

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div>
      <p>{expanded ? text : shortText}</p>
      <button onClick={toggleExpand}>
        {expanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;