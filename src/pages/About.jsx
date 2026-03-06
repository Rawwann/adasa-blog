import data from "../data/adasa-data.json";
import Mission from "../features/about/Mission";
import Team from "../features/about/Team";
import Values from "../features/about/Values";
import ContactCTA from "../features/about/ContactCTA";

export default function About() {
  const uniqueAuthorsMap = new Map();
  data.posts.forEach((post) => {
    if (post.author && !uniqueAuthorsMap.has(post.author.name)) {
      uniqueAuthorsMap.set(post.author.name, post.author);
    }
  });
  const teamMembers = Array.from(uniqueAuthorsMap.values());

  return (
    <div className="min-h-screen pb-0">
      <Mission />
      <Values />
      <Team teamMembers={teamMembers} />
      <ContactCTA />
    </div>
  );
}
