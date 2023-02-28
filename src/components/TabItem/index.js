import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const isActiveTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItems = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveTabClassName}`}
        onClick={onClickTabItems}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
