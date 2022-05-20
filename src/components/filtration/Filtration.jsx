import MyInput from '../ui/input/MyInput'
import MySelect from '../ui/select/MySelect'

const Filtration = ({filter, setFilter}) => {

    return (

        <>
            <MySelect
                value={filter.selected}
                onChange={name => setFilter({...filter, selected: name})} 
                defaultOption='Сортировка'
                options={[
                    {value: 'userId', name: 'По имени'},
                    {value: 'title', name: 'По описанию'}
                ]}
            />
            <MyInput
                value={filter.filtration}
                onChange={e => setFilter({...filter, filtration: e.target.value})}
                type='text' 
                placeholder='Search'
            />
        </>


    )
}

export default Filtration