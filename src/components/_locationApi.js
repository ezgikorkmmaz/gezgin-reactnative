import * as Location from 'react-native-location';

const httpGetAsync = (theUrl, callback) => {
    var xmlHttp = new XMLHttpRequest();
    baseURL: 'http://www.ahmetbahadireyuboglu.com/api/v2/vehicle/query/current/allstatus',
    xmlHttp.open("GET", baseUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
};
