import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  console.log("data points", props.chartDataPoints);
  const dataPointValue = props.chartDataPoints.map((ele) => {
    return ele.value;
  });
  const maxValue = Math.max(...dataPointValue);
  console.log("chart first tiem called");
  return (
    <div className="chart">
      {props.chartDataPoints.map((data) => {
        // console.log("data ....", data);
        return (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={maxValue}
            label={data.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
