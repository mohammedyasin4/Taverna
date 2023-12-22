const fileNameWithExtension = window.location.pathname.split('/').pop();
const fileName = fileNameWithExtension.split('.').slice(0, -1).join('.'); // To use for specific menus


function loadMenu() {
    for(const [key, value] of Object.entries(db.pagination)){
        $(".row").append(
            "<div class=\"col-6\">" +
            "<a href=\"menyer/" + key + ".html\">" +
            "<div class=\"card p-2 m-2\">"+
            "<div class=\"card-body\"><h5 class=\"card-title\">" + 
            key.replace(/-/g, ' ').replace(/\b\w/g, (match)=> match.toUpperCase()) + 
            "</h5></div></div></div>");
    }
}

function loadSpecificMenu(){
    for(const [key, value] of Object.entries(db.bbqs)){
        $(".row").append(
            "<div class=\"col-6\">" +
            "<a class=\"clickable-card\" href=\"#\">" +
            "<div class=\"card p-2 m-2 card-with-bg\" style=\"background-image:url('" + value.img + "');\">"+
            // "<img src=\"" + value.img + "\"/>" +
            "<div class=\"card-body\"><h5 class=\"card-title\">" + 
            value.name + "</h5>" + 
            "<p>" + value.dsc + "</p>" +
            "<p>" + value.price + " kr</p>" +
            "<p>Rating: " + value.rate + "/5</p>" +
            "<p>Origin: " + value.country + "</p>" +
            "</div></a></div>");
    }
}

