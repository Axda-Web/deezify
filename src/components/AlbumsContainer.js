import StyledAlbumsContainer from './styles/AlbumsContainer.styled'

import AlbumCard from './AlbumCard'


const AlbumsContainer = ({ albumsData, filteredAlbumsData, handleAlbumCardClick }) => {

    const dataToDisplay = filteredAlbumsData.length > 0 ? filteredAlbumsData : albumsData
    const cards = dataToDisplay.map( albumData => <AlbumCard    key={albumData.id} 
                                                                albumData={albumData}
                                                                handleAlbumCardClick={handleAlbumCardClick}
                                                            /> )


    return (
        <StyledAlbumsContainer>
            {cards}
        </StyledAlbumsContainer>
    )
}

export default AlbumsContainer