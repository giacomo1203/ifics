import React from "react";

interface SectionProps {
  title: string;
  image: string;
  text: string;
}

const Section: React.FC<SectionProps> = ({ title, image, text }) => {
  return (
    <section>
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: "100%", maxHeight: "300px" }} />
      <p>{text}</p>
    </section>
  );
};

export default Section;