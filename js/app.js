/**
 * Created by gera on 11.07.15.
 */
$(document).ready(function() {
    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    });
});