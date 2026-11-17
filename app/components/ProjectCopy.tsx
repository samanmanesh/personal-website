type ProjectCopyProps = {
  paragraphs: string[];
};

export default function ProjectCopy({ paragraphs }: ProjectCopyProps) {
  return (
    <div className="project-copy">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-base font-normal"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
}
