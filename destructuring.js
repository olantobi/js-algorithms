const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

function getTempOfTomorrow(avgTemperature) {
    'use strict';

    const {tomorrow : tempOfTomorrow} = avgTemperature;
    return tempOfTomorrow;
}

function getMaxOfTomorrow(forecast) {
    'use strict';

    const {tomorrow : {max : maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

const half = (function() {

    return function half({max, min}) {
        return (max + min) / 2.0;
    }
})();

console.log(getTempOfTomorrow(AVG_TEMPERATURES));

console.log(getMaxOfTomorrow(LOCAL_FORECAST));

console.log(half(stats));