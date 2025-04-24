export interface WorkExperienceProps {
  title: string;
  company: string;
  location?: string;
  startYear: string;
  endYear: string;
  description?: string[];
}

export default function WorkExperience({
  title,
  company,
  location,
  startYear,
  endYear,
  description,
}: WorkExperienceProps) {
  return (
    <>
      <h4 className="font-semibold">
        {`${title} (${startYear}-${endYear}) - ${company}, ${location}`}
      </h4>
      <p>
        {description && (
          <ul className="list-disc text-primary pl-4">
            {description.map((str, index) => (
              <li key={index}>{str}</li>
            ))}
          </ul>
        )}
      </p>
    </>
  );
}
