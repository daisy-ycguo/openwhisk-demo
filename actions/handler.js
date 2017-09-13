 function main(params) {
    var date = new Date();
    var now = (date.getHours() + ":" +
               date.getMinutes() + ":" +
               date.getSeconds());
    console.log("Invoked at: " + now );
    return { text: "It is " + now + " now."};
}
