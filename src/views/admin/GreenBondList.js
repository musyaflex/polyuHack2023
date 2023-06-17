import React from "react";
import axios from "axios";

// components

import MyGreenBondList from "components/MyCards/MyGreenBondList";

import usflag from "../../assets/img/united-states-2.png";
import jpnflag from "../../assets/img/japan.png";
import gbtflag from "../../assets/img/united-kingdom.png";
import hkflag from "../../assets/img/hong-kong.png";

export default class MyDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      topCount: 10,
    };
  }

  fetchData() {
    axios({ method: "GET", url: `/dashboard${this.state.topCount}` })
      .then((res) => res.data)
      .then((data) => data.companies)
      .then((companies) => {
        this.setState({ companies: companies });
      }).catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
      
        
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <MyGreenBondList title="Green Bond List" items={this.state.companies} />
          </div>
          <div className="w-full mb-12 px-4">
            {/* <MyNews /> */}
          </div>
        </div>
      </>
    );
  }
}
