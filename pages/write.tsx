import React from "react";
import { WriteForm } from "../components/WriteForm.tsx";
import { MainLayout } from "../layouts/MainLayout";

const WritePage: React.FC = () => {
  return (
    <MainLayout hideComments hideSidebar>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
