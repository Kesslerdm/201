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
		const trigAutosave = data.is_triggered_by_autosave;
		if (trigAutosave && (!data.assetId || data.noAutosave)) return res.end("0");

		var bytes = Buffer.from(data.bytes, "base64");
		sound.save(body, mId, data.presaveId).then((nId) => res.end("0" + nId));
	});
	return true;
};
