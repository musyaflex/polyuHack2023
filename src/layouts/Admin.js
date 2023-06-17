import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Upload from "views/admin/Upload.js";
import Charity from "views/admin/Charity.js";
import CompanyPage from "views/admin/CompanyPage.js";
import MyDashboard from "views/admin/MyDashboard";
import GreenBond from "views/admin/GreenBond.js";
import Inbox from "views/admin/Inbox";
import Investment from "views/admin/Investment";
import GreenBondList from "views/admin/GreenBondList" // added link for the greenbond table
import InvestmentDetails from "views/admin/InvestmentDetails";

class Admin extends React.Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100 min-h-screen" >
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24" >
            <Switch >
              <Route path="/admin/upload" exact component={Upload} />
              <Route path="/admin/charity" exact component={Charity} />
              <Route path="/admin/company_page" exact component={CompanyPage} />
              <Route path="/admin/dashboard" exact component={MyDashboard} />
              <Route path="/admin/inbox" exact component={Inbox} />
              <Route path="/admin/greenbond" exact component={GreenBond} />
              <Route path="/admin/investment" exact component={Investment} />
              <Route path="/admin/greenbondlist" exact component={GreenBondList} />
              <Route path="/admin/investment_page" exact component={InvestmentDetails} />
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
            <FooterAdmin/>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
