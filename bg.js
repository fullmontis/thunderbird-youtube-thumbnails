messenger.runtime.onMessage.addListener(async (message, sender) => {
    if ( !(message && message.hasOwnProperty("command")) ) { return ""; }
    const header = await messenger.messageDisplay.getDisplayedMessage(sender.tab.id);
    if( !header ) { return ""; }

    const full_message = await messenger.messages.getFull(header.id);
    if( !full_message ) { return ""; }

    switch( message.command ){
    case "getYoutubeId":
        return full_message;
        break;
    default:
        return "";
    }
});   

messenger.messageDisplayScripts.register({
    js: [{file: "add-thumb.js"}],
    css: [{file: "add-thumb.css"}]
});
