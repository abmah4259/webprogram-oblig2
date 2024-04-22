let biletter = [];

function KjopBilett() {
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const epost = document.getElementById("epost").value;
    const telefon = document.getElementById("telefon").value;
    const antall = document.getElementById("antall").value;
    const film = document.getElementById("film").value;
    let feilmelding = false;

    const EpostPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const TelefonPattern = /^\d{8}$/;

    if(film === "Velg av Film"){
        document.getElementById("feilfilm").innerText = "velg en film"
        feilmelding = true;
    } else {
        document.getElementById("feilfilm").value = "";
    }
    if(antall === ""){
        document.getElementById("antallError").innerText = "Du må skrive inn et antall"
        feilmelding = true;
    } else {
        document.getElementById("antallError").value = "";
    }
    if(fornavn === ""){
        document.getElementById("fornavnError").innerText = "Du må skrive inn fornavn";
        feilmelding = true;
    } else {
        document.getElementById("fornavnError").value = "";
    }

    if(etternavn === ""){
        document.getElementById("etternavnError").innerText = "Du må skrive inn etternavn";
        feilmelding = true;
    } else {
        document.getElementById("etternavnError").value = "";
    }

    if(epost === ""){
        document.getElementById("epostError").innerText = "Du må skrive inn epost";
        feilmelding = true;
    }  else if(EpostPattern.test(epost)){
        document.getElementById("epostError").innerText = "Ugyldig epostadresse";
        feilmelding = true;
    } else {
        document.getElementById("epostError").value = "";
    }

    if(telefon === ""){
        document.getElementById("telefonError").innerText = "Du må skrive inn telefon";
        feilmelding = true;
    } else if (!TelefonPattern.test(telefon)){
        document.getElementById("telefonError").innerText = "ugyldig telefonnnummer";
        feilmelding = true
    } else {
        document.getElementById("telefonError").value = "";
    }
    if(feilmelding === false){
        const kunde = {
            film: film,
            fornavn: fornavn,
            etternavn: etternavn,
            epost: epost,
            antall: antall,
            telefon: telefon

        };
        biletter.push(kunde);

        document.getElementById("film").value = "Velg en film";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("epost").value = "";
        document.getElementById("telefon").value = "";
        document.getElementById("antall").value = "";


        document.getElementById("feilfilm").value = "";
        document.getElementById("fornavnError").value = "";
        document.getElementById("etternavnError").value = "";
        document.getElementById("epostError").value = "";
        document.getElementById("telefonError").value = "";
        document.getElementById("antallError").value = "";

        Viskunder();
    }

    function Viskunder() {
        let ut = "<table class='table table-striped'>";
        ut += "<tr><td>Film</td><td>Billetter</td>" + "<td>Fornavn</td><td>Etternavn</td><" + "td>Epost</th><td>Telefon</td></tr>";
        for(let bilett of biletter){
            ut += "<tr>" +
                "<td>" + bilett.film + "</td>" +
                "<td>" + bilett.antall + "</td>" +
                "<td>" + bilett.fornavn + "</td>" +
                "<td>" + bilett.etternavn + "</td>" +
                "<td>" + bilett.epost + "</td>" +
                "<td>" + bilett.telefon + "</td>" + "</tr>";
            ut += "</table>";
        }
        document.getElementById("kunder").innerHTML = ut;
    }

}
function Slett() {
    biletter.length = 0;
    document.getElementById("kunder").innerHTML = "";

}