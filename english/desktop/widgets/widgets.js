function widgets(x) {
    $.getJSON("../../JSON/wdg.json", function (data) {
        var items;
        console.log();
        items = data.home;
        switch (x) {
            case 1:
                items += data.secondary.services.menu;
                items += data.secondary.services.contact;
                break;
            case 2: 
                items += data.secondary.portfolio.menu;
                items += data.secondary.portfolio.contact;
                break;
            case 3:
                items += data.secondary.about.menu;
                items += data.secondary.about.contact;
                break;
            case 4:
                items += data.secondary.experiments.menu;
                items += data.secondary.experiments.contact;
                break;
        }
        document.getElementById("fs-contact").innerHTML = data.contact;
        document.getElementById("fs-menu").innerHTML = items;
        document.getElementById("fs-footer").innerHTML = data.footer;
    });
}
    