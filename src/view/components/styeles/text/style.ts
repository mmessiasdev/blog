import styled, { Props, css } from "styled-components";
import TypeText from "../../content/text";


export const ParagraphText = styled.p<Props>`
    font-family: 'Montserrat', sans-serif;
    opacity: ${({ opacity }) => opacity ? opacity : 1};
    font-weight: 400;
    strong, b{
        font-weight: 700;
    }
    font-size: 15px;
`