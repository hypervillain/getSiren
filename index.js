const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

function createUrlRequest(code) {
  return `http://www.societe.com/cgi-bin/search?champs=${code}`;
}

exports.requestDataFromSiren = function requestDataFromSiren(siren) {
  return new Promise((resolve, reject) => {
    request.get({ url: createUrlRequest(siren), encoding: null }, (error, response, body) => {
      const $ = cheerio.load(iconv.decode(body, 'iso-8859-1'));

      const newData = {};
      $('#etab').children('tr').each(function t() {
        const index = $(this)
          .children()
          .first()
          .text()
          .trim();
        const data = $(this)
          .children()
          .last()
          .text()
          .trim();
        newData[index] = data;
      });

      if (!newData.Nom) {
        return reject({ code: 404, log: 'Company not found' });
      }

      return resolve(newData);
    });
  });
};
