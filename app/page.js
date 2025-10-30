import ProfileOverview from "./components/ProfileOverview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <>
      <ProfileOverview />
      <WorkExperience />
      {/* <Projects /> */}
      <Skills />
      <ContactForm />
    </>
  );
}
