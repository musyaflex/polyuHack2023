import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import axios from "axios";
import { isMobile } from "react-device-detect";

// components
import { Oval } from "react-loader-spinner";
import MyCardProfile from "components/MyCards/MyCardProfile.js";
import MyKPICard from "../../components/MyCards/MyKPICard";
import MyESGCard from "components/MyCards/MyESGCard";
import "react-circular-progressbar/dist/styles.css";
import MyESGKPI from "components/MyCards/MyESGKPI";
import MyActions from "components/MyCards/MyActions";
import MyStocksCard from "components/MyCards/MyStocksCard";
import MyBarChart from "components/MyCards/MyBarChart";
import MyInvestmentCardTable from "components/MyCards/MyInvestmentCardTable.js";

export default class InvestmentDetails extends React.Component {    

  // fetchData() {
  //   axios({ method: "GET", url: `/companyPage/AAPL` })
  //     .then((res) => res.data)
  //     .then((data) => {
  //       this.setState({
  //         stocks: data.price.slice(-36),
  //         quarterly: data.quarterly,
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       this.setState({
  //         quarterly: test_quarterly,
  //         stocks: test_stocks,
  //       });
  //     });
  // }

  // componentDidMount() {
  //   this.fetchData();
  // }

  render() {
    return (
        <>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <MyInvestmentCardTable />
          </div>
        </div>
      </>
    )
  }
}
