function getTimestamp() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var formattedDate = d + "." + m + "." + y + " " + h + ":" + min + ":" + s;
    return formattedDate;
}

module.exports = getTimestamp;
