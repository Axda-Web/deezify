import StyledSearchInput from './styles/SearchInput.styled'

import { FaSearch } from 'react-icons/fa'


const SearchInput = ({ handleSearchChange, searchKeyword }) => {


    return (
        <StyledSearchInput className='search'>
            <FaSearch className='search__icon' />
            <input  id="search"
                    type="search"
                    className="search__input"
                    placeholder="Search for albums..."
                    aria-label="Search for albums..."
                    value={searchKeyword}
                    onChange={handleSearchChange} />
        </StyledSearchInput>
    )
}

export default SearchInput