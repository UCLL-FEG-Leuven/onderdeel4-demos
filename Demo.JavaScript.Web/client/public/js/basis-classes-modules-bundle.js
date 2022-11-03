(()=>{var e={284:()=>{console.log("*** conditional.js ***");console.log("reduction: 5%"),console.log("connecting...")},645:()=>{console.log("*** exceptions.js ***");try{throw"Er is een onverwachte fout opgetreden, contacteer de helpdesk."}catch(e){console.error(e)}},194:()=>{console.log("*** functions.js ***"),document.getElementById("basics-functions-decl").innerHTML=3,document.getElementById("basics-functions-expr").innerHTML=3,document.getElementById("basics-functions-arrow").innerHTML=3},797:()=>{console.log("*** input.js ***"),document.getElementById("basics-input-dom-in").addEventListener("input",(function(){document.getElementById("basics-input-dom-out").value=document.getElementById("basics-input-dom-in").value})),document.getElementById("basics-input-dom-button").addEventListener("click",(function(e){document.getElementById("basics-input-dom-out2").value=document.getElementById("basics-input-dom-in").value,e.preventDefault()}))},594:()=>{console.log("*** loops.js ***");for(var e=0;e<10;e++)5!==e&&console.log(e);for(;;){console.log("In while...");break}var o=!1;do{console.log("In do while..."),o=!0}while(!o)},311:()=>{for(let e=1;e<=7;e++){let o=Math.round(45*Math.random()),n=Math.max(1,o);document.getElementById("bal"+e).value=n}},440:()=>{console.log("*** objects.js ***");var e={voornaam:"Tim",familienaam:"Berners-Lee",toString:function(){return this.voornaam+" "+this.familienaam}};for(var o in document.getElementById("basics-objects-www").innerHTML=e.toString(),e)console.log(o+": "+e[o])},410:()=>{console.log("*** output.js ***"),console.log("Een informatieve boodschap"),console.warn("Een waarschuwing."),console.error("Een fout."),document.getElementById("basics-output-dom").innerText="Deze tekst werd vanuit output.js gestuurd.",document.getElementById("basics-output-dom2").innerHTML="Je kan ook een HTML string genereren en invoegen.<ul><li>Zo kan je dynamisch HTML genereren</li><li>Later zullen we ook zien hoe we dat via de DOM kunnen doen.</li></ul>",document.getElementById("basics-output-dom3").value="Ook de value en styling kan je instellen.",document.getElementById("basics-output-dom3").className="bg-warning",document.getElementById("basics-output-dom4").style.display="none";let e=document.querySelectorAll("section h3");console.log("Aantal H3's in sections: "+e.length);let o=document.querySelector("section h3");console.log("Tekst van eerste H3 in section: "+o.innerText)},842:()=>{console.log("*** types.js ***"),console.log("Hello world"),console.log(18),console.log(20.5);var e=["GIAdPG4","GIAdPG5"];console.log(e),console.log(e.length),console.log(e[0]),console.log(e[1])},207:()=>{console.log("*** var-let-const.js ***"),console.log("- const");const e=3.14;console.log("PI: "+e);try{e=3.14159}catch(e){console.log("PI (changed): "+e)}console.log("- var"),console.log("-- var scoping"),function(){if(1==(e=1)){var e=2;console.log("De waarde van x in de if-block: "+e)}console.log("De waarde van x buiten de if-block: "+e)}(),console.log("-- var hoisting"),function(){console.log("x + ' ' + y: 1 "+e);var e=2}(),console.log("- let"),console.log("-- let scoping"),function(){{let e=2;console.log(e)}console.log(1)}(),console.log("-- geen let hoisting"),function(){try{console.log("1 "+e)}catch(e){console.log("Een 'let' variabele gebruiken vooraleer deze gedeclareerd is; is niet toegelaten.")}let e=2}()},997:()=>{var e=new class{constructor(e,o){this._voornaam=e,this._familienaam=o}get voornaam(){return this._voornaam}get familienaam(){return this._familienaam}volledigeNaam(){return this.voornaam+" "+this.familienaam}}("Brendan","Eich");for(prop in document.getElementById("classes-objects-js").innerHTML=e.volledigeNaam(),e)console.log(prop+": "+e[prop])}},o={};function n(t){var s=o[t];if(void 0!==s)return s.exports;var l=o[t]={exports:{}};return e[t](l,l.exports,n),l.exports}(()=>{"use strict";n(410),n(207),n(842),n(645),n(284),n(594),n(194),n(440),n(311),n(797),n(997);class e extends class{getWeatherForCurrentLocation(e){return null}}{static get apiKey(){return"e3c03bc457a2bca1463a28cfbf66b5a4"}getWeatherForCurrentLocation(o){!function(e){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(o){e(o.coords.latitude,o.coords.longitude)})):setTimeout(e(null,null))}((function(n,t){!function(e,o){let n=new XMLHttpRequest;n.onreadystatechange=function(){!function(e,o){if(4===e.readyState){let n;n=e.responseText?JSON.parse(e.responseText):200===e.status?{status:"success"}:e.status>=400&&e.status<500?{status:"fail",data:{message:"Status code "+e.status+" returned."}}:{status:"error",message:"Status code "+e.status+" returned."},o&&o(n)}}(n,o)},n.open("GET",e,!0),n.send()}("https://api.openweathermap.org/data/2.5/weather?lat="+n+"&lon="+t+"&APPID="+e.apiKey,(function(e){e&&e.weather&&e.weather[0]?o(e.weather[0].description):(o("?"),console.warn(e))}))}))}}(new e).getWeatherForCurrentLocation((function(e){document.getElementById("modules-example").innerHTML=e}))})()})();
//# sourceMappingURL=basis-classes-modules-bundle.js.map