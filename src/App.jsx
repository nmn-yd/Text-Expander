import { useState } from "react";

export default function App() {
  return (
    <div className="main-container">
      <TextExtractor>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. Its the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of whats possible.
      </TextExtractor>

      <TextExtractor
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while its not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExtractor>
      <TextExtractor>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we will
        discover next!
      </TextExtractor>
    </div>
  );
}

function TextExtractor({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#8CD867",
  expanded = false,
  className = "box",
  children,
}) {
  const styles = {
    color: buttonColor,
  };

  const [isExpanded, setIsExpanded] = useState(expanded);

  const showText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  return (
    <div className={`content ${className}`}>
      <span>{showText}</span>
      <button style={styles} onClick={() => setIsExpanded((ex) => !ex)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
