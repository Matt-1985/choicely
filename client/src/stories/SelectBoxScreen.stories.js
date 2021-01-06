import React from "react";
import FilterPage from "../pages/FilterPage";

export default {
  title: "Pages/FilterPage",
  components: FilterPage,
};

export const ForthPage = (args) => <FilterPage {...args} />;
