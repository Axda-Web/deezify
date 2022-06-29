import styled from "styled-components";

const StyledAlbumCard = styled.article`

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:    'album-cover album-name'
                            'album-cover artist-name'
                            'album-cover released-date'
                ;

    .img-container {
        grid-area: album-cover;

        img {
            display: block;
            max-width: 100%;
            object-fit: cover;
            height: auto;
        }
    }

    .album-name {
        grid-area: album-name;
        font-weight: 700;
        align-self: end;
        margin: 1em 1em 0;
    }

    .artist-name {
        grid-area: artist-name;
        align-self: start;
        font-size: .75rem;
        margin: .2rem 1rem 1rem;
    }

    .released-date {
        grid-area: released-date;
        font-size: .875rem;
        font-weight: 700;
        margin: 0 1rem 1rem;
        display: flex;
        justify-content: space-between;

        .date {
            font-weight: 300;
        }
    }
`

export default StyledAlbumCard