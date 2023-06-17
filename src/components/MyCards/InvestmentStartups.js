import React from "react";
import PropTypes from "prop-types";

export default function MyCardStats({
    statSubtitle,
    statTitle,
    statPercent,
    statPercentColor,
    statDescripiron,
    statIcon,
}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="p-4">
                    <div className="float-left">
                        <div>
                            <img src={statIcon} alt="stat icon" style={{maxHeight:"100px", maxWidth:"200px"}}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap text-right" style={{height:"100px"}}>
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                {statSubtitle}
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                                {statTitle}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4 text-right">
                        <span className={statPercentColor + " mr-2"}>
                            {statPercent}%
                        </span>
                        <span className="whitespace-nowrap">{statDescripiron}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

MyCardStats.defaultProps = {
    statSubtitle: "Traffic",
    statTitle: "350,897",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
};

MyCardStats.propTypes = {
    statSubtitle: PropTypes.string,
    statTitle: PropTypes.string,
    statPercent: PropTypes.string,
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIcon: PropTypes.string,
    // can be any of the background color utilities
    // from tailwindcss
};