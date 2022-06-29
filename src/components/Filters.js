import StyledFilters from './styles/Filters.styled'


const Filters = ({handleSortByDateClick, handleSortByNameClick}) => {


    return (
        <StyledFilters>
            <button className="sort-date" onClick={handleSortByDateClick}>Sort by Date</button>
            <button className="sort-name" onClick={handleSortByNameClick}>Sort by Name</button>
        </StyledFilters>
    )
}

export default Filters