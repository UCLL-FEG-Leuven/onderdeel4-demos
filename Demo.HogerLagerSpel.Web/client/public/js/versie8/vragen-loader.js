import Vraag from "./vraag.js";

export default class VragenLoader {
    static loadVragen() {
        return [
            new Vraag(
                "Het aantal studenten is",
                "dan 14500.",
                "hoger"
            ),
            new Vraag(
                "Het aantal campussen van UCLL is",
                "dan 10.",
                "lager"
            ),
            new Vraag(
                "Het aantal graduaten die je kan volgen bij UCLL is",
                "dan 12.",
                "hoger"
            ),
            new Vraag(
                "Het aantal medewerkers van UCLL is",
                "dan 1800.",
                "lager"
            ),
        ];
    }
}