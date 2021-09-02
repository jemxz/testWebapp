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

// number of cpu cores present of device
const numberOfCpu = navigator.hardwareConcurrency;

// Device Memory
const deviceMemory = navigator.deviceMemory;

// Media Devices
navigator.mediaDevices.getUserMedia({audio: true})
.then(function(stream) {
  console.log(stream);
})
.catch(function(err) {
  console.log(err);
});
navigator.mediaDevices.getUserMedia({video: true})
.then(function(stream) {
  console.log("Audio Capture Device " + stream);
})
.catch(function(err) {
  console.log("Video Capture device: " + err);
});














console.log("Cookies: " + areCookiesEnabled);
console.log("Browser Language: " + browserLanguage);
console.log("Language: " + deviceLanguage);
console.log("Platform: " + devicePlatform);
console.log("Connection Speed: " + downloadSpeed);
console.log("Webdriver: " + isWebdriven);
console.log("number of cpu: " + navigator.hardwareConcurrency);
console.log("amount of storage: " + navigator.storage.estimate());
console.log("contacts: " + navigator.contacts);
console.log("deviceMemory: " + deviceMemory);
console.log("BrowserType: " );
console.log(userAgent[2]);
console.log("Geolocation: " );