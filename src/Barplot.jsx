import * as d3 from "d3";
import React from "react";

const barplotPadding = 0.4;

export const Barplot = ({ width, height, data }) => {
  const groups = data.map((d) => d.name).reverse();
  const yScale = d3
    .scaleBand()
    .domain(groups)
    .range([0, height])
    .paddingInner(barplotPadding)
    .paddingOuter(0.1);

  // X axis
  const xScale = d3
    .scaleLinear()
    .domain([0, Math.max(...data.map((d) => d.count))])
    .range([0, width]);

  // Build the rectangles
  const rectangles = data.map((d, i) => {
    const y = yScale(d.name);

    if (y === undefined) {
      return null;
    }
    return (
      <g key={i}>
        <rect
          x={0}
          y={yScale(d.name)}
          width={xScale(d.count)}
          height={yScale.bandwidth()}
          fill="#076fa2"
          stroke="#076fa2"
          opacity={1}
        />
        {d.count > 7 ? (
          <text
            x={xScale(0) + 7}
            y={yScale(d.name) + yScale.bandwidth() / 2}
            textAnchor="start"
            alignmentBaseline="central"
            fontFamily="sans-serif"
            fontSize="14"
            fill="#ffffff"
            fillOpacity={0.9}
          >
            {d.name}
          </text>
        ) : (
          <text
            x={xScale(d.count) + 7}
            y={yScale(d.name) + yScale.bandwidth() / 2}
            textAnchor="start"
            alignmentBaseline="central"
            fontFamily="sans-serif"
            fontSize="14"
            fill="#076fa2"
            fillOpacity={1}
          >
            {d.name}
          </text>
        )}
      </g>
    );
  });
  // Build the grid lines
  const grid = xScale
    .ticks(10)
    .slice(1)
    .map((count, i) => (
      <g key={i}>
        <line
          x1={xScale(count)}
          y1={0}
          x2={xScale(count)}
          y2={height}
          stroke="#808080"
          strokeOpacity={0.2}
        />
      </g>
    ));

  return (
    <div>
      <svg
        width={width}
        height={height}
        className="barplot"
        style={{ overflow: "visible" }}
      >
        {grid}
        {rectangles}
        <g>
          <line
            x1={xScale(0)}
            y1={0}
            x2={xScale(0)}
            y2={height}
            stroke="#000"
            strokeOpacity={1}
          />
          <text
            x={xScale(0)}
            y={-10}
            textAnchor="middle"
            alignmentBaseline="central"
            fontFamily="sans-serif"
            fontSize="12"
            fill="#808080"
            fillOpacity={1}
          >
            {0}
          </text>
        </g>
      </svg>
    </div>
  );
};
