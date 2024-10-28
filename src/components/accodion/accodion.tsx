import React, { ReactElement, ReactNode, useState } from "react";
import './accodion.css';
import AccordionTab from "../accordion-tab/accordion-tab";

interface AccodrionProps {
  activeIndex?:number;
  children:ReactNode;
}

const Accordion:React.FC<AccodrionProps> = ({activeIndex = -1, children}) => {
  // const tabsList = React.Children.toArray(children);

  const [activeTab, setActiveTab] = useState(activeIndex);

  const handleTabClick = (index: number) => {
    if(index == activeTab){
      setActiveTab(-1)
    }else{
      setActiveTab(index)
    }
  };


  // const renderChildWithProps = (child: ReactElement<React.ComponentProps<typeof AccordionTab>>) => {
  //   return React.cloneElement(child, { onSelectTab: onSelectedTab(child.props) });
  // };

  return(
    <div className="accordion-wrapper">
      {/* {tabsList.map((tab, index) => ( */}
         {/* <div key={index}> */}
           {/* {React.isValidElement(tab) && React.cloneElement(tab, { onSelectTab: onSelectedTab(tab), tabIndex:index, isActive:index == activeTab })} */}
           {/* {renderChildWithProps(<AccordionTab children={tab} onSelectTab={onSelectedTab} tabIndex={index} isActive={index == activeTab} />)} */}
         {/* </div> */}
       {/* ))} */}

      {React.Children.map(children, (child, index) =>{
        if(React.isValidElement(child)){
          return React.cloneElement(child, {
            isActive: activeTab === index,
            index,
            onTabClick: handleTabClick,
          })
        }
      })}
    </div>
  )
}
export default Accordion;