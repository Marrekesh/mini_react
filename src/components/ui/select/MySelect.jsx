import './MySelect.css'
const MySelect = ({options, defaultOption, value, onChange}) => {

    return (
        <select
            className="select"
            style={{marginBottom: '15px'}}
            value={value}
            onChange={e => onChange(e.target.value)}
            >
            <option disabled value="">{defaultOption}</option>
            {options.map(item => {
               
               return <option key={item.value} value={item.value}>
                    {item.name}
                </option>  
            })}
        </select>
    )

}

export default MySelect