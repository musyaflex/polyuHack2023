import MyKPICard from "components/MyCards/MyKPICard";
import React from "react";
import MyGBCard from "components/MyCards/MyGBCard";
import MyGBDescription from "components/MyCards/MyGBDescription";

const company = {
    name: "Banque Internationale a Luxembourg (BIL)",
    description: "BIL is a leading independent bank in Luxembourg with a strong brand and offers retail, private, corporate and institutional banking as well as treasury and financial market services.",
    review: "I love it",
    img: {},
    raise_cur: 49000000,
    raise_total: 62000000,
    //link: "https://www.bil.com/en/Pages/index.aspx"
};

export default class GreenBond extends React.Component {
    constructor() {
        super();
        this.state = {
          stocks: [],
          quarterly: [],
        };
      }

    render() {
        return (
            <div classname="flex">
                <div className="w-full lg:w-12/12 px-4 py-5 lg:inline-block">
                    <MyGBCard
                        name={company.name}
                        description={company.description}
                    />
                </div>                         
                
            </div>
        );
    };
}