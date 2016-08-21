const request = require("request")
const cheerio = require('cheerio')
const iconv = require('iconv-lite')

function createUrlRequest(code) {
	return ('http://www.societe.com/cgi-bin/search?champs=' + code)
}

exports.requestDataFromSiren = function (siren, cb) {
	request.get({url : createUrlRequest(siren), encoding : null }, function (error, response, body) {

		const cheerio = require('cheerio'),
    	$ = cheerio.load(iconv.decode(body, "iso-8859-1"));

			let newData = {}
			$('#etab').children('tr').each( function (i, elem) {
				newData[$(this).children().first().text().trim()] = $(this).children().last().text().trim()
			})

			if (!newData["Nom"]) {
				return cb({ code : 404, log : "Company not found" }, null);
			}

			return cb(null, newData)

	});
}
