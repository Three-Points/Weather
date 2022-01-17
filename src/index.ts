// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { getWeather } from './networking/weather';

// Add an event listener to the button
export const displayWeather = async () => {
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    }
}

if (buttonClick) buttonClick.addEventListener('click', displayWeather);
// Create an async function to call the API method
