import Footer from "@/components/Footer";
import RegisterHeader from "@/components/RegisterHeader";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const RegisterLayout = ({ children }: Props) => {
  return (
    <>
      <RegisterHeader />
      {children}
      <Footer />
    </>
  );
};
export default RegisterLayout;
