**Youtube Thumbnails in Thunderbird**

**Install**

- Download repository as .zip
- Rename with extension .xpi 
- Add in Thunderbird as extension from file (Add-ons Manager -> Gear Icon -> Install Add On From File)

You should be able to see the thumbnails added to any feed coming from a YouTube channel.

**Adding YouTube Feeds**

You can add YouTube Feeds to Thunderbird with the following URL:

    https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}
    
Where `{CHANNEL_ID}` is the unique id for a channel.

To get the channel ID, you can use the following command from cli: 

    curl -sfLS {CHANNEL_URL}  | grep channelId | sed  -n 's/.*<meta itemprop="channelId" content="\([^"]*\)".*/\1/p'

where `{CHANNEL_URL}` is the url for the channel you want to add in your feed.

I think there are more convenient ways to do this without command line but I'm not aware of them personally (you can suggest them here if you want).

**About**

I have no plans to make this an official extension, but I have interest in maintaning this in case there are bugs. 

**License**

I place this extension in the public domain, do whatever you feel like with it
