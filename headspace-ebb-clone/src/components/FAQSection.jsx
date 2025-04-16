import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-headspace-light-orange">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-headspace-dark-blue mb-16">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-xl overflow-hidden border-none shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-headspace-dark-blue font-bold text-lg hover:no-underline">
              What is Elivia?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-headspace-dark-blue">
              Elivia is an empathetic conversational AI chatbot that helps members actively self-reflect. Regular self-reflection can be a tool for mental and emotional health. With the guidance of Elivia, members will have a space within the Docure.ai app to pause, reflect, and sort out their thoughts. Members can also receive recommendations for relevant content, helpful exercises and activities based on what they share with Elivia. Elivia draws from Docure.ai content to make personalized, tailored recommendations to Docure.ai members.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-xl overflow-hidden border-none shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-headspace-dark-blue font-bold text-lg hover:no-underline">
              Who can use Elivia?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-headspace-dark-blue">
              At this time, Elivia is available to all Docure.ai subscribers based in the United States, United Kingdom, Australia, and Canada. Elivia is only for individuals aged 18 and up. Elivia is only available in English. We are currently working to mindfully deploy access to Elivia to our members that access Docure.ai through their employers, health plan, and navigation partners.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-xl overflow-hidden border-none shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-headspace-dark-blue font-bold text-lg hover:no-underline">
              Is my information shared with Elivia?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-headspace-dark-blue">
              All messages to Elivia are encrypted and no reflections are shared with unauthorized third parties, nor are they used for targeted advertising purposes. If you have a care team through Docure.ai, information that you enter into Elivia is not shared with them, unless you elect to share this information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-xl overflow-hidden border-none shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-headspace-dark-blue font-bold text-lg hover:no-underline">
              I can't see Elivia in my Docure.ai app, why is that?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-headspace-dark-blue">
              Elivia is available to those that are based in the United States, United Kingdom, Canada, and Australia, and use the English version of Docure.ai . If you have access to Docure.ai through your employer, health plan, or navigation partner, Elivia may not be available to you yet. We're working on mindfully deploying Elivia to all members.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-xl overflow-hidden border-none shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-headspace-dark-blue font-bold text-lg hover:no-underline">
              Can Elivia replace my therapist or mental health coach?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-headspace-dark-blue">
              No, Elivia is not a substitute for human care. Elivia does not provide clinical mental health services and is not monitored in real time by a human. If you need support for a mental health condition, please talk with a licensed provider. Elivia is designed to be a complementary tool in your mental health toolkit, helping you develop self-reflection habits and mindfulness practices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
