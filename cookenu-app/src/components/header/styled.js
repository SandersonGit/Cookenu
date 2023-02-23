import styled from "styled-components";
import { theme } from '../../styles'

export const HeaderStyled = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: orange;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding: 10px;
    font-size: 30px;
    background-color: ${theme.colors.laranja["500"]}
    
`