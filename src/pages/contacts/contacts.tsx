import Banner from '../../components/banner/banner';
import ContactForm from '../../components/contact-form/contact-form';
import Footer from '../../components/footer/footer';
import './contacts.css';

const Contacts:React.FC = () =>{
  return (
    <div>
      <section>
        <Banner
          title={'Contact'}
          subTitle={'Always searching for improved solutions.'}
          desc={
            "Feel free to get in touch for questions, assistance, or to book a consultation. We're ready to support you."
          }
          img={'https://cdn.pixabay.com/photo/2016/03/27/16/24/holidays-1283014_1280.jpg'}
          btnLabel={'Know More'}
          btnRoute={'/about'}
        ></Banner>
      </section>

      <section data-aos="fade-bottom">
        <div className="bg-white p-8 md:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-8">
          <div className="contact-item">
            <span className="material-icons">
              location_on
            </span>
            <p className="contact-label">Address</p>
            <p className="contact-detail">
              4321, Kang Consulting,
              <br/>
              NewYork, United States,
              <br/>
              432034.
            </p>
          </div>

          <div className="contact-item">
            <span className="material-icons-sharp">
              mail
            </span>
            <p className="contact-label">Email</p>
            <a href="mailto:info@kangconsulting.com" className="contact-link">
              info@kangconsulting.com
            </a>
          </div>

          <div className="contact-item">
            <span className="material-icons-sharp">
              phone
            </span>
            <p className="contact-label">Phone</p>
            <a href="tel:+19876543210" className="contact-link">
              +1 9876543210
            </a>
          </div>

          <div className="contact-item">
            <span className="material-icons-sharp">
              watch_later
            </span>
            <p className="contact-label">Opening hours</p>
            <p className="contact-detail">
              Mon-Sat: 8 AM - 06 PM
              <br/>
              Sun: day off
            </p>
          </div>

        </div>
      </section>

      <section data-aos="fade-bottom">
        <ContactForm></ContactForm>
      </section>

      <section data-aos="fade-top">
        <Footer></Footer>
      </section>
    </div>
  )
}
export default Contacts