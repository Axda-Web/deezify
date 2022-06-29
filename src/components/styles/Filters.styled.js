import styled from "styled-components";

const StyledFilters = styled.div`
    text-align: center;
    margin-bottom: 2rem;
    
    button {
        padding: .5em 1.2em;
        border: 1px solid #000;
        background-color: transparent;
        cursor: pointer;

        &.sort-date {

            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }

        &.sort-name {
            border-left: none;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }
    }
`

export default StyledFilters