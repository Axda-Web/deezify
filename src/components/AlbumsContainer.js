import StyledAlbumsContainer from './styles/AlbumsContainer.styled'

import AlbumDetails  from './AlbumDetails'
import AlbumCard from './AlbumCard'


const AlbumsContainer = ({ albumsData, showDetails }) => {

    const cards = albumsData.map( albumData => <AlbumCard key={albumData.id} albumData={albumData} /> )


    return (
        <StyledAlbumsContainer>
            { showDetails ? <AlbumDetails /> : cards }
        </StyledAlbumsContainer>
    )
}

export default AlbumsContainer