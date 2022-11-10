class Vraag {
    constructor(vraagStart, vraagEinde, juistAntwoord) {
        if (juistAntwoord !== "lager" && juistAntwoord !== "hoger") {
            throw "Het antwoord moet 'lager' of 'hoger' zijn.";
        }

        this._vraagStart = vraagStart;
        this._vraagEinde = vraagEinde;
        this._juistAntwoord = juistAntwoord;
    }

    render(htmlElementToRenderIn, vraagWerdBeantwoordCallback) { 
        htmlElementToRenderIn.innerHTML = 
            `<span>${this._vraagStart}</span>
            <br />
            <button id="hoger">Hoger</button> <button id="lager">Lager</button>
            <br />
            <span>${this._vraagEinde}</span>`;

        document.getElementById("hoger").addEventListener("click", (e) => {
            vraagWerdBeantwoordCallback("hoger" === this._juistAntwoord);
            e.preventDefault();
        });
        document.getElementById("lager").addEventListener("click", (e) => {
            vraagWerdBeantwoordCallback("lager" === this._juistAntwoord);
            e.preventDefault();
        });        
    }
}