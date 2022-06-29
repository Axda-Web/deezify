import styled from "styled-components";

const StyledSongs = styled.article`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 5px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.body};

    .container {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;


        .play-icon {
            margin: 0 10px;
            font-size: 2rem;
        }
    }
`

export default StyledSongs