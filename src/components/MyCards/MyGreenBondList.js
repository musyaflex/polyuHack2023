import React from "react";
import PropTypes from "prop-types";

// components

const test_companies = [
  {
    name: "0001",
    ticker: "Banque Internationale a Luxembourg",
    price: "10,000,000",
    absChange: "Feb - 2023",
    relChange: "Feb - 2026",
    volume: "Sustainalytics",
  },
  {
    name: "0002",
    ticker: "European Bank (EBRD)",
    price: "50,000,000",
    absChange: "Feb - 2023",
    relChange: "Feb - 2033",
    volume: "CICERO",
  },
  {
    name: "0003",
    ticker: "Deutsche Bank",
    price: "100,000",
    absChange: "Feb - 2023",
    relChange: "Feb - 2028",
    volume: "ISS ESG",
  },
  {
    name: "0004",
    ticker: "Hypo Vorarlberg",
    price: "1,200,000",
    absChange: "Feb - 2023",
    relChange: "Sep - 2027",
    volume: "ISS ESG",
  },
  {
    name: "0005",
    ticker: "Massachusetts Finance Agency",
    price: "600,000",
    absChange: "Feb - 2023",
    relChange: "Sep - 2028",
    volume: "Kestrel Verifiers",
  },
  {
    name: "0006",
    ticker: "Credit Agricole CIB",
    price: "850,000",
    absChange: "Feb - 2023",
    relChange: "Feb - 2033",
    volume: "Kestrel Verifiers",
  },
  {
    name: "0007",
    ticker: "Shenzhen Factoring Co",
    price: "300,000",
    absChange: "Feb - 2023",
    relChange: "Feb - 2033",
    volume: "Lianhe Equator",
  },
  {
    name: "0008",
    ticker: "Acciona",
    price: "5,000,000",
    absChange: "Feb - 2023",
    relChange: "Mar - 2025",
    volume: "Sustainalytics",
  },
  {
    name: "0009",
    ticker: "BayernLB",
    price: "5,000,000",
    absChange: "Feb - 2023",
    relChange: "Feb - 2029",
    volume: "ISS ESG",
  },
  {
    name: "0010",
    ticker: "Helaba",
    price: "75,000,000",
    absChange: "Feb - 2023",
    relChange: "Feb - 2030",
    volume: "ISS ESG",
  },
  {
    name: "0011",
    ticker: "SP Swill Property",
    price: "100,000,000",
    absChange: "Feb - 2023",
    relChange: "Jul - 2026",
    volume: "Moody's",
  },
  {
    name: "0012",
    ticker: "Swire Properties MTN",
    price: "30,000,000",
    absChange: "Jan - 2023",
    relChange: "Jan - 2028",
    volume: "Sustainalytics",
  },
  {
    name: "0013",
    ticker: "City of Hot Springs",
    price: "180,000",
    absChange: "Jan - 2023",
    relChange: "Oct - 2024",
    volume: "Kestrel Verifiers",
  },
  {
    name: "0014",
    ticker: "Credit Agricole CIB",
    price: "5,000,000",
    absChange: "Jan - 2023",
    relChange: "Jan - 2028",
    volume: "Vigeo Eiris",
  },
  {
    name: "0015",
    ticker: "Nordic Invesment Bank",
    price: "500,000,000",
    absChange: "Jan - 2023",
    relChange: "Jan - 2030",
    volume: "CICERO",
  },
  {
    name: "0016",
    ticker: "California Community Choice",
    price: "175,000",
    absChange: "Jan - 2023",
    relChange: "Feb - 2024",
    volume: "Kestrel Verifiers",
  },
  {
    name: "0017",
    ticker: "New Jersey Economic",
    price: "14,000,000",
    absChange: "Jan - 2023",
    relChange: "Mar - 2026",
    volume: "Kestrel Verifiers",
  },
  {
    name: "0018",
    ticker: "Caja Rural de Navarra",
    price: "400,000,000",
    absChange: "Jan - 2023",
    relChange: "Arp - 2027",
    volume: "Sustainalytics",
  },
  {
    name: "0019",
    ticker: "Iberdrola Finanzas SA",
    price: "1,000,000,000",
    absChange: "Jan - 2023",
    relChange: "Jan - 2033",
    volume: "Moody's",
  },
  {
    name: "0020",
    ticker: "ICBC",
    price: "600,000,000",
    absChange: "Jan - 2023",
    relChange: "Jan - 2026",
    volume: "Sustainalytics",
  },
];

export default class MyGreenBondList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: (a, b) => ("" + a.name).localeCompare(b.name),
    };
  }

  addRow(company, color) {
    const dcolor = company.relChange >= 0 ? "green" : "red";
    return (
      <tr key={company.ticker}>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4 text-left flex items-center">
          {/* <img
            src={require("assets/img/bootstrap.jpg").default}
            className="h-12 w-12 bg-white rounded-full border"
            alt="..."
          ></img>{" "} */}
          {/* <a href="http://localhost:3000/admin/greenbondlist"> */}
          <span
            className={
              "ml-3 font-bold " +
              +(color === "light" ? "text-blueGray-600" : "text-white")
            }
          >
            {company.name}
          </span>
          {/* </a> */}
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          <a href="http://localhost:3000/admin/greenbond">
          {company.ticker}
          </a>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          ${company.price}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.absChange}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.relChange}
        </td>

        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.volume}
        </td>
        {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4 text-right">
          <TableDropdown />
        </td> */}
      </tr>
    );
  }

  generateRows(companies) {
    let rows = [];
    const sorted = companies.sort(this.state.filter);
    sorted.forEach((com) => {
      rows.push(this.addRow(com));
    });
    return rows;
  }

  render() {
    const color = this.props.color;
    const title = this.props.title ?? "Table";
    const companies = test_companies;

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
                  {title}
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    onClick={() => {
                      this.setState({
                        filter: (a, b) => ("" + a.name).localeCompare(b.name),
                      });
                    }}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Bond ID
                  </th>
                  <th
                    onClick={() => {
                      this.setState({
                        filter: (a, b) => ("" + a.name).localeCompare(b.name),
                      });
                    }}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Entity
                  </th>
                  <th
                    onClick={() => {
                      console.log("Check");
                      this.setState({
                        filter: (a, b) => b.price - a.price,
                      });
                    }}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Amount Issued
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Issue Date
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Maturity Date
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    SPO Provider
                  </th>
                </tr>
              </thead>
              <tbody>{this.generateRows(companies)}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

MyGreenBondList.defaultProps = {
  color: "light",
};

MyGreenBondList.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
