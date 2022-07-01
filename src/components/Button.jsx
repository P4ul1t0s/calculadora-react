import './Button.css'

export default p => {
    let classes = 'button '
    classes += p.operation ? 'operation' : ''
    classes += p.double ? 'double' : ''
    classes += p.triple ? 'triple' : ''

    return(
        <button 
            onClick={e => p.click && p.click(p.label)}
            className={classes}>
            {p.label}
        </button>
    )
}
    