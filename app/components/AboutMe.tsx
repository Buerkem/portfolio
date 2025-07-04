type AboutMeProps = {
  paragraphs: string[];
};

const AboutMe: React.FC<AboutMeProps> = ({ paragraphs }) => (
  <div className="card p-4 md:p-6 pb-8">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    {paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className={`text-muted dark:text-muted-dark ${
          index !== paragraphs.length - 1 ? "mb-4" : ""
        }`}
      >
        {paragraph}
      </p>
    ))}
  </div>
);

export default AboutMe;
