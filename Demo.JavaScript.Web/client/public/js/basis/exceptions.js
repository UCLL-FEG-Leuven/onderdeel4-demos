console.log("*** exceptions.js ***");

try {
    throw "Er is een onverwachte fout opgetreden, contacteer de helpdesk.";
    
    console.log("Dit zal nooit gelogd worden...");
}
catch (e) {
        // Normaal toon je dat aan de gebruiker (liefst niet met alert!) en log je dat in de databank.
    console.error(e);
}
finally {
    console.log("Een finally block wordt altijd uitgevoerd (ongeacht of er een exception is opgetreden of niet).");
}

console.log("Dit zal wel gelogd worden...");