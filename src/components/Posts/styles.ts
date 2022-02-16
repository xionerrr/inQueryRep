import styled from "styled-components";

export const StyledPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    h3 {
        font-size: 160px;
    }
`

export const PostCreateButton = styled.button`
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