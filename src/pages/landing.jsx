import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import faqs from "../data/faq.json";


const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Be The part of
          <span className="flex items-center gap-2 sm:gap-6">
            CodeBusters
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Unlock opportunities, grow with the community, and shape the future with us.
        </p>
      </section>
        
        <div className="flex gap-6 justify-center">
        <Link to={"/hire-listing"}>
          <Button variant="red" size="xl">
            Apply 
          </Button>
        </Link>
      </div>


      {/* <Carousel
        
      </Carousel> */}

      <img src="" className="w-full" alt="A poster"/>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            Apply to join the club, participate in tasks, and track your selection status.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Admins</CardTitle>
          </CardHeader>
          <CardContent>
            Review applications, schedule interviews, assign tasks, and manage the hiring process efficiently.
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;