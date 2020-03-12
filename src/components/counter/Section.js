import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedButton from "./feedButton/FeedButton";
import NotificationError from "./NotificationErros";
export default class Section extends Component {
  static defaultProps = {
    step: 1
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleIncrement = event => {
    const increment = this.props.step;
    const name = event.target.name;
    this.setState({
      [name]: this.state[name] + increment
    });
  };

  getTotal = () => {
    const { good, bad, neutral } = this.state;
    let result = good + neutral + bad;
    return result;
  };
  percentage = () => {
    let result = this.getTotal();
    return Math.floor((100 / result) * this.state.good);
  };

  render() {
    return (
      <>
        <section className={this.props.title[0]}>
          <FeedButton handleIncrement={this.handleIncrement} />
        </section>
        {this.getTotal() !== 0 ? (
          <section className={this.props.title[1]}>
            <Statistics
              state={this.state}
              getTotal={this.getTotal}
              percentage={this.percentage}
            />
          </section>
        ) : (
          <NotificationError message="No feedback given" />
        )}
      </>
    );
  }
}
