document.getElementById("output").style.visibility = "hidden";
document.getElementById("metricInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let mts = e.target.value;
  document.getElementById("feetOutput").innerHTML = mts * 3.281 + " ft";
  document.getElementById("mlOutput").innerHTML = mts / 1609.344 + " ml";
  document.getElementById("ozOutput").innerHTML = lbs * 16 + " Oz";
  document.getElementById("stOutput").innerHTML = lbs / 14 + " st";
  document.getElementById("tnOutput").innerHTML = lbs /  2204.623 + " tn";
});
