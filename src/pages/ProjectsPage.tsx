import React from "react";
import AdminPanelLayout from "../layouts/AdminPanelLayout";
import Projects from "../components/Projects/Projects";

export default function ProjectsPage() {
  return <AdminPanelLayout component={<Projects/>} />;
}
