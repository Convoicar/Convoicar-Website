
'use strict';

(function() {

  var cl = new cloudinary.Cloudinary({cloud_name: "des7ayfwu", secure: true});

  var audi = cl.imageTag('convoicar_website/audi_s5wkiy', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var firststop = cl.imageTag('convoicar_website/firststop_uku9rt', {effect: "colorize", color: "#2EAADC", height: 40, quality: 100, crop: "scale", format: "png"}).toHtml();
  var topgarage = cl.imageTag('convoicar_website/topgarage_j5vofs', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var lexus = cl.imageTag('convoicar_website/lexus_pcqxzs', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var mini = cl.imageTag('convoicar_website/mini', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var vwvu = cl.imageTag('convoicar_website/vwvu_c875ni', {effect: "colorize", color: "#2EAADC", height: 70, quality: 100, crop: "scale", format: "png"}).toHtml();
  var vw = cl.imageTag('convoicar_website/vw_bt0oor', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var toyota = cl.imageTag('convoicar_website/toyota', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var seat = cl.imageTag('convoicar_website/seat_uoveak', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var fiat = cl.imageTag('convoicar_website/fiat1234', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var jeep = cl.imageTag('convoicar_website/jeep_s8qpih', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var alfaromeo = cl.imageTag('convoicar_website/alfaromeo', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var bmw = cl.imageTag('convoicar_website/bmw2', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var maserati = cl.imageTag('convoicar_website/maserati', {effect: "colorize", color: "#2EAADC", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var allianz = cl.imageTag('convoicar_website/Allianz.svg_qf2rvb', {height: 18, quality: 100, crop: "scale", format: "png"}).toHtml();
  var facemask = cl.imageTag('convoicar_website/facemask2', {effect: "colorize", color: "#7BEACA", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var customerreview = cl.imageTag('convoicar_website/5-stars', {effect: "colorize", color: "#7BEACA", height: 50, quality: 100, format: "png"}).toHtml();
  var bouclier = cl.imageTag('convoicar_website/Assurance-icon', {effect: "colorize", color: "#7BEACA", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  

if (document.getElementById("img-band1")!==null) {
document.getElementById("img-band1").innerHTML = alfaromeo;
};
if (document.getElementById("img-band2")!==null) {
document.getElementById("img-band2").innerHTML = audi
};
if (document.getElementById("img-band3")!==null) {
document.getElementById("img-band3").innerHTML = bmw;
};
if (document.getElementById("img-band4")!==null) {
document.getElementById("img-band4").innerHTML = lexus;
};
if (document.getElementById("img-band5")!==null) {
document.getElementById("img-band5").innerHTML = firststop;
};
if (document.getElementById("img-band6")!==null) {
document.getElementById("img-band6").innerHTML = fiat;
};
if (document.getElementById("img-band7")!==null) {
document.getElementById("img-band7").innerHTML = jeep;
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
document.getElementById("img-band11").innerHTML = mini;
};
if (document.getElementById("img-band12")!==null) {
document.getElementById("img-band12").innerHTML = topgarage;
};
if (document.getElementById("img-band13")!==null) {
document.getElementById("img-band13").innerHTML = vwvu;
};
if (document.getElementById("img-band14")!==null) {
document.getElementById("img-band14").innerHTML = maserati;
};
if (document.getElementById("allianz")!==null) {
  document.getElementById("allianz").innerHTML = allianz;
};
if (document.getElementById("facemask")!==null) {
  document.getElementById("facemask").innerHTML = facemask;
};
if (document.getElementById("customerreview")!==null) {
  document.getElementById("customerreview").innerHTML = customerreview;
};
if (document.getElementById("bouclier")!==null) {
  document.getElementById("bouclier").innerHTML = bouclier;
};

})();
