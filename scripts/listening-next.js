function reply_click(clicked_id)
{
    albumName = document.getElementById("album-name")
    albumArtist = document.getElementById("album-artist")
    albumOverview = document.getElementById("album-overview")
    albumArt = document.getElementById("album-img")

    switch (clicked_id) {
        default:
            albumName.innerHTML = "U.U.F.O.";
            albumArtist.innerHTML = "Camellia/Cametek";
            albumOverview.innerHTML = "placeholder";
            albumArt.src = "https://f4.bcbits.com/img/a2760613898_16.jpg";
            break;

        case 'UUFO':
            albumName.innerHTML = "U.U.F.O.";
            albumArtist.innerHTML = "Camellia/Cametek";
            albumOverview.innerHTML = "placeholder";
            albumArt.src = "https://f4.bcbits.com/img/a2760613898_16.jpg";
            break;

        case 'Blackmagik-Blazing':
            albumName.innerHTML = "Blackmagik Blazing";
            albumArtist.innerHTML = "Camellia/Cametek";
            albumOverview.innerHTML = "placeholder";
            albumArt.src = "https://f4.bcbits.com/img/a2312567325_16.jpg";
            break;
        case 'Wavestation-Fm':
            albumName.innerHTML = "WAVESTATION-FM";
            albumArtist.innerHTML = "Lordsun & CubeNatural"
            albumOverview.innerHTML = "placeholder"
            albumArt.src = "https://f4.bcbits.com/img/a1374700780_16.jpg"
            break;

    }
}