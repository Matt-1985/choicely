import React from "react";
import DetailCard from "../components/DetailCard";

export default {
  title: "Components/DetailCard",
  parameters: { layout: "centered" },
  components: DetailCard,
};

export const BigCard = () => <DetailCard />;
