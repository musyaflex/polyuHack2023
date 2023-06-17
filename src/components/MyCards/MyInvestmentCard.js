import PropTypes from "prop-types";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import InvestmentStartups from "components/MyCards/InvestmentStartups.js";
import biomemakers from "../../assets/img/biomemakers.jpeg";
import aurora from "../../assets/img/aurora.jpeg";
import bottleplus from "../../assets/img/bottleplus.jpeg";
import fuergy from "../../assets/img/fuergy.jpeg";
import ecocart from "../../assets/img/ecocart.jpeg";
import homeboy from "../../assets/img/homeboy.jpeg";
import vivamaris from "../../assets/img/vivamaris.jpeg";
import heliogen from "../../assets/img/heliogen.jpeg";
import encamp from "../../assets/img/encamp.jpeg";
import entomo from "../../assets/img/entomo.jpeg";
import treeapp from "../../assets/img/treeapp.jpeg";
import bluebird from "../../assets/img/bluebird.jpeg";
import algenesis from "../../assets/img/algenesis.jpeg";
import fuelgems from "../../assets/img/fuelgems.jpeg";
import handprint from "../../assets/img/handprint.jpeg";

import { Link } from "react-router-dom";
// components

export default function MyInvestmentCard({ color = "light" }) {
    const myFunction = () => {
        console.log("my funcation");
    }
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
                                Environmental startups
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <section className="bg-blueGray-200 -mt-70">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 py-5" style={{ paddingBottom: 0 }}>
                                <h1 className="investTextBlya">ACTIVE</h1>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5">
                                <h1 className="investTextBlya">UPCOMING</h1>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5">
                                <h1 className="investTextBlya">ENDED</h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link to="/admin/investment_page">
                                    <InvestmentStartups
                                        statSubtitle="4 days left"
                                        statTitle="Biome Makers"
                                        statPercent="50"
                                        statPercentColor="text-emerald-500"
                                        statDescripiron="$600,000 / $1,200,000"
                                        statIcon={biomemakers}
                                    />
                                </Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="13 Feb"
                                    statTitle="Aurora"
                                    statPercent="79"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$4,200,000 / $5,350,000"
                                    statIcon={aurora}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="7 Feb"
                                    statTitle="Bottle Plus"
                                    statPercent="85"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$1,700,000 / $2,000,000"
                                    statIcon={bottleplus}
                                /></Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="17 days left"
                                    statTitle="Fuergy"
                                    statPercent="21"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$680,000 / $3,200,000"
                                    statIcon={fuergy}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="14 Feb"
                                    statTitle="EcoCart"
                                    statPercent="61"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$880,000 / $1,450,000"
                                    statIcon={ecocart}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="31 Jan"
                                    statTitle="Homeboy Electronics Recycling"
                                    statPercent="100"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$1,800,000 / $1,800,000"
                                    statIcon={homeboy}
                                /></Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="48 Days Left"
                                    statTitle="Viva Maris"
                                    statPercent="65"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$585,000 / $900,000"
                                    statIcon={vivamaris}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="18 Feb"
                                    statTitle="Heliogen"
                                    statPercent="96"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$6,000,000 / $6,250,000"
                                    statIcon={heliogen}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="26 Jan"
                                    statTitle="Encamp"
                                    statPercent="98"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$6,440,000 / $6,570,000"
                                    statIcon={encamp}
                                /></Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="51 days left"
                                    statTitle="Entomo Farms"
                                    statPercent="15"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$195,000 / $1,300,000"
                                    statIcon={entomo}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="23 feb"
                                    statTitle="Treeapp"
                                    statPercent="31"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$1,080,000 / $3,590,000"
                                    statIcon={treeapp}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="29 Dec"
                                    statTitle="Bluebird Climate"
                                    statPercent="97"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$13,550,000 / $14,000,000"
                                    statIcon={bluebird}
                                /></Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="DATE: TBA"
                                    statTitle="Algenesis"
                                    statPercent="0"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="GOAL: $1,200,000"
                                    statIcon={algenesis}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="5 March"
                                    statTitle="FuelGems"
                                    statPercent="4"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$1,790,000 / $44,750,000"
                                    statIcon={fuelgems}
                                /></Link>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 py-5 lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center grow h-450-px" style={{ paddingTop: 0 }}>
                                <Link><InvestmentStartups
                                    statSubtitle="18 Nov"
                                    statTitle="Handprint"
                                    statPercent="100"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="$3,340,000 / $3,340,000"
                                    statIcon={handprint}
                                /></Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

