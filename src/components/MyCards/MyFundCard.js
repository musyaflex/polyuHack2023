import React, { Component } from "react";

export default class MyFundCard extends Component {
  render() {
    return (
      <>
        <div className="relative flex flex-1 flex-col min-w-0 break-words rounded mb-6 xl:mb-0" style={{borderStyle:"solid"}}>
          <div className="flex-auto">
            <div className="flex-auto border-solid border-blueGray-80 border p4" style={{marginLeft:120, marginRight:120}}>
            <div className="flex flex-wrap flex-col pb-4">
                <h5 className="text-sm text-emerald-500 align-center p-4">Fund Raise starts</h5>
                <h5 className="text-sm uppercase text-emerald-500 align-center font-bold pb-4">14 Feb</h5>
                <h5 className="text-s uppercase text-lightBlue-600 align-center font-bold">$3,500,000<br/></h5>
                <h5 className="text-sm uppercase text-blueGray-600 align-center font-bold pb-4">of <br/> $5,100,000(68%)</h5>
                {/* <button type="button" className="gbButton px-max"> */}
                    <a href="https://www.bil.com/en/Pages/index.aspx" className="font-normal align-center text-lightBlue-500">Website</a>
                {/* </button> */}
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}