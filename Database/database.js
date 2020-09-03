const mogoose = require('mongoose');
const video = mogoose.Schema({
    videoSrc: String,
    channel:String,
    video_desc:String,
    songName:String,
    tlikes:String,
    tmessage:String,
    tshare:String
});


module.exports  = mogoose.model('video',video);