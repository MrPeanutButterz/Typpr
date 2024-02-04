import "./TestResults.css"

export default function TestResults(data) {

  let maxWpmValue = 0
  data.forEach((d) => {
    if (d.wpm > maxWpmValue) {
      maxWpmValue = d.wpm
    }
  })

  function xHeight(i) {
    let height = (200 / maxWpmValue) * data[i].wpm
    height = height.toString()
    height = height.split(".")
    return height[0];
  }

  function xPos(i) {
    const x = i * 15
    return x.toString()
  }

  function yScaleTop() {
    return maxWpmValue.toString()
  }

  function yScaleMid() {
    const mid = maxWpmValue / 2
    return mid.toString()
  }

  function maxWpm() {
    return maxWpmValue.toString()
  }

  return <>
    <div id="chart">

      <div id="y-axis">
        <h3>wpm</h3>
        <div id="y-scale"><p>1</p><p>{yScaleMid()}</p><p>{yScaleTop()}</p></div>
      </div>

      <svg id="chart-area">
        {data.map((currElement, index) =>
          <rect key={index} x={xPos(index)} y="-2" width="14" height={xHeight(index)} rx="2"></rect>
        )}</svg>
      <div id="totals">
        <h1>{maxWpm()}<span> wpm</span></h1>
        <h1>92 <span> acc</span></h1>
      </div>
    </div>

    <div id="x-axis">
      <div id="x-scale"><p>1</p><p>10</p><p>20</p><p>30</p><p>40</p><p>50</p><p>60</p></div>
      <h3>sec</h3>
    </div>
  </>
};
