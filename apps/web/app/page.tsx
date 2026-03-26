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
import { PageViewTracker } from "@/components/page-view-tracker";
import { FormViewedTracker } from "@/components/form-viewed-tracker";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

export default function HomePage() {
  return (
    <>
      <PageViewTracker />
      <FormViewedTracker formId="primary-lead-form" sectionId="lead-form" />
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
      <MobileStickyCta />
    </>
  );
}
