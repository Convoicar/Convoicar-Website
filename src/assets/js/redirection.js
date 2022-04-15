
'use strict';

(function() {
    if (window.location.hostname == "convoicar.fr"){
        var pathname = window.location.pathname
        if(pathname = "/"){
            window.location.href = "http://brikks.co/"
        }else if(pathname == "/audit-besoins"){
            window.location.href = "http://brikks.co/audit-mobilite-en-concession"
        }else if(pathname == "/cgu-convoicar"){
            window.location.href = "http://brikks.co/cgu-convoicar"
        }else if(pathname == "/contact"){
            window.location.href = "http://brikks.co/contact"
        }else if(pathname == "/devenir-jockey"){
            window.location.href = "http://brikks.co/devenir-jockey"
        }else if(pathname == "/error-illustration"){
            window.location.href = "http://brikks.co/error-illustration"
        }else if(pathname == "/error"){
            window.location.href = "http://brikks.co/error"
        }else if(pathname == "/index"){
            window.location.href = "http://brikks.co/index"
        }else if(pathname == "/la-plateforme"){
            window.location.href = "http://brikks.co/plateforme-de-gestion"
        }else if(pathname == "/les-jockeys"){
            window.location.href = "http://brikks.co/les-jockeys"
        }else if(pathname == "/mentions"){
            window.location.href = "http://brikks.co/mentions"
        }else if(pathname == "/offre-genius"){
            window.location.href = "http://brikks.co/offre-genius"
        }else if(pathname == "/qui-sommes-nous"){
            window.location.href = "http://brikks.co/qui-sommes-nous"
        }else if(pathname == "/rgpd"){
            window.location.href = "http://brikks.co/rgpd"
        }else if(
            pathname == "/service-de-livraison-de-vehicule" ||
            pathname == "/convoicar-pour-les-entreprises" ||
            pathname == "/service-de-jockey-apres-vente" ||
            pathname == "/offre-jockey"){
                window.location.href = "http://brikks.co/service-de-jockey"
        }else if(pathname == "/service-gestion-de-jockey" || pathname == "/gestion-de-jockey"){
            window.location.href = "http://brikks.co/gestion-de-jockey"
        }else if(pathname == "/service-gestion-mobilite-douce" || pathname == "/gestion-mobilite-douce"){
            window.location.href = "http://brikks.co/gestion-mobilite-douce"
        }else if(pathname == "/service-gestion-vehicule-courtoisie" || pathname == "/gestion-vehicule-courtoisie"){
            window.location.href = "http://brikks.co/gestion-vehicule-courtoisie"
        }else if(pathname == "/thanks"){
            window.location.href = "http://brikks.co/thanks"
        }else if(pathname == "/trash"){
            window.location.href = "http://brikks.co/trash"
        }
    }
})();