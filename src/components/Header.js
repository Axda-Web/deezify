import StyledHeader from './styles/Header.styled'

import { SiApplemusic } from 'react-icons/si'

import SearchInput from './SearchInput'
import Filters from './Filters'


const Header = ({ handleSearchChange, searchKeyword, handleSortByDateClick, handleSortByNameClick }) => {


    return (
        <StyledHeader>
            <div className="logo">Deezify <SiApplemusic /></div>
            <SearchInput    handleSearchChange={handleSearchChange}
                            searchKeyword={searchKeyword}
                        />
            <Filters    handleSortByDateClick={handleSortByDateClick}
                        handleSortByNameClick={handleSortByNameClick}
                    />
        </StyledHeader>
    )
}

export default Header