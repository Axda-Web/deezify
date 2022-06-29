import StyledAlbumsContainer from './styles/AlbumsContainer.styled'

import AlbumDetails  from './AlbumDetails'
import AlbumCard from './AlbumCard'


const AlbumsContainer = ({ albumsData, filteredAlbumsData, showAlbumDetails }) => {

    const dataToDisplay = filteredAlbumsData.length > 0 ? filteredAlbumsData : albumsData
    const cards = dataToDisplay.map( albumData => <AlbumCard key={albumData.id} albumData={albumData} /> )


    return (
        <StyledAlbumsContainer>
            { showAlbumDetails ? <AlbumDetails /> : cards }
        </StyledAlbumsContainer>
    )
}

export default AlbumsContainer