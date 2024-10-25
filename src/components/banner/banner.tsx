import { NavLink } from 'react-router-dom';
import './banner.css'

const Banner:React.FC = ({title, subTitle, desc, img, btnLabel='Know More', btnRoute='/about'}) =>{
  return(
    <div className="banner">
        <div data-aos="fade-left" className="banner-content">
          <p className="title-sm">
             {title}
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-4 lg:mt-8">
             {subTitle}
          </p>
          <p className="text-gray my-4">
            
            {desc}
          </p>

          {
            btnLabel ? (
              <NavLink className="navBtn" to={btnRoute} >
                {btnLabel}
              </NavLink>
            ) : 
            (
              <></>
            )
          }
        </div>
        <div data-aos="fade-right" className="banner-image" style={{backgroundImage:`url("${img}")`}}></div>
      </div>
  )
}
export default Banner;