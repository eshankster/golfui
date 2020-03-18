/**
 * PlayerSelect
 * - main component in the app
 * - displays 2 dropdowns with player name and statistic variables
 * - once selection is made from the 2, the submit active
 * - submit will query the API layer to pull the data back
 *
 * ffriel
 * 17/03/2020
 */
import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import Spinner from 'react-spinner-material';
import ReactDOM from 'react-dom';
import axios from "axios";

export class PlayerSelect extends Component {
  constructor() {
    super();
    this.state = {
      player: '0',
      variable: '0',
    };
    this.onChangePlayer = this.onChangePlayer.bind(this);
    this.onChangeVariable = this.onChangeVariable.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }
  render() {
    return (
      <div className="container">
       <div className="input-field col s12">
          <select onChange={this.onChangePlayer} className="dropdown">
            <option disabled selected>Select a player</option>
            <option>Adam Scott</option>
            <option>Bubba Watson</option>
            <option>Brooks Koepka</option>
            <option>Charl Schwartzel</option>
            <option>Dustin Johnson</option>
            <option>Edoardo Molinari</option>
            <option>Graeme McDowell</option>
            <option>Henrik Stenson</option>
            <option>Ian Poulter</option>
            <option>J.B. Holmes</option>
            <option>Jason Day</option>
            <option>Jim Furyk</option>
            <option>Jordan Spieth</option>
            <option>Justin Rose</option>
            <option>Lee Westwood</option>
            <option>Martin Kaymer</option>
            <option>Matt Kuchar</option>
            <option>Padraig Harrington</option>
            <option>Phil Mickelson</option>
            <option>Rickie Fowler</option>
            <option>Rory McIlroy</option>
            <option>Sergio Garcia</option>
            <option>Shane Lowry</option>
            <option>Tiger Woods</option>
            <option>Tommy Fleetwood</option>
          </select>
        </div>
        <div className="input-field col s12">
          <select onChange={this.onChangeVariable} className="dropdown">
            <option disabled selected>Select a variable</option>
            <option>Carry Distance - (AVG.)</option>
            <option>Driving Distance - (AVG.)</option>
            <option>FedExCup Standings - (POINTS)</option>
            <option>Greens in Regulation Percentage - (%)</option>
            <option>Hit Fairway Percentage - (%)</option>
            <option>Longest Drives - (DISTANCE)</option>
            <option>Official Money - (YTD VICTORIES)</option>
            <option>Official World Golf Ranking - (TOTAL POINTS)</option>
            <option>Putting Average - (AVG)</option>
            <option>Scoring Average (Actual) - (AVG)</option>
        </select>
      </div>
      <div className="input-field col s12">
        <button onClick={this.submitSearch} className="buttoncls">Submit</button>
      </div>
      <div className="input-field col s12" id="result"></div>
    </div>
    );
  }

  onChangePlayer(e) {
    this.setState({ player: e.target.value });
  }

  onChangeVariable(e) {
    this.setState({ variable: e.target.value });
  }

  submitSearch() {
    if (this.state.player !== '0' && this.state.variable !== '0') {
      let element = <div className="spinnerdiv"><Spinner radius={50} color={"#000"} stroke={4} visible={this.state.visible} /></div>
      ReactDOM.render(element, document.getElementById('result'));
      console.log('submit');
      axios.get('http://localhost:3001/search?player=' + this.state.player + '&variable=' + this.state.variable)
      .then(function (response) {
        console.log(response);
        let bufferOriginal = Buffer.from(response.data[0].data);
        ReactDOM.render(<div className="actresult">{ ReactHtmlParser(bufferOriginal.toString().replace(/\n/g, "<br />")) }</div>, document.getElementById('result'));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}

export default PlayerSelect;
