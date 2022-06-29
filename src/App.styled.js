import styled from "styled-components";

const StyledApp = styled.div`
    width: 90%;
    max-width: 1110px;
    margin: 0 auto;
    overflow: ${({shoshowAlbumDetails}) => shoshowAlbumDetails ? 'hidden' : 'auto'};
`

export default StyledApp