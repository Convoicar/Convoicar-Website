
'use strict';

(function() {

  var cl = new cloudinary.Cloudinary({cloud_name: "des7ayfwu", secure: true});
  var audi = cl.imageTag('logos/audi', {effect: "colorize", color: "white", height: 12, quality: 100, crop: "scale", format: "png"}).toHtml();

if (document.getElementById("img-band1")!==null) {
document.getElementById("img-band1").innerHTML = audi;
};
if (document.getElementById("img-band2")!==null) {
document.getElementById("img-band2").innerHTML = audi;
};
if (document.getElementById("img-band3")!==null) {
document.getElementById("img-band3").innerHTML = audi;
};
if (document.getElementById("img-band4")!==null) {
document.getElementById("img-band4").innerHTML = audi;
};
if (document.getElementById("img-band5")!==null) {
document.getElementById("img-band5").innerHTML = audi;
};
if (document.getElementById("img-band6")!==null) {
document.getElementById("img-band6").innerHTML = audi;
};
if (document.getElementById("img-band7")!==null) {
document.getElementById("img-band7").innerHTML = audi;
};
if (document.getElementById("img-band8")!==null) {
document.getElementById("img-band8").innerHTML = audi;
};
if (document.getElementById("img-band9")!==null) {
document.getElementById("img-band9").innerHTML = audi;
};
if (document.getElementById("img-band10")!==null) {
  document.getElementById("img-band10").innerHTML = audi;
  };
  if (document.getElementById("img-band11")!==null) {
  document.getElementById("img-band11").innerHTML = audi;
  };
  if (document.getElementById("img-band12")!==null) {
  document.getElementById("img-band12").innerHTML = audi;
  };


})();
