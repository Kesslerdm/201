const starter = require('../main');
const base = Buffer.alloc(1, 0);

module.exports = function (req, res, url) {
	switch (req.method) {
		case 'GET': {
			const match = req.url.match(/\/starters\/([^.]+)(?:\.(png))?$/);
			if (!match) return;

			var id = match[1], ext = match[2];
			switch (ext) {
				case 'png':
					res.setHeader('Content-Type', 'image/png');
					starter.loadPng(id).then(v => { res.statusCode = 200, res.end(v) })
						.catch(e => { res.statusCode = 404, res.end() })
			}
			return true;
		}

		case 'POST': {
			if (!url.path.startsWith('/goapi/getTemplate/')) return;
			res.setHeader('Content-Type', 'application/zip');

			starter.loadPng(url.query.starterId).then(b =>
				res.end(Buffer.concat([base, b]))
			).catch(e => res.end('1'));
			return true;
		}
		default: return;
	}
}
