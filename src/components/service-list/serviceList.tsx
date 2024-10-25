import { NavLink } from "react-router-dom";
import './serviceList.css';

const ServiceList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <NavLink to={''} className="service-item group" data-aos="fade-down" data-aos-delay="0">
            <p>
              <span className="service-item-icon material-icons">verified_user</span>
            </p>
            <p className="service-item-title">Business Website Audit</p>
            <p className="service-item-content">Fusce ultrices erat ac dui viverra, eu dignissim mauris dignissim</p>

            <button className="service-item-btn">
              Details 
              <span className="material-icons">
                arrow_forward
                </span>
            </button>
          </NavLink>

          <NavLink to={''} className="service-item group" data-aos="fade-down" data-aos-delay="100">
            <p>
            <span className="service-item-icon material-icons-sharp">insert_chart</span>
            </p>
            <p className="service-item-title">Business Website Audit</p>
            <p className="service-item-content">Fusce ultrices erat ac dui viverra, eu dignissim mauris dignissim</p>

            <button className="service-item-btn">
              Details 
              <span className="material-icons">
                arrow_forward
                </span>
            </button>
          </NavLink>


          <NavLink to={''} className="service-item group" data-aos="fade-down" data-aos-delay="100">
            <p>
            <span className="service-item-icon material-icons-sharp">data_exploration</span>
            </p>
            <p className="service-item-title">Business Website Audit</p>
            <p className="service-item-content">Fusce ultrices erat ac dui viverra, eu dignissim mauris dignissim</p>

            <button className="service-item-btn">
              Details 
              <span className="material-icons">
                arrow_forward
                </span>
            </button>
          </NavLink>

        </div>
  )
}
export default ServiceList;