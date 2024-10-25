import Accordion from '../accodion/accodion';
import AccordionTab from '../accordion-tab/accordion-tab';
import './faq.css';

const FAQ:React.FC = () =>{
  return (
    <div className="faq-container">
      <p className="title-sm text-primary text-center">FAQ</p>
      <p className="title-lg text-white text-center">
          Frequently asked question
      </p>

      <div className="w-full my-12">
      <Accordion activeIndex={-1}>
        <AccordionTab header='What types of businesses do you specialize in consulting?'>
            We offer consulting services for businesses across a wide range of industries, including technology, finance, healthcare, retail, and manufacturing. Whether you’re a startup, small business, or large corporation, we tailor our approach to meet your specific needs and goals.
        </AccordionTab>
        <AccordionTab header='How can business consulting help my company grow?'>
            Business consulting provides expert insights and strategies to improve your operations, boost efficiency, and increase profitability. We work with you to identify key areas for growth, streamline processes, and develop a comprehensive roadmap to help you achieve your business objectives.
        </AccordionTab>
        <AccordionTab header='What is your consulting process like?'>
            Our process starts with an initial consultation where we understand your business challenges and goals. From there, we conduct a thorough analysis of your current operations, identify opportunities for improvement, and provide actionable recommendations. We work closely with you throughout implementation to ensure success.  
        </AccordionTab>
        <AccordionTab header='How long does a typical consulting engagement last?'>
            The duration of a consulting engagement depends on the scope and complexity of the project. Some short-term engagements may last a few weeks, while more in-depth consulting projects can extend over several months. We always strive to work efficiently while ensuring comprehensive results.  
        </AccordionTab>
        <AccordionTab header='What sets your consulting services apart from others?'>
            Our consulting services are distinguished by a personalized, data-driven approach. We don’t offer one-size-fits-all solutions; instead, we tailor our strategies to your unique business needs. Our team consists of experienced consultants who bring deep industry expertise and a track record of proven results. 
        </AccordionTab>
      </Accordion>
      </div>
    </div>
  )
}
export default FAQ;