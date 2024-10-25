import Banner from '../../components/banner/banner';
import Brands from '../../components/brands/brands';
import FAQ from '../../components/faq/faq';
import Footer from '../../components/footer/footer';
import Progress from '../../components/progress/progress';
import RecentBlogs from '../../components/recent-blogs/recent-blogs';
import './about.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section>
        <Banner
          title={'About'}
          subTitle={'We support our clients in sustaining a focused vision.'}
          desc={
            'We deliver a strategic framework that keeps clients centered on their long-term goals.'
          }
          img={'https://cdn.pixabay.com/photo/2023/06/08/12/37/work-8049516_1280.jpg'}
          btnLabel={'Get In Touch'}
          btnRoute={'/contact'}
        ></Banner>
      </section>

      <section className="consulting">
          <p className="title-sm-gray text-center">Consulting</p>
          <p className="title-lg text-center">
            Empowering your business to expand and thrive
          </p>

          <div className="flex flex-col md:flex-row">
            <div className="consult-item" data-aos="fade-left" data-aos-delay="0">
              <p className="consult-item-logo">
              <span className="material-icons">
                business_center
              </span>
              </p>  
              <p className="consult-item-title">
                Our Expertise
              </p>
              <p className="consult-item-desc">
              We offer specialized knowledge and skills in delivering innovative solutions tailored to your business needs, ensuring optimal results and growth.
              </p>
            </div>

            <div className="consult-item" data-aos="fade-left" data-aos-delay="200">
              <p className="consult-item-logo">
              <span className="material-icons">
                campaign
              </span>
              </p>  
              <p className="consult-item-title">
                Our Approach
              </p>
              <p className="consult-item-desc">
                We integrate strategic planning with active implementation, prioritizing teamwork and adaptability to successfully achieve your objectives.
              </p>
            </div>

            <div className="consult-item" data-aos="fade-left" data-aos-delay="400">
              <p className="consult-item-logo">
              <span className="material-icons-outlined">
              language
              </span>
              </p>  
              <p className="consult-item-title">
                Where We Operate
              </p>
              <p className="consult-item-desc">
              Our global reach allows us to provide exceptional consulting services in various regions, focusing on achieving meaningful results for clients everywhere.
              </p>
            </div>
          </div>
      </section>

      <section className="business-level" data-aos="fade-top">
        <div className="business-banner"></div>
        <div className="business-contant">
          <p className="title-sm-gray">Business Level</p>
          <p className="title-lg text-secondary">
            Take your small business to the next stage of achievement
          </p>
          <p className="my-3 text-gray font-bold">
            Unlock new opportunities and drive sustainable growth for your small business.
          </p>
          <Progress percent={50} label={'Client Satisfaction'}></Progress>
          <Progress percent={60} label={'Project Success Rate'}></Progress>
          <Progress percent={60} label={'Client Retention Ratio'}></Progress>
        </div>
      </section>

      <section>
        <Banner
          title={'Solution'}
          subTitle={'Leading-Edge Solutions for Modern Enterprises'}
          desc={
            'Offering cutting-edge strategies and sophisticated solutions to achieve success in the ever-changing business landscape. Empowering contemporary enterprises with the tools to lead the way.'
          }
          img={'https://cdn.pixabay.com/photo/2015/08/11/23/13/employees-885338_1280.jpg'}
          btnLabel={'Get In Touch'}
          btnRoute={'/contact'}
        ></Banner>
      </section>

      <section data-aos="fade-bottom">
        <FAQ></FAQ>
      </section>

      <section data-aos="fade-top">
        <RecentBlogs></RecentBlogs>
      </section>

      <section data-aos="fade-bottom">
        <Brands></Brands>
      </section>

      <section data-aos="fade-top">
        <Footer></Footer>
      </section>
    </div>
  );
}
export default About;
