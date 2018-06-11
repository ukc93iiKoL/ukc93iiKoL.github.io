$(document).foundation();
$(document).ready(function() {
    // alert('Foundation Core Version: ' + Foundation.version);
    // alert('Foundation DropDown Version:' + Foundation.libs.dropdown.version);
    $.localScroll.hash();
    $.localScroll({
        hash: true,
        offset: {
            top: -63
        }
    });
    $("a.blank").attr("target", "_blank");
    // $.get("https://api.facebook.com/method/fql.query?query=select%20like_count%20from%20link_stat%20where%20url=%27http://www.facebook.com/musilieu/%27&format=json", function(a) {
    //     $("#fb-likes").html(a[0].like_count);
    // })
});
