const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("myParam");

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if (getParameterByName("api")) {
    CitizenUrl = getParameterByName("api");
}
if (getParameterByName("program")) {
    CitizenProgram = getParameterByName("program");
}
if (getParameterByName("type")) {
    CitizenType = getParameterByName("type");
}

console.log("CitizenUrl", CitizenUrl);
console.log("CitizenProgram", CitizenProgram);
console.log("CitizenType", CitizenType);