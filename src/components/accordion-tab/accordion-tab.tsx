import { useEffect } from 'react';
import './accordion-tab.css';
interface AccordionTabProps{
  children: React.ReactNode;
  tabIndex?: number;
  header?: string;
  isActive?:boolean;
  onSelect: (index?:number) => void;
}

const AccordionTab:React.FC<AccordionTabProps> = ({children, header, tabIndex, onSelect, isActive}) =>{
  const onSelectTab = () =>{
    onSelect(isActive ? -1 : tabIndex);
  }
  useEffect(() =>{

  })
  return (
    <div className="accordionTab-wrapper">
      <div className="accordionTab-header" onClick={onSelectTab}>
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