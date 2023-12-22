function loadMenu() {
    for(const [key, value] of Object.entries(db.pagination)){
        $(".row").append(
            "<div class=\"col-6\">" +
            "<div class=\"card p-2 m-2\">"+
            "<div class=\"card-body\"><h5 class=\"card-title\">" + 
            key.replace(/-/g, ' ').replace(/\b\w/g, (match)=> match.toUpperCase()) + 
            "</h5></div></div></div>");
    }
}