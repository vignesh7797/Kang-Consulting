import { useEffect, useState } from 'react';
import './short-blog.css';
import { useNavigate } from 'react-router-dom';

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl:string
}

const ShortBlog: React.FC<{data:Blog}> = ({data}) =>{

  const [blog, setBlog] = useState<Blog>();
  const navigate = useNavigate();

  const goToSummary = () =>{
    navigate(`/blogs/${data.id}`, {state: {data}})
  }

  useEffect(() => {
    setBlog(data)
  }, []);

  return (
    <div>
      {blog ? (
        <div className="w-96 bg-white shadow group overflow-hidden">
          <div className="w-full h-72 overflow-hidden">
            <img className="w-full h-full group-hover:scale-110 transition-all duration-700" src={data.imageUrl} alt="" />
          </div>
          <div className="p-3">
            <p className="text-gray">{data.date}</p>
            <h4 className="mt-2 font-bold text-secondary text-xl">
              {data.title}
            </h4>
            <a onClick={goToSummary} className="readmore">Read more &nbsp;<span className="text-sm material-icons-outlined group-hover:ml-2 transition-all duration-500">east</span>
            </a>
          </div>
        </div>
      ) : (
        <p>No Data</p>
      )}
    </div>
  )
}
export default ShortBlog