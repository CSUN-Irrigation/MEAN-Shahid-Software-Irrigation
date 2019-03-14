$(document).ready( () => {
    init();
});

function init() {
    let dashboardButton = document.querySelector("#dashboard");
    let scheduleButton = document.querySelector("#schedule");
    let controllersButton = document.querySelector("#controllers");
    let waterUsageButton = document.querySelector("#waterUsage");
    let settingsButton = document.querySelector("#settings");

    let dashboardDiv = document.querySelector("div#dashboardDiv");
    let scheduleDiv = document.querySelector("div#scheduleDiv");
    let controllersDiv = document.querySelector("div#controllersDiv");
    let waterUsageDiv = document.querySelector("div#waterUsageDiv");
    let settingsDiv = document.querySelector("div#settingsDiv");

    dashboardButton.addEventListener( 'click', () => {
        console.log("clicked dashboardButton");
        $(dashboardDiv).attr("style", "display:block");
        $(scheduleDiv).attr("style", "display:none");
        $(controllersDiv).attr("style", "display:none");
        $(waterUsageDiv).attr("style", "display:none");
        $(settingsDiv).attr("style", "display:none");
    });

    scheduleButton.addEventListener( 'click', () => {
        console.log("clicked scheduleButton");
        $(dashboardDiv).attr("style", "display:none");
        $(scheduleDiv).attr("style", "display:block");
        $(controllersDiv).attr("style", "display:none");
        $(waterUsageDiv).attr("style", "display:none");
        $(settingsDiv).attr("style", "display:none");
    });

    controllersButton.addEventListener( 'click', () => {
        console.log("clicked controllersButton");
        $(dashboardDiv).attr("style", "display:none");
        $(scheduleDiv).attr("style", "display:none");
        $(controllersDiv).attr("style", "display:block");
        $(waterUsageDiv).attr("style", "display:none");
        $(settingsDiv).attr("style", "display:none");
    });

    waterUsageButton.addEventListener( 'click', () => {
        console.log("clicked waterUsageButton");
        $(dashboardDiv).attr("style", "display:none");
        $(scheduleDiv).attr("style", "display:none");
        $(controllersDiv).attr("style", "display:none");
        $(waterUsageDiv).attr("style", "display:block");
        $(settingsDiv).attr("style", "display:none");
    });

    settingsButton.addEventListener( 'click', () => {
        console.log("clicked settingsButton");
        $(dashboardDiv).attr("style", "display:none");
        $(scheduleDiv).attr("style", "display:none");
        $(controllersDiv).attr("style", "display:none");
        $(waterUsageDiv).attr("style", "display:none");
        $(settingsDiv).attr("style", "display:block");
    });
}