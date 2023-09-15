import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import DragAndDrop from "./DragAndDrop/DragAndDrop";

export default function Projects() {
  return (
    <Main>
      <Header title={"Реализованные проекты"} />
      <div className="ml-24 py-12 flex">
        <div className="w-96 font-semibold">Название проекта</div>
        <div className="w-64 font-semibold ml-32">Проект последнего года?</div>
        <div className="w-44 font-semibold ml-32">Логотип компании</div>
      </div>
      <DragAndDrop />
    </Main>
  );
}
