function juguetos(x) {
    $.getJSON("../../JSON/jgt.json", function (data) {
        var items;
        items = data.home;
        switch (x) {
            case 1:
                items += data.secondary.servicios.menu;
                items += data.secondary.servicios.contact;
                break;
            case 2:
                items += data.secondary.portafolio.menu;
                items += data.secondary.portafolio.contact;
                break;
            case 3:
                items += data.secondary.nosotros.menu;
                items += data.secondary.nosotros.contact;
                break;
            case 4:
                items += data.secondary.experimentos.menu;
                items += data.secondary.experimentos.contact;
                break;
        }
        document.getElementById("fs-contact").innerHTML = data.contact;
        document.getElementById("fs-menu").innerHTML = items;
        document.getElementById("fs-footer").innerHTML = data.footer;
    });
}
