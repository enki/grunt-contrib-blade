define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<div id=\"test\" class=\"test\"><span id=\"data\">data</span>");
if ( test)
{
buf.push("<div>testing 2</div>");
}
buf.push("</div>");
}
return buf.join("");
}

});