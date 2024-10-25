import { useEffect } from 'react';
import './accordion-tab.css';
interface AccordionTabProps{
  children: React.ReactNode;
  tabIndex?: number;
  header?: string;
  isActive?:boolean;
  onSelectTab?: (index?:number) => {} ;
}

const AccordionTab:React.FC<AccordionTabProps> = ({children, header, onSelectTab, tabIndex, isActive}) =>{
  const onSelect= () =>{
    if(onSelectTab){
      onSelectTab(isActive ? -1 : tabIndex);
    }
  }
  useEffect(() =>{

  })
  return (
    <div className="accordionTab-wrapper">
      <div className="accordionTab-header" onClick={onSelect}>
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