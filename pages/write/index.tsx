import React from "react";
import { WriteForm } from "../../components/WriteForm";
import { MainLayout } from "../../layouts/MainLayout";



const WritePage: React.FC = () => {
  return (
    <MainLayout hideComments hideSidebar>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
 