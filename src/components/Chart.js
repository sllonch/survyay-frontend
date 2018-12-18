import React, { Component } from "react";
import ToggleButton from "react-toggle-button";
import { Bar, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      chartData: {
        labels: props.survey.answers.map(answer => {
          return answer.answerTitle;
        }),
        datasets: [
          {
            label: "# of Votes",
            data: props.survey.answers.map(answer => {
              return answer.votes;
            }),
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
              "rgba(153, 102, 255)",
              "rgba(255, 159, 64)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      }
    };
  }

  handleChange(value) {
    this.setState({ checked: !value });
  }

  render() {
    return (
      <div className="chart">
        <ToggleButton
          inactiveLabel={'Pie'}
          activeLabel={'Bar'}
          value={this.state.checked || false}
          onToggle={this.handleChange}
        />
        {!this.state.checked && (
          <Bar
            data={this.state.chartData}
            width={100}
            height={200}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    gridLines: {
                      display: true
                    },
                    ticks: {
                      beginAtZero: true,
                      display: true
                    }
                  }
                ]
              }
            }}
          />
        )}
        {this.state.checked && (
          <Pie
            data={this.state.chartData}
            width={100}
            height={200}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    gridLines: {
                      display: true
                    },
                    ticks: {
                      beginAtZero: true,
                      display: true
                    }
                  }
                ]
              }
            }}
          />
        )}
      </div>
    );
  }
}

export default Chart;
