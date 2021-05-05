# language: no
Egenskap: Betalingsinformasjon

  Som kunde av nettkiosken
  Ønsker jeg å kunne legge inn betalingsinformasjon
  Slik at jeg kan få godis i posten

  Scenario: Legge inn betalingsinformasjon
    Gitt at jeg har lagt inn varer i handlekurven
    Og trykket på Gå til betaling
    Når jeg legger inn navn, adresse, postnummer, poststed og kortnummer
    Og trykker på Fullfør kjøp
    Så skal jeg få beskjed om at kjøpet er registrert

    Gitt at jeg har lagt inn varer i handlekurven
    Og trykket på Gå til betaling
    Når jeg legger inn ugyldige verdier i feltene
    Så skal jeg få feilmeldinger for disse