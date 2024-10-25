import { NavLink } from 'react-router-dom';
import Banner from '../../components/banner/banner';
import './home.css';
import ServiceList from '../../components/service-list/serviceList';
import Advice from '../../components/advice/advice';
import Sectors from '../../components/sectors/sectors';
import Carousels from '../../components/carosuel/carosuel';
import RecentBlogs from '../../components/recent-blogs/recent-blogs';
import Brands from '../../components/brands/brands';
import Footer from '../../components/footer/footer';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Banner
        title={'Empower Your Brand'}
        subTitle={
          'Take Your Business to New Heights with Website Consulting Expertise'
        }
        desc={
          'Etiam convallis augue eget consequat imperdiet. Donec quis justo lorem. Phasellus scelerisque nisl quis dignissim rutrum. Phasellus et turpis lectus.'
        }
        img={'https://cdn.pixabay.com/photo/2020/12/18/19/27/team-5842784_1280.jpg'}
      ></Banner>

      <section className="service-container">
        <div className="service-wrapper">
        <p data-aos="fade-right" className="title-sm-gray">
          Business consulting
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 mb-8">
          <p data-aos="fade-right" className="title-lg">
            What services are available to support your business
          </p>

          <div data-aos="fade-left">
            <p className="text-sec-light mb-8">
              Explore how our personalized solutions can enhance your business.
              With our guidance from planning to support, we empower your path
              to success."
            </p>
            <NavLink className=" underline font-bold text-black" to="/services">
              Our Services
            </NavLink>
          </div>
        </div>

        <ServiceList></ServiceList>
        </div>
      </section>

      <section className="count-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div data-aos="fade-up" data-aos-delay="0">
            <p className="count-value">100+</p>
            <p className="count-label">Projects Completed</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="count-value">92%</p>
            <p className="count-label">Client Satisfaction</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="count-value">$50M+</p>
            <p className="count-label">Revenue Generated</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="count-value">95%</p>
            <p className="count-label">Project Success Rate</p>
          </div>
        </div>
      </section>

      <section>
        <Advice></Advice>
      </section>

      <section>
        <Sectors></Sectors>
      </section>

      <section>
        <div className="solution-container">
          <div data-aos="fade-left" className="solution-content">
            <p className="title-sm">Solution</p>
            <p className="title-lg text-white my-8">
              Advanced Solutions for Contemporary Enterprises
            </p>
            <p className="text-gray">
              Offering innovative strategies and advanced solutions to foster
              success in the ever-changing business landscape. Empowering
              contemporary enterprises with the tools to remain competitive.
            </p>
            <NavLink
              className="inline-block mt-8 bg-primary text-secondary text-lg font-semibold px-[2rem] py-[1rem]"
              to="/about"
            >
              Know More
            </NavLink>
          </div>
          <div data-aos="fade-right" className="solution-banner"></div>
        </div>
      </section>

      <section data-aos="fade-top">
        <Carousels></Carousels>
      </section>

      <section data-aos="fade-top">
        <RecentBlogs></RecentBlogs>
      </section>

      <section className="mt-12" data-aos="fade-bottom">
        <Brands></Brands>
      </section>

      <section data-aos="fade-top">
        <Footer></Footer>
      </section>
    </div>
  );
};
export default Home;
