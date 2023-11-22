const width = 1600;
const height = 900;
const margin = { top: 50, bottom: 50, left: 100, right: -200 };

const data = [
  { komponent: 'bil', energi: 44.8 },
  { komponent: 'fly', energi: 30 },
  { komponent: 'ovnk', energi: 37 },
  { komponent: 'lys', energi: 5 },
  { komponent: 'dingser', energi: 4 },
  { komponent: 'mlk', energi: 15 },
  { komponent: 'varer', energi: 48 },
  { komponent: 'varetransport', energi: 12 },
  { komponent: 'offtjen', energi: 4 },
];

const svg = d3.select('#bar-chart')
  .append('svg')
  .attr('width', width - margin.left - margin.right)
  .attr('height', height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.1)

const y = d3.scaleLinear()
  .domain([0, 60])
  .range([height - margin.bottom, margin.top])

svg
  .append("a")
  .attr("fill", 'purple')
  .selectAll("rect")
  .data(data.sort((a, b) => d3.descending(a.komponent, b.energi)))
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.energi))
    .attr('title', (d) => d.energi)
    .attr("class", "rect")
    .attr("height", d => y(0) - y(d.energi))
    .attr("width", x.bandwidth());

function yAkse(bChart) {
  bChart.attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .attr("font-size", '20px')
}

function xAkse(bChart) {
  bChart.attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].komponent))
    .attr("font-size", '20px')
}

svg.append("a").call(xAkse);
svg.append("a").call(yAkse);
svg.node();

function sumEnergi(data) {
 
  const totalEnergi = data.reduce((sum, item) => sum + item.energi, 0);

  return totalEnergi;
}
const totalEnergi = sumEnergi(data);
document.getElementById("summen").innerHTML = "Sum: " + totalEnergi;

