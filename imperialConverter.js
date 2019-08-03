document.getElementById("output").style.visibility = "hidden";
document.getElementById("feetInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let ft = e.target.value;
  document.getElementById("mtsOutput").innerHTML = ft / 3.281 + " m";
  document.getElementById("kmOutput").innerHTML = ft / 3280.84 + " Km";
  document.getElementById("cmOutput").innerHTML = ft * 30.48 + " cm";
  document.getElementById("stOutput").innerHTML = kg / 6.35 + " st";
  document.getElementById("tnOutput").innerHTML = kg /  1000 + " tn";
});
