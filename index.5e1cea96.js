Array.from(document.querySelectorAll(".field-text")).forEach(function(e){var r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for","".concat(e.id));var t=(e.name[0].toUpperCase()+e.name.slice(1)).replace(/([a-z])([A-Z])/g,"$1 $2");r.innerText=t,e.placeholder=t,e.parentNode.insertBefore(r,e)});
//# sourceMappingURL=index.5e1cea96.js.map
