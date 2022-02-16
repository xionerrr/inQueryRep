import { motion } from 'framer-motion';
import styled from "styled-components"

export const StyledHome = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    h1 {
        font-size: 72px;
    }
    h2 {
        font-size: 48px;
    }
    * {
        margin: 0;
    }
`