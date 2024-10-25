import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

const Carousels:React.FC = () =>{
 return (
   <div className="carousel-container">
     <Carousel controls={false}>
          <CarouselItem>
            <div className="carosuel-item">
              <div className="carosuel-img"></div>
              <div className="carosuel-content">
                    <div className="title-lg">
                    Testimonials from Our Happy Clients
                    </div>
                    <p className="text-gray my-8">
                    Collaborating with Kang Consulting was pivotal for our healthcare practice. Their personalized strategies increased our operational efficiency and improved patient satisfaction.
                    </p>
                    <p className="font-bold">
                      Madhan Maddy
                    </p>
                    <p className="font-light text-gray">
                      CEO / Innovate Tech
                    </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carosuel-item">
              <div className="carosuel-img"></div>
              <div className="carosuel-content">
                    <div className="title-lg">
                    Testimonials from Our Happy Clients
                    </div>
                    <p className="text-gray my-8">
                    Collaborating with Kang Consulting was pivotal for our healthcare practice. Their personalized strategies increased our operational efficiency and improved patient satisfaction.
                    </p>
                    <p className="font-bold">
                      Madhan Maddy
                    </p>
                    <p className="font-light text-gray">
                      CEO / Innovate Tech
                    </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carosuel-item">
              <div className="carosuel-img"></div>
              <div className="carosuel-content">
                    <div className="title-lg">
                    Testimonials from Our Happy Clients
                    </div>
                    <p className="text-gray my-8">
                    Collaborating with Kang Consulting was pivotal for our healthcare practice. Their personalized strategies increased our operational efficiency and improved patient satisfaction.
                    </p>
                    <p className="font-bold">
                      Madhan Maddy
                    </p>
                    <p className="font-light text-gray">
                      CEO / Innovate Tech
                    </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carosuel-item">
              <div className="carosuel-img"></div>
              <div className="carosuel-content">
                    <div className="title-lg">
                    Testimonials from Our Happy Clients
                    </div>
                    <p className="text-gray my-8">
                    Collaborating with Kang Consulting was pivotal for our healthcare practice. Their personalized strategies increased our operational efficiency and improved patient satisfaction.
                    </p>
                    <p className="font-bold">
                      Madhan Maddy
                    </p>
                    <p className="font-light text-gray">
                      CEO / Innovate Tech
                    </p>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
   </div>
 )
}
export default Carousels