import {
  Nav,
  Hero,
  PainPoints,
  SolutionFlow,
  Outcomes,
  UseCases,
  LeadFormSection,
  Faq,
  FinalCta,
  Footer,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <SolutionFlow />
        <Outcomes />
        <UseCases />
        <LeadFormSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
