import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./words";

const WordCloudView = () => {

    const options = {
        enableTooltip: true,
        deterministic: false,
        fontFamily: "impact",
        fontSizes: [5, 60],
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 1,
        rotations: 3,
        rotationAngles: [0, 90],
        scale: "sqrt",
        spiral: "archimedean",
        transitionDuration: 1000
    };

    function getCallback(callback) {
        return function (word, event) {
            const isActive = callback !== "onWordMouseOut";
            const element = event.target;
            const text = select(element);
            text
                .on("click", () => {
                    if (isActive) {
                        window.open(`https://duckduckgo.com/?q=${word.text}`, "_blank");
                    }
                })
                .transition()
                .attr("background", "white")
                .attr("font-size", isActive ? "300%" : "100%")
                .attr("text-decoration", isActive ? "underline" : "none");
        };
    }

    const callbacks = {
        getWordColor: (word) => (word.value > 50 ? "orange" : "purple"),
        getWordTooltip: (word) =>
            `La palabra "${word.text}" aparece ${word.value} veces.`,
        onWordClick: getCallback("onWordClick"),
        onWordMouseOut: getCallback("onWordMouseOut"),
        onWordMouseOver: getCallback("onWordMouseOver")
    };

    return (
        <div style={{ height: 400, width: 800 }}>
            <ReactWordcloud options={options} callbacks={callbacks} words={words} />
        </div>
    )
}

export default WordCloudView