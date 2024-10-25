import React, { ReactNode, useState } from "react";
import './accodion.css';

interface AccodrionProps {
  activeIndex?:number;
  children:ReactNode;
}

const Accordion:React.FC<AccodrionProps> = ({activeIndex = -1, children}) => {
  const tabsList = React.Children.toArray(children);

  const [activeTab, setActiveTab] = useState(activeIndex);

  const onSelectTab = (e:number) =>{
    setActiveTab(e);
  }

  return(
    <div className="accordion-wrapper">
      {tabsList.map((tab, index) => (
        <div key={index}>
          {React.isValidElement(tab) && React.cloneElement(tab,  { onSelect: onSelectTab, tabIndex:index, isActive:index == activeTab })}
        </div>
      ))}
    </div>
  )
}
export default Accordion;