import './blog.css';
import * as data from '../../assets/blogs.json';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import ShortBlog from '../../components/short-blog/short-blog';


interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl:string
}

const Blogs: React.FC = () =>{

  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [recentBlog, setRecentBLog] = useState<Blog>();

  useEffect(() => {
    const blogsArray: Blog[] = data['default'] as Blog[];
    const sortedData = blogsArray?.sort((a:any, b:any) => new Date(b.date).getDate() - new Date(a.date).getDate())
      setBlogData(sortedData);
      setRecentBLog(sortedData[0]);
  }, []);

  return (
    <div className="blog-container">
      <section>
        {recentBlog ? (
          <Banner
          title={'Blogs'}
          subTitle={'The Value of Business Consulting:'}
          desc={"Participate in Kang Consulting's webinar, 'Harnessing Data Analytics for Business Growth,' to explore how data visualization, predictive analytics, and performance measurement can enhance your business success. Acquire practical insights and hands-on experience from expert James Turner."}
          img={"https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"}
          btnLabel={'Know More'}
          btnRoute={'/blogs/'+recentBlog.id}
        ></Banner>
        ) : (
          <h1>
            No Data
          </h1>
        ) }
      </section>
      
      <section>
        <div className="blogList-container">
          {blogData.length > 0 ? (
            <div className="blogList">
              {blogData.map((blog:Blog) =>(
                <ShortBlog key={blog.id} data={blog}></ShortBlog>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>

      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}
export default Blogs