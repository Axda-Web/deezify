import styled from "styled-components";

const StyledAlbumDetails = styled.article`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .8);
    overflow-y: auto;

    .modal {
        position: relative;
        max-height: 800px;
        overflow: auto;
        width: 90%;
        max-width: 700px;
        background-color: ${({theme}) => theme.bgColors.body};
        border-radius: 5px;
        padding: 70px 50px;


        .close-btn {
            position: absolute;
            cursor: pointer;
            font-size: 2rem;
            top: 20px;
            right: 20px;
        }

        header {
            display: grid;
            margin-bottom: 30px;
            grid-template-columns: 2fr 1fr;
            font-size: .875rem;
            column-gap: 50px;

            .artist-name {
                margin-bottom: .5em;
            }

            .album-name {
                font-size: 2rem;
                margin-bottom: 1em;
            }

            .info-track, .info-date {
                font-weight: 700;
            }

            .info-track {
                margin-right: 55px;
            }

            .info-date {
                margin-right: 15px;
            }

            img {
                display: block;
                max-width: 100%;
                height: auto;
                object-fit: cover;
                justify-self: end;
            }
        }
    }
`

export default StyledAlbumDetails