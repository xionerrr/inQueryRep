import styled from "styled-components"

export const StyledPostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    h2 {
        margin: 0;
        text-transform: uppercase;
    }
    span {
        font-size: 15px;
    }
`

export const StyledCreateComment = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #98989E;
    padding: 15px 60px;
    box-shadow: 0 0 1px 0 #999;
    transition: .2s ease;
    &:hover {
        box-shadow: 0 0 2px 0 #999;
    }
`

export const StyledCommentsTitle = styled.h2`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 28px;

`

export const StyledComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;
    padding: 0 25px;
    position: relative;
    margin-top: 25px;
    &:before {
        content: '';
        position: absolute;
        width: 80% !important;
        height: 1px;
        background: #000;
        top: -25px;
    }

`

export const StyledComment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h2 {
        font-size: 18px;
        position: relative;
    }
    span {
        font-size: 15px;
    }
`

export const StyledCommentsBlock = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 25px;
`