import './App.css'
import Header from './components/header/header'
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router, Route, Routes }
    from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from './pages/service/service';
import Contacts from './pages/contacts/contacts';
import BlogSummary from './pages/blog-summary/blog-summary';
import Blogs from './pages/blog/blog';

AOS.init({
  easing: 'ease-in-sine',
  delay: 0,
  offset: 50,
  duration: 500,
});

const App: React.FC = () =>{

  return (
    <PrimeReactProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<BlogSummary />}></Route>
      </Routes>
    </Router>
      
    </PrimeReactProvider>
  )
}

export default App
