import './progress.css'

const Progress: React.FC = ({percent = 80, label}) => {
  return (
    <div className="progress-container">
      <p className="progress-label">
        {label}
      </p>
      <div className="progress-track">
      <div className="progress-bar" style={{width:percent+'%'}}></div>
      <p className="progress-data">{percent}%</p>
      </div>
      
    </div>
  )
} 
export default Progress;