function reply_click(clicked_id)
{
    albumName = document.getElementById("album-name")
    albumArtist = document.getElementById("album-artist")
    albumOverview = document.getElementById("album-overview")
    albumArt = document.getElementById("album-img")

    switch (clicked_id) {
        case 'Scratchin-Melodii':
            albumName.innerHTML = "SCRATCHIN' MELODII";
            albumArtist.innerHTML = "LJ Lephemstar";
            albumOverview.innerHTML = "The complete OST to a game demo of the same name. Full of pure funky vibes that'll be sure to bring some nostagia. Very much inspired by games like Parappa the Rapper and Um Jammer Lammy.";
            albumArt.src = "https://f4.bcbits.com/img/a1604847479_16.jpg";
            break;

        case 'Teeth-Restoration':
            albumName.innerHTML = "TEETH RESTORATION";
            albumArtist.innerHTML = "bye2";
            albumOverview.innerHTML = "A chaotic album consisting of harsh breakbeats and incredibly fast paced rhythms. You're sure to be in for a ride.";
            albumArt.src = "https://f4.bcbits.com/img/a2209901019_16.jpg";
            break;
        
        case 'GHOST_WORM':
            albumName.innerHTML = "GHOST_WORM";
            albumArtist.innerHTML = "bye2";
            albumOverview.innerHTML = "An album that mixes together the fast-paced nature of breakbeat/drum and based with the unmatched flow of reggae. A very chill/chaotic vibe throughout each song.";
            albumArt.src = "https://f4.bcbits.com/img/a1157768453_16.jpg";
            break;
        
        case 'Metamorphose':
            albumName.innerHTML = "Metamorphose";
            albumArtist.innerHTML = "bye2";
            albumOverview.innerHTML = "An experimental take on drum and bass with more etherial sounds in most of its tracks. Consits of 4 \"Injections\" that serve as breaks throughout the album.";
            albumArt.src = "https://f4.bcbits.com/img/a2793754674_16.jpg";
            break;
            
        case 'Gate-Watchers':
            albumName.innerHTML = "Gate Watchers";
            albumArtist.innerHTML = "CubeNatural";
            albumOverview.innerHTML = "A very loud and proud kind of album. Very harsh sounds, but not too harsh to become cacophonous. A perfect blend of samples and calmingly loud sounds makes this album excellent to listen to.";
            albumArt.src = "https://f4.bcbits.com/img/a1671613716_16.jpg";
            break;
    
        case 'Dave-and-Bambi':
            albumName.innerHTML = "Dave & Bambi";
            albumArtist.innerHTML = "MoldyGH";
            albumOverview.innerHTML = "The full OST to a mod for a rhythm game. Consisting of a huge selection of songs with many different characters and plenty of styles incorporated.";
            albumArt.src = "https://assets.bigcartel.com/product_images/357831493/dnbMockup.png?auto=format&fit=max&w=1000";
            break;
        
        case 'Hotline-024':
            albumName.innerHTML = "HOTLINE 024";
            albumArtist.innerHTML = "Saruky";
            albumOverview.innerHTML = "Another OST for a rhythm game mod, mostly consisting of references to other rhythm game mods. Varies a lot with genres, and has a lot of great style to it. VERY FUNKY.";
            albumArt.src = "https://assets.bigcartel.com/product_images/351912460/Hotline+CD.png?auto=format&fit=max&w=1000";
            break;
        
        case 'FNF':
            albumName.innerHTML = "FRIDAY NIGHT FUNKIN\'";
            albumArtist.innerHTML = "Kawai Sprite";
            albumOverview.innerHTML = "A game OST that embodies the spirit of games like Parappa the Rapper and mixing it with more electronic beats. Very bass heavy, lots of samples, great replayabiltiy.";
            albumArt.src = "https://vgmsite.com/soundtracks/friday-night-funkin-ost-vol.-2/coverart.jpg";
            break;

        case 'RUBATO':
            albumName.innerHTML = "RUBATO";
            albumArtist.innerHTML = "dconn";
            albumOverview.innerHTML = "Inspired by DS games of the mid 2000s, RUBATO is an OST for a demo of the same name. Incorporating drum and bass-ish styles into its music, as well as fantastic chiptune tracks.";
            albumArt.src = "https://f4.bcbits.com/img/a1828652412_16.jpg";
            break;

        // for the 'listening next' page, these lines do the exact same thing as the ones above.
        case 'UUFO':
            albumName.innerHTML = "U.U.F.O.";
            albumArtist.innerHTML = "Camellia/Cametek";
            albumOverview.innerHTML = "A chaotic album consisting of harsh breakbeats and incredibly fast paced rhythms. You're sure to be in for a ride.";
            albumArt.src = "https://f4.bcbits.com/img/a2760613898_16.jpg";
            break;

        case 'Blackmagik-Blazing':
            albumName.innerHTML = "Blackmagik Blazing";
            albumArtist.innerHTML = "Camellia/Cametek";
            albumOverview.innerHTML = "A chaotic album consisting of harsh breakbeats and incredibly fast paced rhythms. You're sure to be in for a ride.";
            albumArt.src = "https://f4.bcbits.com/img/a2312567325_16.jpg";
            break;
    }
}