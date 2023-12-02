import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="accessed-time">{timeAccessed}</p>
      <div className="history-details-container">
        <div className="website-details-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="domain-details">
            <p className="company-name">{title}</p>
            <p className="company-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onDeleteHistory}
          className="delete-button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
