import React from'react';
import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {	
  
      const options = {
        animationEnabled: true,
        theme: "light5",
        title: {
          text: "In my free time, I like to spendmy time..."
        },
        data: [{				
                  type: "bar",
                  dataPoints: [
                      { label: "Running",  y: 30  },
                      { label: "Boxing", y: 15  },
                      { label: "Traveling", y: 25  },
                      { label: "Eating",  y: 30  },
                      { label: "Reading",  y: 28  }
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
  }
export default Graph

/* App.js */
// import React from'react';
// let Component = React.Component;
// let CanvasJSReact = require('./canvasjs.react');
// let CanvasJS = CanvasJSReact.CanvasJS;
// let CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const Graph = () => {
// 		const options = {
// 			animationEnabled: true,
// 			theme: "light2",
// 			title:{
// 				text: "Most Popular Social Networking 