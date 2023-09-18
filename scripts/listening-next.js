function reply_click(clicked_id)
{
    albumName = document.getElementById("album-name")
    albumArtist = document.getElementById("album-artist")
    albumOverview = document.getElementById("album-overview")
    albumArt = document.getElementById("album-img")

    switch (clicked_id) {
        case 'UUFO':
            albumName.innerHTML = "U.U.F.O.";
            albumArtist.innerHTML = "Camellia/Cametek";
            albumOverview.innerHTML = "Found this album on an osu!mania beatmap of <br><br>Tentaclar Aliens' Epic Extraterretterrestrial Jungle Dance Party Inside Of A Super​-​Ultra​-​Mega​-​Gigantic U​.​F​.​O. (It Maybe U​.​U​.​F​.​O​.​) Silently Flying Over Illinois St. <br><br> (Yes thats the full song name, look it up.) <br><br>The first impressions I got from the song (aside from the long title) was that it was gonna be another complete banger from Camellia, possibly with more jungle tunes in there as well! The only thing that turns me off from it is the fact it's 2 hours long.";
            albumArt.src = "https://f4.bcbits.com/img/a2760613898_16.jpg";
            break;

        case 'Blackmagik-Blazing':
            albumName.innerHTML = "BLACKMAGIK BLAZING";
            albumArtist.innerHTML = "Camellia/Cametek";
            albumOverview.innerHTML = "Another album from Camellia that I discovered from an osu!mania beatmap, which used the 9th track, Blackmagik Blazing (creative tite I know). It's a great song, and knowing Camellia from their previous albums, its almost a guarenteed banger through and through.";
            albumArt.src = "https://f4.bcbits.com/img/a2312567325_16.jpg";
            break;
        case 'Wavestation-Fm':
            albumName.innerHTML = "WAVESTATION-FM";
            albumArtist.innerHTML = "Lordsun & CubeNatural"
            albumOverview.innerHTML = "A collab track between an artist known as Lordsun and CubeNatural. I've only really heard at most 2 tracks from this album while working, but since I know CubeNatural never fails to dissapoint, I'm very willing to give the album a shot."
            albumArt.src = "https://f4.bcbits.com/img/a1374700780_16.jpg"
            break;
        case 'cat-girl':
            albumName.innerHTML = "CAT GIRL WITHOUT SALAD ~AMUSE-BOUCHE~"
            albumArtist.innerHTML = "Jake Kaufman"
            albumOverview.innerHTML = "This is more of \"meme\" pick than anything. I first heard of it around 2 years ago when I saw it in meme edit on Instagram. I just remembered that the game, and by extension the OST, recently after Apple Music recommended the album to me in my personal station. BGM Radical Galaxy is such a good song, so my hopes are high for the rest of the album."
            albumArt.src = "https://vgmsite.com/soundtracks/cat-girl-without-salad-amuse-bouche-extra-crispy-or-original-soundtrack/Extra%20Crispy%20or%20Original%20Soundtrack%20-%20cover.png"
            break;
        case 'Till-Sunrise':
            albumName.innerHTML = "TILL SUNRISE"
            albumArtist.innerHTML = "EX-LYD"
            albumOverview.innerHTML = "I don't think I've heard anything from this album yet, but after listening to one this artist's previous albums, I feel like it wouldn't be too bad to listen to."
            albumArt.src = "https://f4.bcbits.com/img/a1596836242_16.jpg"
            break;
        case 'Rage':
            albumName.innerHTML = "30 YEARS OF RAGE (PARTS 1 - 4)"
            albumArtist.innerHTML = "Fabio & Grooverider"
            albumOverview.innerHTML = "Another album that I only know of because of one song. I found it from some Newgrounds animation that used Dubplate as a backing track. Early 90s Jungle is very much a vibe that I like, and from what I've heard with Dubplate, it seems like the album shouldn't disappoint."
            albumArt.src = "https://f4.bcbits.com/img/a2690353373_16.jpg"
            break;    
        case 'Baby-Come-Back':
            albumName.innerHTML = "BABY COME BACK..."
            albumArtist.innerHTML = "Player"
            albumOverview.innerHTML = "I only recently discovered this artist after finding out what songs Yung Gravy samples. Baby Come Back is an excellent song, and after being recommended the other songs in their catalogue, I'm convinced that the other songs in the album will be just as good."
            albumArt.src = "https://static.qobuz.com/images/covers/28/66/0015095596628_600.jpg"
            break;
        case 'Call-Me':
            albumName.innerHTML = "CALL ME IF YOU GET LOST: THE ESTATE SALE"
            albumArtist.innerHTML = "Tyler, The Creator"
            albumOverview.innerHTML = "I'm not a huge Tyler, The Creator fan, but I did really like Earfquake and the one other song that Apple Music recommends me from this album. I am willing to try this album out since EARFQUAKE is so good, and because the album cover goes hard."
            albumArt.src = "https://media.pitchfork.com/photos/6421b623246be01cbfdde2e2/1:1/w_320,c_limit/tyler.jpeg"
            break;
    }
}