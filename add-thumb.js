async function add_thumb() {
    var header = await browser.runtime.sendMessage({command: "getId"});
    if( header == "" ){ return; }
    var id_match = header.match(/yt:video:([^@]*)@.*/);
    if( id_match.length != 2 ) { return; }
    var video_id = id_match[1];
    var thumb_url = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;

    var img = document.createElement("img");
    img.src = thumb_url;
    img.classList.add("yt_thumbnail");
    document.body.insertBefore(img,document.body.firstChild);
}

add_thumb();
