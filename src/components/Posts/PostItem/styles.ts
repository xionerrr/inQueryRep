import styled from "styled-components";

export const StyledPostItem = styled.div`
    width: 992px;
    background: transparent;
    border: 2px solid #ECECEC;  
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    a {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #98989E;
    }
`

export const PostItemInfo = styled.div`
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

export const PostItemButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    button {
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
    }
`

export const PostItemLink = styled.div`

`