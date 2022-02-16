import { motion } from 'framer-motion';
import styled from "styled-components";

export const StyledPost = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    h3 {
        font-size: 160px;
    }
`

export const StyledPostInfo = styled.div`
    display: flex;
    justify-content: center;
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
    h3 {
        font-size: 160px;
    }
`