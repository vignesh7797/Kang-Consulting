import './service.css';
import Banner from '../../components/banner/banner';
import { NavLink } from 'react-router-dom';
import ServiceList from '../../components/service-list/serviceList';
import RecentBlogs from '../../components/recent-blogs/recent-blogs';
import Brands from '../../components/brands/brands';
import Footer from '../../components/footer/footer';

const Service:React.FC = () =>{
  return (
    <div className="services-container">
      <section>
        <Banner
          head={'Service'}
          subTitle={'Discover how our services can enhance your business potential.'}
          desc={
            'Unlock new opportunities and achieve greater success with our expert services.'
          }
          img={'https://cdn.pixabay.com/photo/2020/12/18/19/27/team-5842784_1280.jpg'}
          btnLabel={'Know More'}
          btnRoute={'/about'}
        ></Banner>
      </section>

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

      <section className="bg-sec-dark flex flex-col p-8  items-center justify-center" data-aos="fade-top">
        <p className="title-lg text-white text-center md:w-4/5 lg:w-3/5">
          Want to know more? Contact with our business consultant
        </p>
        <NavLink
            className="navBtn"
            to={'/contact'}
          >
            {'Get in Touch'}
          </NavLink>
      </section>

      <section>
        <div className="solutions-container">
          <div data-aos="fade-left" className="solutions-banner">
            
          </div>

          <div data-aos="fade-right" className="solutions-content">
            <p className="title-sm text-sec-light">Solution</p>
            <p className="title-lg text-sec-dark my-8">
              Advanced Solutions for Contemporary Enterprises
            </p>
            <p className="text-sec-light">
              Offering innovative strategies and advanced solutions to foster
              success in the ever-changing business landscape. Empowering
              contemporary enterprises with the tools to remain competitive.
            </p>
            <NavLink
              className="navBtn"
              to="/about"
            >
              Know More
            </NavLink>
          </div>
          
        </div>
      </section>

      <section data-aos="fade-bottom">
        <Brands></Brands>
      </section>

      <section data-aos="fade-top">
        <RecentBlogs></RecentBlogs>
      </section>

      <section data-aos="fade-top">
        <Footer></Footer>
      </section>

    </div>
  )
}
export default Service;