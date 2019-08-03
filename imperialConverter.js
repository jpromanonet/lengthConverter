document.getElementById("output").style.visibility = "hidden";
document.getElementById("feetInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let ft = e.target.value;
  document.getElementById("mtsOutput").innerHTML = ft / 3.281 + " m";
  document.getElementById("kmOutput").innerHTML = ft / 3280.84 + " Km";
  document.getElementById("cmOutput").innerHTML = ft * 30.48 + " cm";
  document.getElementById("mmOutput").innerHTML = ft * 304.8 + " mm";
  document.getElementById("mcmOutput").innerHTML = ft * 304800 + " mcn";
  document.getElementById("nmOutput").innerHTML = ft * 304800000 + " nm";
});
