import './advice.css';

const Advice: React.FC = () => {
  return (
    <div className="advice-container">
      <div className="advice-banner"></div>
      <div className="advice-content">
        <p className="title-sm" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">Advice</p>
        <p className="title-lg text-white" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
          Targeted Approaches for Financial Success and Expansion
        </p>

        <div className="advice-item" data-aos="fade-up" data-aos-delay="0">
          <p className="advice-item-icon">
            <span className="material-icons-outlined">arrow_circle_right</span>
          </p>
          <div>
            <p className="advice-item-title">Strategic Planning for Expansion</p>
            <p className="advice-item-content">Personalized approaches to improve your business's financial results</p>
          </div>
        </div>

        <div className="advice-item" data-aos="fade-up" data-aos-delay="150">
          <p className="advice-item-icon">
            <span className="material-icons-outlined">arrow_circle_right</span>
          </p>
          <div>
            <p className="advice-item-title">Specialized Financial Analysis</p>
            <p className="advice-item-content">Receive detailed analysis and guidance from sector specialists.</p>
          </div>
        </div>

        <div className="advice-item" data-aos="fade-up" data-aos-delay="300">
          <p className="advice-item-icon">
            <span className="material-icons-outlined">arrow_circle_right</span>
          </p>
          <div>
            <p className="advice-item-title">Enhanced Investment Approaches</p>
            <p className="advice-item-content">Specialized investment guidance to optimize returns while minimizing risks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advice;
