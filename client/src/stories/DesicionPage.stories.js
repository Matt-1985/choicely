import React from "react";
import DesicionPage from "../pages/DesicionPage";

export default {
  title: "Pages/DesicionPage",
  component: DesicionPage,
};

export const SecondPage = (args) => <DesicionPage {...args} />;
