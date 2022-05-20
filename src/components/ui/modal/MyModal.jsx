import './MyModal.css'

const MyModal = ({children, visible, setVisible}) => {

    const visibleClass = visible ? 'modal modal_active' : 'modal'
    
    return (
        <div className={visibleClass} onClick={() => setVisible(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal