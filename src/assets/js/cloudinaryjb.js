"use strict";

(function () {
    var cl = new cloudinary.Cloudinary({
        cloud_name: "des7ayfwu",
        secure: true,
    });

   
    var allianz = cl
        .imageTag("convoicar_website/Allianz.svg_qf2rvb", {
            height: 18,
            quality: 100,
            crop: "scale",
            format: "png",
        })
        .toHtml();
    var facemask = cl
        .imageTag("convoicar_website/facemask2", {
            effect: "colorize",
            color: "#211F2D",
            height: 50,
            quality: 100,
            crop: "scale",
            format: "png",
        })
        .toHtml();
    var customerreview = cl
        .imageTag("convoicar_website/5-stars", {
            effect: "colorize",
            color: "#211F2D",
            height: 50,
            quality: 100,
            format: "png",
        })
        .toHtml();
    var bouclier = cl
        .imageTag("convoicar_website/Assurance-icon", {
            effect: "colorize",
            color: "#211F2D",
            height: 50,
            quality: 100,
            crop: "scale",
            format: "png",
        })
        .toHtml();

    
    if (document.getElementById("allianz") !== null) {
        document.getElementById("allianz").innerHTML = allianz;
    }
    if (document.getElementById("facemask") !== null) {
        document.getElementById("facemask").innerHTML = facemask;
    }
    if (document.getElementById("customerreview") !== null) {
        document.getElementById("customerreview").innerHTML = customerreview;
    }
    if (document.getElementById("bouclier") !== null) {
        document.getElementById("bouclier").innerHTML = bouclier;
    }
})();
