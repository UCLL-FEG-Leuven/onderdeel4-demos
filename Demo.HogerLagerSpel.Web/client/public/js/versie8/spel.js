import VragenLoader from "./vragen-loader.js";

export default class Spel {
    constructor(htmlElementToRenderIn) {
        this._htmlElementToRenderIn = htmlElementToRenderIn;
    }

    startSpel() {
        this._score = 0;
        this._teStellenVragen = [];

        let loadedVragen = VragenLoader.loadVragen();
        while (loadedVragen.length > 0) {
            let vraagIndex = Math.random() * loadedVragen.length; // [0...,1...[ -> [0..., loadedVragen.length[ 
            vraagIndex = Math.floor(vraagIndex); // [0, loadedVragen.length[ -> [0, loadedVragen.length-1]
            this._teStellenVragen.push(loadedVragen[vraagIndex]);
            loadedVragen.splice(vraagIndex, 1);
        }

        this._huidigeVraag = this._teStellenVragen.pop();        
    }

    render() {        
        this._htmlElementToRenderIn.innerHTML = 
            `<section>
                <p id="vraag">        
                </p>
            </section>
            <section>
                <p>Uw score is: ${this._score}</p>
            </section>`;

        if (this._huidigeVraag != null) {
            this._huidigeVraag.render(document.getElementById("vraag"), (juist) => {
                if (juist) this._score++;
                
                if (this._teStellenVragen.length > 0) {
                    this._huidigeVraag = this._teStellenVragen.pop();
                } else {
                    this._huidigeVraag = null;
                }            
                this.render();
            });    
        }
    }
}