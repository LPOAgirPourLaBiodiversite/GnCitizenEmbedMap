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
    citizenUrl = getParameterByName("api");
}
if (getParameterByName("program")) {
    citizenProgram = getParameterByName("program");
}
if (getParameterByName("type")) {
    citizenType = getParameterByName("type");
}

console.log("citizenUrl", citizenUrl);
console.log("citizenProgram", citizenProgram);
console.log("citizenType", citizenType);