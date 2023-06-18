import React from "react";
import { Modal, Ripple, initTE } from "tw-elements";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Grow from "@mui/material/Grow";
import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Zoom from "@mui/material/Zoom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PopUpModule from "./popUpModule";

// import { Modal, Ripple, initTE } from "tw-elements";

// initTE({ Modal, Ripple });

import { useState } from "react";

export default class MyCardSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      reportName: "",
      reportType: "",
      reportDescription: "",
      reportYear: "",
      selectedFile: "",
      isFilePicked: false,
      isSubmitted: false,
      isTransfered: false,
      isPending: false,
      loading: false,
      openBackdrop: false,
      askPressed: false,
      receiveText:
        "Since February 2016, Apple has issued a total of 4.7 billion in green bonds.",
      sendText: "",
      openFileLoad: false,
      openBackdrop2: false,
      uploadLabel: "UPLOAD",
      theQuestion: "",
      isFalse: false,
      openBackdrop3: false,
      openBackdrop4: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleAsk = this.handleAsk.bind(this);
    this.handleSendText = this.handleSendText.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
    this.handlePending = this.handlePending.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handlePending(event) {
    this.setState({
      isSubmitted: false,
      openBackdrop4: true,
    });
    setTimeout(
      function () {
        //Start the timer
        this.setState({
          isPending: true,
          openBackdrop4: false,
        });
      }.bind(this),
      5000
    );
  }
  handleTransfer(event) {
    this.setState({ openBackdrop3: true, isSubmitted: false });
    setTimeout(
      function () {
        //Start the timer
        this.setState({
          isTransfered: true,
          openBackdrop3: false,
        });
      }.bind(this),
      5000
    );
  }

  handleAsk(event) {
    this.setState({ askPressed: true, openBackdrop2: true });
    const formData = new FormData();
    formData.append("Question", this.state.sendText);
    axios({
      method: "POST",
      url: `http://127.0.0.1:5000/question`,
      data: formData,
    })
      .then((res) => {
        console.log(res.data.answer);
        this.setState({ receiveText: res.data.answer });
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(
      function () {
        //Start the timer
        this.setState({ openBackdrop2: false });
      }.bind(this),
      15000
    );
  }

  handleSendText(event) {
    this.setState({
      sendText: event.target.value,
      theQuestion: event.target.value,
    });
  }

  handleSubmit(event) {
    this.setState({ appearTextfield: (prev) => !prev });
    this.setState({ openBackdrop: true, isTransfered: false });
    const formData = new FormData();
    formData.append("File", this.state.selectedFile);

    fetch("http://127.0.0.1:5000/uploadreport", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
        // event.preventDefault();
        // this.props.history.push('/CompanyPage')
      });

    setTimeout(
      function () {
        //Start the timer
        this.setState({ isSubmitted: true, openBackdrop: false });
      }.bind(this),
      5000
    );
  }

  changeHandler = (event) => {
    const myLabel = event.target.files[0].name;
    this.setState({
      selectedFile: event.target.files[0],
      isFilePicked: true,
      uploadLabel: myLabel,
    });
  };

  handleSuggest1 = () => {
    this.setState({
      theQuestion: "Is the company committed to net-zero carbon emmissions?",
      sendText: "Is the company committed to net-zero carbon emmissions?",
    });
  };

  render() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 wluxa">
          {/* <PopUpModule /> */}
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Transfer</h6>
            </div>
          </div>
          <div
            className="flex-auto px-4 lg:px-10 py-10 pt-0"
            //style={{ paddingBottom: "0" }}
          >
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Specify the number
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4 h-full">
                  <div className="relative w-full mb-3 uploadbutton centeredd origin-center">
                    {/* <Grow
                      in={this.state.appearTextfield}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(this.state.appearTextfield ? { timeout: 1000 } : {})}
                    > */}
                    <div>
                      <TextField
                        placeholder="+852"
                        variant="outlined"
                        style={{
                          width: "50%",
                          marginRight: 20,
                          marginBottom: 10,
                          backgroundColor: "white",
                          height: "35px", // Set desired height here
                        }}
                        InputProps={{ style: { fontSize: "26px" } }}
                        onChange={this.handleSendText}
                      />
                      {/* </Grow>
                      <Grow
                        in={this.state.appearTextfield}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(this.state.appearTextfield ? { timeout: 1000 } : {})}
                      > */}
                      <button
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={this.handleSubmit}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="centeredd">
              {this.state.openBackdrop ? (
                <CircularProgress color="primary" style={{ marginTop: 30 }} />
              ) : (
                <br></br>
              )}
              {this.state.isSubmitted ? (
                <div
                  className="align-middle relative flex flex-col min-w-0 break-words bg-white w-6/12 mb-6 shadow-lg rounded"
                  class="parent"
                >
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h6 className="text-blueGray-400 text-lg mt-3 font-bold uppercase pb-4">
                          Transfer Information
                        </h6>
                      </div>
                    </div>
                  </div>
                  <table className="items-center w-full bg-transparent border-collapse">
                    <tbody>
                      <tr>
                        <th className=" text-right border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-m whitespace-nowrap p-4">
                          Reciever Information:
                        </th>
                        <td style={{ textAlign: "left" }}>
                          <button
                            className="items-left text-gray font-bold uppercase text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            style={{ width: "45%" }}
                            disabled
                            // onClick={}
                            // style={{ margin: 10 }}
                          >
                            Ali B.
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th className=" text-right border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-m whitespace-nowrap p-4 ">
                          Specify the transfer amount:
                        </th>
                        <td style={{ textAlign: "left" }}>
                          <TextField
                            placeholder="HKD"
                            variant="outlined"
                            style={{
                              width: "45%",
                              marginRight: 20,
                              backgroundColor: "white",
                            }}
                            onChange={this.handleSendText}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className=" text-right border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-m whitespace-nowrap p-4 ">
                          Specify the needed deadline:
                        </th>
                        <td style={{ textAlign: "left" }}>
                          <input
                            type="date"
                            style={{ width: "45%" }}
                            className="items-left text-gray font-bold uppercase text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          />
                        </td>
                      </tr>
                      <br></br>
                      <tr className="align-middle">
                        <td style={{ textAlign: "center" }} colSpan={2}>
                          <div className="mx-auto block">
                            <button
                              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={this.handleTransfer}
                            >
                              TRANSFER NOW
                            </button>
                            <button
                              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={this.handlePending}
                              // onClick={() => setLoginModalOpen(true)}
                            >
                              PENDING TRANSFER
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <br></br>
              )}{" "}
            </div>
            <div className="centeredd">
              {this.state.openBackdrop3 ? (
                <CircularProgress color="primary" style={{ marginTop: 30 }} />
              ) : (
                <br></br>
              )}
              {this.state.isTransfered ? (
                <div>
                  <div className="flex intems-center justify-center">
                    <div
                      className="bg-green flex items-center justify-center w-6/12 rounded-full "
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                      }}
                    >
                      <i
                        className="fas fa-check text-white text-xl"
                        style={{ fontSize: "5rem" }}
                      ></i>
                    </div>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    <h1 style={{ fontSize: "1.5rem" }}>
                      Transaction Proceeded
                    </h1>
                  </div>
                </div>
              ) : (
                <br></br>
              )}{" "}
            </div>
            <div className="centeredd">
              {this.state.openBackdrop4 ? (
                <CircularProgress
                  color="primary"
                  style={{ marginTop: "-200px" }}
                />
              ) : (
                <br></br>
              )}
              {this.state.isPending ? (
                <div>
                  <div className="flex intems-center justify-center">
                    <div
                      className="bg-white flex items-center justify-center w-6/12 rounded-full "
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                        marginTop: "-100px",
                      }}
                    >
                      <i
                        className="fas fa-money-check-alt text-grey text-xl"
                        style={{ fontSize: "5rem" }}
                      ></i>
                    </div>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    <h1 style={{ fontSize: "1.5rem" }}>Transaction Pending</h1>
                    <h1 style={{ fontSize: "1.5rem" }}>
                      Estimated transfer time: 25 hours 25 minutes
                    </h1>
                  </div>
                </div>
              ) : (
                <br></br>
              )}{" "}
            </div>
            {/* <!-- Using font-awesome icons --> */}
          </div>
        </div>
      </>
    );
  }
}
