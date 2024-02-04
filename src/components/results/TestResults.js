import "./TestResults.css"

// 250 / 60 = 4,1 * wpm = px


export default function TestResults(data) {

  let maxWpmValue = 0
  data.forEach((d) => {
    if (d.wpm > maxWpmValue) {
      maxWpmValue = d.wpm
    }
  })

  function xHeight(i) {
    let height = (250 / maxWpmValue) * data[i].wpm
    height = height.toString()
    height = height.split(".")
    return height[0];
  }

  function xAxisPos(i) {
    const x = i * 15
    return x.toString()
  }

  return <svg id="chart-area">
    {data.map((currElement, index) =>
      <rect key={index} x={xAxisPos(index)} y="-2" width="14" height={xHeight(index)} rx="2"></rect>
    )}</svg>
};
