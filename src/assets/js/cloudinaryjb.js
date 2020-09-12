
'use strict';

(function() {

if (document.getElementById("img-band1")!==null) {

    var cl = new cloudinary.Cloudinary({cloud_name: "des7ayfwu", secure: true});
  // insertion de mes images au fur et à mesure
    var audi = cl.imageTag('logos/audi', {effect: "colorize", color: "#293462", height: 12, quality: 100, crop: "scale", format: "png"}).toHtml();
    // var getaround = cl.imageTag('logos/getaround', {effect: "colorize", color: "#293462", height: 30, quality: 100, crop: "scale", format: "png"}).toHtml();
    // var ada = cl.imageTag('logos/ada2', {effect: "colorize", color: "#293462", height: 20, quality: 100, crop: "scale", format: "png"}).toHtml();
    // var enterprise = cl.imageTag('logos/enterprise2', {transformation: [
    //   {effect: "make_transparent:66"},{effect: "colorize", color: "#293462", height: 30, quality: 100, crop: "scale", format: "png"}]}).toHtml();

    document.getElementById("img-band1").innerHTML = audi;
  };

})();
