(()=>{"use strict";class e{constructor(e,t,n){if("lager"!==n&&"hoger"!==n)throw"Het antwoord moet 'lager' of 'hoger' zijn.";this._vraagStart=e,this._vraagEinde=t,this._juistAntwoord=n}render(e,t){e.innerHTML=`<span>${this._vraagStart}</span>\n            <br />\n            <button id="hoger">Hoger</button> <button id="lager">Lager</button>\n            <br />\n            <span>${this._vraagEinde}</span>`,document.getElementById("hoger").addEventListener("click",(e=>{t("hoger"===this._juistAntwoord),e.preventDefault()})),document.getElementById("lager").addEventListener("click",(e=>{t("lager"===this._juistAntwoord),e.preventDefault()}))}}const t=document.getElementById("spel"),n=new class{constructor(e){this._htmlElementToRenderIn=e}startSpel(){this._score=0,this._teStellenVragen=[];let t=class{static loadVragen(){return[new e("Het aantal studenten is","dan 14500.","hoger"),new e("Het aantal campussen van UCLL is","dan 10.","lager"),new e("Het aantal graduaten die je kan volgen bij UCLL is","dan 12.","hoger"),new e("Het aantal medewerkers van UCLL is","dan 1800.","lager")]}}.loadVragen();for(;t.length>0;){let e=Math.random()*t.length;e=Math.floor(e),this._teStellenVragen.push(t[e]),t.splice(e,1)}this._huidigeVraag=this._teStellenVragen.pop()}render(){this._htmlElementToRenderIn.innerHTML=`<section>\n                <p id="vraag">        \n                </p>\n            </section>\n            <section>\n                <p>Uw score is: ${this._score}</p>\n            </section>`,null!=this._huidigeVraag&&this._huidigeVraag.render(document.getElementById("vraag"),(e=>{e&&this._score++,this._teStellenVragen.length>0?this._huidigeVraag=this._teStellenVragen.pop():this._huidigeVraag=null,this.render()}))}}(t);n.startSpel(),n.render()})();