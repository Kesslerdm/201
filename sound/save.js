const loadPost = require("../request/post_body");
const sound = require("../main");
const http = require("http");

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "POST" || (url.path != "/goapi/saveSound/")) return;
	loadPost(req, res).then(([data, mId]) => {
				var bytes = Buffer.from(data.bytes, "base64");
				asset.save(bytes, mId, "voiceover", "ogg");
			});
	return true;
};
