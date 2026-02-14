import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a landmark to reach V1 Photography in Veeranam?",
    answer:
      "V1 Photography can be easily spotted right Near Mottur.",
  },
  {
    question: "At what time can I visit this studio?",
    answer:
      "V1 Photography is open between Monday–Saturday: 9:00 AM – 9:00 PM, and Sunday: Closed. You can come anytime during these recommended times.",
  },
  {
    question: "Will V1 Photography in Salem be able to photoshop my pictures if required?",
    answer:
      "V1 Photography is well equipped to handle all photography and studio needs. They will be happy to assist you with this after you discuss your requirements and expectations with them.",
  },
  {
    question: "Can V1 Photography email the final pictures instead of me coming to collect print copies?",
    answer:
      "Some photo studios provide digital copies, while some do not. Please confirm with V1 Photography before finalising anything.",
  },
  {
    question: "Can V1 Photography come to my venue to click pictures for an event?",
    answer:
      "This service may or may not be available at V1 Photography. Please confirm with them regarding this possibility and their availability.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-dark py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick answers about V1 Photography in Veeranam, Salem.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="glass-card divide-y divide-border rounded-xl overflow-hidden">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-0 px-6">
                <AccordionTrigger className="text-left font-heading tracking-wider text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
