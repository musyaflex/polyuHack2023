import React, { Component } from "react";

export default class MyGBDescription extends Component {
  render() {
    const name = this.props.name;
    const description = this.props.description;
    const review = this.props.review;
    const date = this.props.date;
    const image = this.props.img;

    return (
      <>
        <div className="relative flex flex-1 flex-row min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
                <div className="relative max-w-full flex-grow flex-1">
                    <h1 className="font-semibold text-2xl text-blueGray-700">
                        {description}
                    </h1>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
