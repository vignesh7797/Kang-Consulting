import './sectors.css';

const Sectors:React.FC = () =>{
  return (
    <div className="sector-container">
      <p className="title-sm-gray">Sectors</p>
      <p className="title-lg">Our Proficiency Across Multiple Economic Industries</p>
      <div className="sector-list">
      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">Technology</p>
        </div>
      </div>

      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">HealthCare</p>
        </div>
      </div>

      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">Financial Service</p>
        </div>
      </div>

      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">Manufacturing</p>
        </div>
      </div>

      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">Retail</p>
        </div>
      </div>

      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">Energy</p>
        </div>
      </div>

      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">Real Estate</p>
        </div>
      </div>

      <div className="sector-item">
        <div className="mask">
          <p className="sector-item-label">Education</p>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Sectors