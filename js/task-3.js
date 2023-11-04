function getElementWidth(content, padding, border) {
    console.log((Number.parseFloat(content)) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border));
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
