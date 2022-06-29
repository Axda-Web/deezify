import StyledHeader from './styles/Header.styled'

import { SiApplemusic } from 'react-icons/si'

import SearchInput from './SearchInput'


const Header = ({ handleSearchChange, searchKeyword }) => {


    return (
        <StyledHeader>
            <div className="logo">Deezify <SiApplemusic /></div>
            <SearchInput handleSearchChange={handleSearchChange} searchKeyword={searchKeyword} />
            <div className="filters">
                <button className="sort-date">Sort by Date</button>
                <button className="sort-name">Sort by Name</button>
            </div>
        </StyledHeader>
    )
}

export default Header