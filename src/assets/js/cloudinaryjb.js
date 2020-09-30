
'use strict';

(function() {

  var cl = new cloudinary.Cloudinary({cloud_name: "des7ayfwu", secure: true});

  var audi = cl.imageTag('convoicar_website/audi_s5wkiy', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var pld = cl.imageTag('convoicar_website/pld-tr_ga0rxv', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var topgarage = cl.imageTag('convoicar_website/topgarage_j5vofs', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var lexus = cl.imageTag('convoicar_website/lexus_pcqxzs', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var centralauto = cl.imageTag('convoicar_website/centralauto_thfmj3', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var vwvu = cl.imageTag('convoicar_website/vwvu_c875ni', {effect: "colorize", color: "#2EAADC", height: 70, quality: 100, crop: "scale", format: "png"}).toHtml();
  var vw = cl.imageTag('convoicar_website/vw_bt0oor', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var toyota = cl.imageTag('convoicar_website/toyota', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var seat = cl.imageTag('convoicar_website/seat_uoveak', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var neubauer = cl.imageTag('convoicar_website/neubauer_dp6040', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();

if (document.getElementById("img-band1")!==null) {
document.getElementById("img-band1").innerHTML = audi;
};
if (document.getElementById("img-band2")!==null) {
document.getElementById("img-band2").innerHTML = vwvu;
};
if (document.getElementById("img-band3")!==null) {
document.getElementById("img-band3").innerHTML = topgarage;
};
if (document.getElementById("img-band4")!==null) {
document.getElementById("img-band4").innerHTML = lexus;
};
if (document.getElementById("img-band5")!==null) {
document.getElementById("img-band5").innerHTML = neubauer;
};
if (document.getElementById("img-band6")!==null) {
document.getElementById("img-band6").innerHTML = lexus;
};
if (document.getElementById("img-band7")!==null) {
document.getElementById("img-band7").innerHTML = audi;
};
if (document.getElementById("img-band8")!==null) {
document.getElementById("img-band8").innerHTML = toyota;
};
if (document.getElementById("img-band9")!==null) {
document.getElementById("img-band9").innerHTML = seat;
};
if (document.getElementById("img-band10")!==null) {
  document.getElementById("img-band10").innerHTML = vw;
  };
  if (document.getElementById("img-band11")!==null) {
    document.getElementById("img-band11").innerHTML = pld;
    };
    if (document.getElementById("img-band12")!==null) {
      document.getElementById("img-band12").innerHTML = vw;
      };

})();
