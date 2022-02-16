import styled from "styled-components";

import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutDefault: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};
