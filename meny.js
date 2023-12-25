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
    
    let temp;

    if(fileName == "breads"){
        temp = Object.entries(db.breads);
    }

    else if(fileName == "ice-cream"){
        temp = Object.entries(db["ice-cream"]);
    }

    else if(fileName == "best-foods"){
        temp = Object.entries(db["best-foods"]);
    }

    else if(fileName == "our-foods"){
        temp = Object.entries(db["our-foods"]);
    }

    else if(fileName == "pizzas"){
        temp = Object.entries(db["pizzas"]);
    }

    else if(fileName == "drinks"){
        temp = Object.entries(db["drinks"]);
    }

    else if(fileName == "burgers"){
        temp = Object.entries(db["burgers"]);
    }

    else if(fileName == "chocolates"){
        temp = Object.entries(db["chocolates"]);

    }
    
    else if(fileName == "fried-chicken"){
        temp = Object.entries(db["fried-chicken"]);
    }

    else if(fileName == "porks"){
        temp = Object.entries(db["porks"]);
    }

    else if(fileName == "steaks"){
        temp = Object.entries(db["steaks"]);
    }

    else if(fileName == "sausages"){
        temp = Object.entries(db["sausages"]);
    }

    else if(fileName == "bbqs"){
        temp = Object.entries(db["bbqs"]);
    }

    else if(fileName == "sandwiches"){
        temp = Object.entries(db["sandwiches"]);
    }

    else if(fileName == "desserts"){
        temp = Object.entries(db["desserts"]);
    }
    
    for(const [key, value] of temp){
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
            "</div></a></div>" +
            "<button class=\"btn btn-success\" onclick=\"showOrderConfirmation()\">Beställ " + value.name + "</button>");
    }
}

function specialOfferMenu(){

    let random1 = Math.floor(Math.random() * 15);
    let random2 = Math.floor(Math.random() * Object.entries(db)[random1][1].length);
    console.log("Random 1: " + random1);
    console.log("Random 2: " + random2);
    let special = Object.entries(db)[random1][1][random2];
    $(".special-offer").append(
        "<div class=\"col-12\">" +
        "<a class=\"clickable-card\" href=\"#\">" +
        "<div class=\"card p-2 m-2 card-with-bg\" style=\"background-image:url('" + special.img + "');\">"+
        "<div class=\"card-body\"><h5 class=\"card-title\">" + 
        special.name + "</h5>" + 
        "<p>" + special.dsc + "</p>" +
        "<p>" + special.price + " kr</p>" +
        "<p>Rating: " + special.rate + "/5</p>" +
        "<p>Origin: " + special.country + "</p>" +
        "</div></a></div>" +
        "<button class=\"btn btn-success\">Beställ " + special.name + "</button>");
}