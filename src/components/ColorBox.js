import React, { useState } from "react";
import ReactClipboard from "react-clipboard-simple";

import "./ColorBox.scss";

const ColorBox = () => {
  const [angle, setAngle] = useState(30);
  const [firstColor, setFirstColor] = useState({
    r: 130,
    g: 21,
    b: 58,
    a: 1,
    percentage: 12,
  });
  const [secondColor, setSecondColor] = useState({
    r: 169,
    g: 186,
    b: 24,
    a: 1,
    percentage: 35,
  });

  let str = `background: linear-gradient( ${angle}deg, rgba(${firstColor.r}, ${firstColor.g},${firstColor.b}, ${firstColor.a}) ${firstColor.percentage}%, rgba(${secondColor.r}, ${secondColor.g},${secondColor.b}, ${secondColor.a}) ${secondColor.percentage}%)`;

  return (
    <div>
      <ReactClipboard keyword={str}>
        <h1
          style={{
            background: `linear-gradient( ${angle}deg, rgba(${firstColor.r}, ${firstColor.g},${firstColor.b}, ${firstColor.a}) ${firstColor.percentage}%, rgba(${secondColor.r}, ${secondColor.g},${secondColor.b}, ${secondColor.a}) ${secondColor.percentage}%)`,
            fontSize: "1.75em",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            textShadow: "0 0 0px rgb(0 0 0 / 64%)",
          }}
          className="gradient-header"
        >
          {str}
        </h1>
      </ReactClipboard>
      <small>Just click on the gradient to copy</small>
      <div
        className="color-box"
        style={{
          background: `linear-gradient( ${angle}deg, rgba(${firstColor.r}, ${firstColor.g},${firstColor.b}, ${firstColor.a}) ${firstColor.percentage}%, rgba(${secondColor.r}, ${secondColor.g},${secondColor.b}, ${secondColor.a}) ${secondColor.percentage}%)`,
        }}
      ></div>
      <div className="ranges">
        {/* Angle */}
        <div className="angle">
          <input
            className="angle-range"
            type="range"
            min="0"
            max="360"
            step="1"
            onChange={(e) => setAngle(e.target.value)}
          />
        </div>
        {/* First Color */}

        <div className="d-flex range">
          <input
            className="input-colors"
            type="range"
            min="0"
            max="255"
            step="1"
            onChange={(e) =>
              setFirstColor({ ...firstColor, r: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="255"
            step="1"
            onChange={(e) =>
              setFirstColor({ ...firstColor, g: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="255"
            step="1"
            onChange={(e) =>
              setFirstColor({ ...firstColor, b: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={(e) =>
              setFirstColor({ ...firstColor, a: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="100"
            step="1"
            onChange={(e) =>
              setFirstColor({ ...firstColor, percentage: e.target.value })
            }
          />
        </div>
        {/* Second Color */}
        <div className="d-flex range">
          <input
            className="input-colors"
            type="range"
            min="0"
            max="255"
            step="1"
            onChange={(e) =>
              setSecondColor({ ...secondColor, r: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="255"
            step="1"
            onChange={(e) =>
              setSecondColor({ ...secondColor, g: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="255"
            step="1"
            onChange={(e) =>
              setSecondColor({ ...secondColor, b: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={(e) =>
              setSecondColor({ ...secondColor, a: e.target.value })
            }
          />
          <input
            className="input-colors"
            type="range"
            min="0"
            max="100"
            step="1"
            onChange={(e) =>
              setSecondColor({ ...secondColor, percentage: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
