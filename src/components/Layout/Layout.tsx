import React, { FC } from "react";
import Container from "../Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
