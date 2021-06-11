import styled from "styled-components";

export const InputArea = styled.div`
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    width: 12rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #CD00FE;

    input {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem !important;
        background-color: #262626;
        border: 0;
        color: white;
    }    
`
export const ButtonInput = styled.p`
    margin-top: 0.5rem;
    margin-left: auto;    
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.7rem;
`