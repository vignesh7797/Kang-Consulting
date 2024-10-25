import Banner from '../../components/banner/banner';
import Brands from '../../components/brands/brands';
import Footer from '../../components/footer/footer';
import RecentBlogs from '../../components/recent-blogs/recent-blogs';
import './blog-summary.css';
import { useLocation } from 'react-router-dom';
import fbLogo from '../../assets/fb.svg';
import linkedLogo from '../../assets/linked.svg';
import xlogo from '../../assets/twt.svg';
import { useEffect } from 'react';

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl:string
}
const BlogSummary: React.FC = () =>{

  const location = useLocation();
  const data = location.state?.data as Blog

  useEffect(() =>{
    window.scrollTo(0, 0);
  })

  return(
    <div className="summary-container">
      <section>
      {data ? (
          <Banner
          head={'Blogs'}
          subTitle={data.title}
          desc={""}
          img={"https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"}
        ></Banner>
        ) : (
          <h1>
            No Data
          </h1>
        ) }
      </section>

      <section>
        {data ? (
          <div className="summary-content">
              <div className="share-group">
                <button className="share-logo">
                    <span className="material-icons-sharp">
                      share
                    </span>
                </button>
                
                <a href="/" className="share-item">
                  <img src={linkedLogo} alt="Facebook" />
                </a>
                <a href="/" className="share-item">
                <img src={fbLogo} alt="Facebook" />
                </a>
                <a href="/" className="share-item">
                  <img src={xlogo} alt="Facebook" />
                </a>
              </div>
              <p dangerouslySetInnerHTML={{__html : data.description}}></p>
          </div>
        ) : (
          <p> No Data Found..</p>
        )}
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
  )
}

export default BlogSummary;