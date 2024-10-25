import { useEffect, useState } from 'react';
import './recent-blogs.css';
import ShortBlog from '../short-blog/short-blog';
import * as data from '../../assets/blogs.json';

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl:string
}

const RecentBlogs: React.FC = () =>{

  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {

    const blogsArray: Blog[] = data['default'] as Blog[];
    const sortedData = blogsArray?.sort((a:any, b:any) => new Date(b.date).getDate() - new Date(a.date).getDate())
      .slice(0, 3);
      setBlogData(sortedData);
  }, []);

  return (
    <div className="my-8 p-8 md:p-2">
      <p className="title-sm-gray text-center">Blogs</p>
      <p className="title-lg text-center my-12">Recent Blogs</p>
    {blogData.length > 0 ? (
      <ul className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
        {blogData.map((item:Blog) => (
          <li key={item.id}>
            <ShortBlog key={item.id} data={item}></ShortBlog>
          </li>
        ))}
      </ul>
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  )
}
export default RecentBlogs;
