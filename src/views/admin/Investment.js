import React from "react";

// components

import MyInvestmentCard from "components/MyCards/MyInvestmentCard";

export default function investment() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MyInvestmentCard />
        </div>
      </div>
    </>
  );
}
