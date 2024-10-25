import './brands.css';

const Brands: React.FC = () =>{
  return(
    <div className="bg-white w-full p-10 md:p-20 flex flex-wrap justify-evenly items-center gap-x-32 gap-y-20" >
      <img src="https://img.logoipsum.com/323.svg" alt="" />
      <img src="https://img.logoipsum.com/311.svg" alt="" />
      <img src="https://img.logoipsum.com/325.svg" alt="" />
      <img src="https://img.logoipsum.com/213.svg" alt="" />
    </div>
  )
}
export default Brands;