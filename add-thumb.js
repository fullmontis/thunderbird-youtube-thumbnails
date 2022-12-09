async function add_thumb() {
    var mess = await browser.runtime.sendMessage({command: "getYoutubeId"});
    if( mess == "" ){ return; }

    console.log(mess);

    var link = mess.headers["content-base"][0];
    var regexp = /https:\/\/www.youtube.com\/watch\?v=/;
    if( !regexp.test(link) ) { return; }
    var video_id = link.replace(regexp,"");
    console.log(video_id);
    var thumb_url = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;

    var img = document.createElement("img");
    img.src = thumb_url;
    img.classList.add("yt_thumbnail");
    document.body.insertBefore(img,document.body.firstChild);
}

add_thumb().catch((e) => {console.log(e);});
