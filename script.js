document.addEventListener("keydown", function(event) {
    const keyName = event.key;
    const keyCode = event.keyCode;
    // document.getElementById("output").innerHTML = `<p>Key Pressed: ${keyName}</p><p>Key Code: ${keyCode}</p>`;
    setTimeout(function() {
        document.getElementById("output").innerHTML = `<p>Key Pressed: ${keyName}</p><p>Key Code: ${keyCode}</p>`;
    }, 1000);
});
document.addEventListener("keyup", function() {
    document.getElementById("output").innerHTML = "";
});