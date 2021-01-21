import React from'react';
import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {	
  
      const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
          text: "I like to spend my free time...",
          fontSize: 25,
        },
        data: [{		
              		
                  type: "bar",
                  dataPoints: [
                      { label: "🏃‍♀️Running",  y: 50  },
                      { label: "🥊Boxing", y: 15  },
                      { label: "✈️Traveling", y: 25  },
                      { label: "🍣Eating",  y: 50  },
                      { label: "📚Reading",  y: 25  },
                      { label: "🎶Listening to Music ",  y: 50  }
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}/>
        </div>
      );
  }
export default Graph

