import React from "react";
import PropTypes from "prop-types";
import MyCardStats from "components/MyCards/MyCardStats.js";

import biomemakers from "../../assets/img/biomemakers.jpeg";
import tree from "../../assets/img/plant-a-tree.png";
import water from "../../assets/img/water.png";
import gas from "../../assets/img/factory.png";
import waste from "../../assets/img/waste-water.png";

// components

export default function MyInvestmentCardTable({ color }) {
  return (
    <>

      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Startup Company Overview
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}

          <section className="pb-20 bg-blueGray-200 -mt-70">

            <div className="container mx-auto px-4 pt-100">

              <div className="flex flex-wrap">

                <div className="flex flex-wrap items-center">
                  <div className="flex flex-wrap pt-8 pb-4">
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <MyCardStats
                        statSubtitle="Land use and biodiversity"
                        statTitle="Save 80,000 trees"
                        statArrow="up"
                        statPercent="72"
                        statPercentColor="text-emerald-500"
                        statDescripiron="trees saved locally"
                        statIcon={tree}
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <MyCardStats
                        statSubtitle="Water use"
                        statTitle="Expected to use of 200L per day"
                        statArrow="down"
                        statPercent="37"
                        statPercentColor="text-red-500"
                        statDescripiron="than local companies"
                        statIcon={water}
                        statIconColor="bg-orange-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <MyCardStats
                        statSubtitle="Greenhouse gas emissions"
                        statTitle="Cut exhaust gases"
                        statArrow="down"
                        statPercent="83"
                        statPercentColor="text-red-500"
                        statDescripiron="by 2024"
                        statIcon={gas}
                        statIconColor="bg-pink-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <MyCardStats
                        statSubtitle="Waste and pollution"
                        statTitle="Reduce by half"
                        statArrow="down"
                        statPercent="50"
                        statPercentColor="text-red-500"
                        statDescripiron="by the end of 2023"
                        statIcon={waste}
                        statIconColor="bg-lightBlue-500"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">


                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      Biome Makers
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                      Biome Makers is an agriculture tech startup that works to fight climate change through soil-health optimization.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                      Their primary products, BeCrop and Gheom, provide tech solutions and data diagnostics to promote sustainability and regenerative agriculture.
                    </p>
                    <div>
                      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                        Founder(s): Adrian Ferrero and Alberto Acedo
                        <br></br>
                        Location: Sacramento, California and Valladolid, Spain
                        <br></br>
                        Phone Number: (+34) 983 950 945, (415) 795-7469
                      </p>
                    </div>
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      style={{ marginRight: "10px" }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://biomemakers.com/';
                      }}
                    >
                      Website
                    </button>
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      style={{ marginRight: "10px" }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://biomemakers.com/';
                      }}
                    >
                      Whitepaper
                    </button>
                  </div>

                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                      <img
                        src={biomemakers}
                        className="w-full align-middle rounded-t-lg"
                        alt="Thumbnail"
                      />

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}

MyInvestmentCardTable.defaultProps = {
  color: "light",
};

MyInvestmentCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
