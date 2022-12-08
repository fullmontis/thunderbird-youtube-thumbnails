messenger.runtime.onMessage.addListener(async (message, sender) => {
    if (! (message && message.hasOwnProperty("command"))) { return ""; }
    const header = await messenger.messageDisplay.getDisplayedMessage(sender.tab.id);
    if (!header) { return ""; }
    switch( message.command ){
    case "getId":
        return header.headerMessageId;
        break;
    default:
        return "";
    }
});   

messenger.messageDisplayScripts.register({
    js: [{file: "add-thumb.js"}],
    css: [{file: "add-thumb.css"}]
});
