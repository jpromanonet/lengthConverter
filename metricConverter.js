document.getElementById("output").style.visibility = "hidden";
document.getElementById("metricInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let mts = e.target.value;
  document.getElementById("feetOutput").innerHTML = mts * 3.281 + " ft";
  document.getElementById("mlOutput").innerHTML = mts / 1609.344 + " ml";
  document.getElementById("ydOutput").innerHTML = mts * 1.094 + " yd";
  document.getElementById("inOutput").innerHTML = mts * 39,37 + " in";
  document.getElementById("nmOutput").innerHTML = mts / 1852 + " nm";
});
