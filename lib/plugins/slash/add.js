
/********************************************
 *
 * Add to a youtube playlist 
 *
 * Author : Matt 
 *
 ********************************************/

module.exports.run = function(request, cmd_args, stuart, plugin) {
        var num = Math.round(Math.random() * 100);
        stuart.slack_post(num.toString(), '#'+request.channel_name, request.user_name);
};

module.exports.help = function(request, stuart) {
	stuart.slack_post("Adds a video to a youtube playlist.  Usage : '/playlist add <url>'", '@'+request.user_name, request.user_name);
};
