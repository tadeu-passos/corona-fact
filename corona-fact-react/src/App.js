import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyResponsiveLine from "./Charts/nivo01";
import { Solver } from "./Maths/odex";

function App() {
    const s = new Solver(1);
    const f = function(x, y) {
        return y;
    };

    const ret = s.solve(f, 0, [1], 1).y;
    console.log(ret);
  return (
    <div className="App">
        <div style={{height:'550px'}}>
            <MyResponsiveLine data={data}/>
        </div>
    </div>
  );
}

export default App;

const data = [
    {
        "id": "japan",
        "color": "hsl(132, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 187
            },
            {
                "x": "helicopter",
                "y": 136
            },
            {
                "x": "boat",
                "y": 110
            },
            {
                "x": "train",
                "y": 110
            },
            {
                "x": "subway",
                "y": 78
            },
            {
                "x": "bus",
                "y": 209
            },
            {
                "x": "car",
                "y": 214
            },
            {
                "x": "moto",
                "y": 241
            },
            {
                "x": "bicycle",
                "y": 224
            },
            {
                "x": "horse",
                "y": 164
            },
            {
                "x": "skateboard",
                "y": 25
            },
            {
                "x": "others",
                "y": 232
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(205, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 271
            },
            {
                "x": "helicopter",
                "y": 32
            },
            {
                "x": "boat",
                "y": 152
            },
            {
                "x": "train",
                "y": 211
            },
            {
                "x": "subway",
                "y": 190
            },
            {
                "x": "bus",
                "y": 296
            },
            {
                "x": "car",
                "y": 273
            },
            {
                "x": "moto",
                "y": 208
            },
            {
                "x": "bicycle",
                "y": 286
            },
            {
                "x": "horse",
                "y": 188
            },
            {
                "x": "skateboard",
                "y": 108
            },
            {
                "x": "others",
                "y": 179
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(299, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 149
            },
            {
                "x": "helicopter",
                "y": 104
            },
            {
                "x": "boat",
                "y": 286
            },
            {
                "x": "train",
                "y": 121
            },
            {
                "x": "subway",
                "y": 27
            },
            {
                "x": "bus",
                "y": 177
            },
            {
                "x": "car",
                "y": 66
            },
            {
                "x": "moto",
                "y": 133
            },
            {
                "x": "bicycle",
                "y": 167
            },
            {
                "x": "horse",
                "y": 42
            },
            {
                "x": "skateboard",
                "y": 0
            },
            {
                "x": "others",
                "y": 94
            }
        ]
    }
];