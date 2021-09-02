// Are cookies enabled
const areCookiesEnabled = navigator.cookieEnabled;

// What is Browser Langauge
const browserLanguage = navigator.browserLanguage;

// What is Device langauage
const deviceLanguage =  navigator.languages;

// What is the Device
const devicePlatform = navigator.platform

// What is the connection Speed
const downloadSpeed = navigator.connection.downlink

// what is type of browser
const userAgent = navigator.userAgentData.brands

//is the browser automated

const isWebdriven = navigator.webdriver

// GeoLocation from website
let geolocation = navigator.geolocation.getCurrentPosition(function (position) {
    const {latitude, longitude} = position.coords
    let currentPosition = [latitude, longitude]
    console.log(currentPosition);
})















console.log("Cookies: " + areCookiesEnabled);
console.log("Browser Language: " + browserLanguage);
console.log("Language: " + deviceLanguage);
console.log("Platform: " + devicePlatform);
console.log("Connection Speed: " + downloadSpeed);
console.log("Webdriver: " + isWebdriven);
console.log("number of cpu: " + navigator.hardwareConcurrency);
console.log("Media devices: " + navigator.mediaDevices.enumerateDevices(devices => {
    
}));
console.log("is online: " + navigator.onLine);
console.log("amount of storage: " + navigator.storage.estimate());
console.log("contacts: " + navigator.contacts);
console.log("deviceMemory: " + navigator.deviceMemory);
console.log("BrowserType: " );
console.log(userAgent[2]);
console.log("Geolocation: " );