import React from "react";
import {
    IconCloudy,
    IconThunderstorm,
    IconDrizzle,
    IconRain,
    IconSnow,
    IconSunny
} from "../../icons";

const WeatherIcon = ({ code }) => {
    let result;
    switch(code) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
           result = <IconThunderstorm />;
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
            result = <IconDrizzle />;
            break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            result = <IconRain/>;
            break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            result = <IconSnow/>;
            break;
        case 800:
            result = <IconSunny/>
            break;
        case 801:
        case 802:
        case 803:
        case 804:
            result = <IconCloudy/>;
            break;
        default:
            result = <IconCloudy/>;
            break;
    }
   return result;
}

export default WeatherIcon;