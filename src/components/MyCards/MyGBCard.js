import React, { Component } from "react";
import logo from "../../assets/img/bil-logo.jpg";
import img from "../../assets/img/bil-image.jpeg";
import MyFundCard from "./MyFundCard";

export default class MyGBCard extends Component {
  render() {
    const name = this.props.name;
    const description = this.props.description;
    const review = this.props.review;
    const date = this.props.date;
    const image = this.props.img;

    return (
      <>
        <div className="relative flex flex-1 flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap flex-row">
                <div className="p-4" >

                        <img src={logo} style={{width:60}}/>
                </div>
              <div className="relative max-w-full flex-grow flex-1 flex-col">
                    <div className="pb-4"> 
                        <h4 className="text-blueGray-800 font-bold uppercase text-s inline-c">{name}</h4>
                    </div>
                    <div className="pb-4"> 
                        <div className="text-blueGray-600 mb-2 inline-c">{description}</div>
                    </div>
              </div>
            </div>
          </div>
          <div className="flex-auto pb-4 pl-4 pr-4">
            <div className="flex flex-wrap flex-row">
                <div className="relative flex-grow flex-1 lg:w-6/12">
                    <img src={img} className="relative w-full inline-c"/>
                </div>
                <div className="relative flex-grow flex-1 lg:w-3/12">
                    <MyFundCard/>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}