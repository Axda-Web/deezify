import styled from "styled-components";

const StyledSearchInput = styled.div`
.search {
    position: relative;

    &__input {
        display: block;
        width: 100%;
        border: 1px solid inherit;
        font-size: 1rem;
        padding: 1em;
        margin: 2em 0;
        border-radius: 15px;
    }

    &__icon {
        font-size: 1.3rem;
        position: absolute;
        right: .8em;
        top: .8em;
    }
}
`

export default StyledSearchInput