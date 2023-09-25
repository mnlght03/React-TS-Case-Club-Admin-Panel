import React from "react";
import AdminPanelLayout from "../layouts/AdminPanelLayout";
import CurrentProjects from "../components/CurrentProjects/CurrentProjects";

export default function CurrentProjectsPage() {
  return <AdminPanelLayout component={<CurrentProjects/>} />;
}
