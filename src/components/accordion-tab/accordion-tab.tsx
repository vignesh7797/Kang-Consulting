import { useEffect } from 'react';
import './accordion-tab.css';
interface AccordionTabProps{
  children: React.ReactNode;
  index?: number;
  header?: string;
  isActive?:boolean;
  onTabClick?: (index:number) => void ;
}

const AccordionTab:React.FC<AccordionTabProps> = ({children, header, onTabClick, index, isActive}) =>{
  const handleClick = () => {
    if (onTabClick && index !== undefined) {
      onTabClick(index);
    }
  };
  useEffect(() =>{

  })
  return (
    <div className="accordionTab-wrapper">
      <div className="accordionTab-header" onClick={handleClick}>
        {header}
        {isActive ? (
          <span className="material-icons">remove</span>
        ) : (
          <span className="material-icons">add</span>
        )}
      </div>

      <div id="content" className={`accordionTab-content ${isActive ? 'open' : ''}`}>
        {children}
      </div>
      

    </div>
  )
}
export default AccordionTab;