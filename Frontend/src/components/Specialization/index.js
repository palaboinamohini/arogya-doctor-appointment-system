import './index.css'

const Specialization = props => {
    const {details,clickItem,isActive} = props
    const {specializationId,displayText} = details
    const onClickSpecializationBtn = () => (
        clickItem(specializationId)
    )
    const activeSpecialBtn = isActive ? "active-btn":""
    return (
        <li className='special-item-container'>
            <button type="button" className={`special-btn ${activeSpecialBtn}`} onClick={onClickSpecializationBtn}>{displayText}</button>
        </li>
    )
}

export default Specialization
