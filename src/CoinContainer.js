import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-general-george-washington-crossing-the-delaware-quarter-proof-obverse-768x768.jpg" },
      { side: "tails", imgSrc: "https://media.istockphoto.com/id/517076027/vector/one-us-quarter-coin-depicting-the-american-eagle.jpg?s=612x612&w=0&k=20&c=vBdqNbXI4X57WN2ZN3PGf-rUDMeC3uEuEidCa2dL6ac=" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
        let newState = {
            ...st,
            currCoin: newCoin,
            nFlips: st.nFlips + 1,
            // nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
            // nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
        }
        if (newCoin.side === "heads"){
            newState.nHeads += 1;
        } else {
            newState.nTails += 1;
        }
        return newState;
    })
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip A Coin!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
