import React from 'react'
import * as d3 from "d3";

class DonutChart extends React.Component {
   constructor(props){
      super(props)
      this.createDonutChart = this.createDonutChart.bind(this)
   }

   componentDidMount() {
      this.createDonutChart(this.props.value, this.props.lowerLimit, this.props.upperLimit, this.props.delay, this.props.diameter)
   }

  createDonutChart(value, lowerLimit, upperLimit, delay, diameter) {
     var width = diameter,
         height = diameter,
         transitionDuration = 1200,
         tau = 2 * Math.PI

    const node = this.node

     var svg = d3.select(node)

     var arc = d3.arc()
       .innerRadius(diameter/4)
       .outerRadius(diameter/2)
       .startAngle(0)

     var convertValueToRadians = d3.scaleLinear()
       .range([0, 6.28319])
       .domain([lowerLimit, upperLimit])

     var color = d3.scaleLinear()
       .domain([0, tau])
       .range(['gray', 'black'])

     var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

     var background = g.append("path")
       .datum({endAngle: tau})
       .style("fill", "#ddd")
       .attr("d", arc)

     var foreground = g.append("path")
       .datum({endAngle: .1})
       .style("fill", color(.1))
       .attr("d", arc)

     foreground.transition()
       .duration(transitionDuration)
       .delay(delay)
       .attrTween("d", arcTween(convertValueToRadians(value)))
       .style('fill', color(convertValueToRadians(value)))

     function arcTween(newAngle) {
       return function(d) {
         var interpolate = d3.interpolate(d.endAngle, newAngle)
         return function(t) {
           d.endAngle = interpolate(t)
           return arc(d)
         }
       }
     }

     var text = svg.insert('text')
       .text(lowerLimit)
       .attr("text-anchor", "middle")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

     text.transition()
       .duration(transitionDuration)
       .delay(delay)
       .tween("text", numberTween(value))

     function numberTween(newValue) {
       return function(){
         let that = this
         var interpolate = d3.interpolate(this.textContent, newValue)
           return function(t) {
             that.textContent = Math.round(interpolate(t))
           }
       }
     }
   }

render() {
      return <svg ref={node => this.node = node}
      width={this.props.diameter} height={this.props.diameter}>
      </svg>
   }
}

export default DonutChart
