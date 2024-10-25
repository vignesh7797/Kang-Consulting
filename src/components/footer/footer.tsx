import './footer.css';
import rectLogo from '../../assets/logo-rect.svg';
import fbLogo from '../../assets/fb.svg';
import instaLogo from '../../assets/insta.svg';
import xlogo from '../../assets/twt.svg';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="brand-footer">
          <img src={rectLogo} alt="Kang Consult" width="240" />
          <p className="mt-8 text-gray w-full md:w-3/5">
            Professional guidance designed to meet your business needs,
            promoting growth and innovation.
          </p>
          <div className="subscribe">
            <h6>Subscribe Us</h6>
            <div className="social-media">
              <a href="/" className="social-item">
                <img src={fbLogo} alt="Facebook" />
              </a>
              <a href="/" className="social-item">
                <img src={instaLogo} alt="Facebook" />
              </a>
              <a href="/" className="social-item">
                <img src={xlogo} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="link-footer">
          <h6>Quick Links</h6>
          <ul className="mt-2">
            <li className="quick-link">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active link' : 'link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="quick-link">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'active link' : 'link'
                }
              >
                Services
              </NavLink>
            </li>
            <li className="quick-link">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active link' : 'link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="quick-link">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? 'active link' : 'link'
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="quick-link">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'active link' : 'link'
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="subscribe-footer">
          <h6>Subscribe for our newsletter</h6>

          <form action="">
            <div className="form-grp">
              <input
                className="form-input"
                type="email"
                required
                placeholder="your email"
              />
              <button className="form-btn">Subscribe</button>
            </div>
          </form>

          <div className="contact-footer">
            <div className="col-span-2 md:row-span-2">
              <p className="text-white font-bold">Address</p>
              <p className="text-gray mt-4">
                212 E International Airport Rd <br />
                Anchorage, Alaska, <br />
                99518
              </p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <p className="text-white font-bold">Email</p>
              <a
                href="mailto:info@kangconsulting.com"
                className="text-gray mt-4 underline"
              >
                info@kangconsulting.com
              </a>
            </div>
            <div className="col-span-1 md:col-span-2">
              <p className="text-white font-bold">Phone</p>
              <a href="tel:+19876543210" className="text-gray mt-4 underline">
                +1 (907) 562-2511
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
          <p>Developed by 
            <a href="/">Kang Consulting</a>
            &nbsp; with 
            <span className="material-icons-outlined">
              favorite
            </span>
          </p>
      </div>
    </div>
  );
};
export default Footer;
