"use strict";

window.addEventListener("load", function () {
    var markDownEl = document.querySelector(".editor > .right > pre");
    new MediumEditor(".editor > .left", {
        toolbar: {
            buttons: ['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'h1', 'h2', 'h3', 'h4', 'unorderedlist', 'orderedlist', 'anchor', 'image', 'removeFormat']
        },
        extensions: {
            markdown: new MeMarkdown(function (md) {
                markDownEl.textContent = md;
            })
        }
    });
});