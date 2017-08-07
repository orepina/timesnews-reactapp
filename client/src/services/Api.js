var moment = require('moment');

class Api {
  constructor(){
    this.api = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    this.key = "a8457610b68381085a3fff38d6a36337:6:74255139";
  };

  _createBody(body){
    return JSON.stringify(body);
  }
  
  _createUrl(params){
    return this.api + "?" + Object.keys(params)
                                  .filter((key) => params[key])
                                  .map((key) => key+'='+params[key])
                                  .join('&');
  }

  _createFq(tabId){
    var param = 'section_name',
        value = tabId;

    if (tabId == 'More')
      value = ['Home', 'World', 'U.S.', 'Politics', 'N.Y.']
                        .map((name) => 'NOT section_name:("'+name+'")')
                        .join(' AND ');
    if (tabId == 'Home')
      return '';

    if (tabId == 'Politics')
      param = 'subsection_name';

    return param+':("'+value+'")';;
  }

  _createParams(tabId, query, page){
    return {
      'api-key': this.key,
      'q': query,
      'fq': this._createFq(tabId),
      'end_date': moment().format('YYYYMMDD'),
      'begin_date': moment().add('days', -7).format('YYYYMMDD'),
      'page': page,
      'sort': 'newest'
    };

  }

  _makeRequest(url, callback){
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch(function(msg){
        console.log('error  ', msg)
      });
  }

  getArticles(tabId, query, page, callback){
    var params = this._createParams(tabId, query, page),
        url = this._createUrl(params);
    this._makeRequest(url, callback)
  }

  _makeTextRequest(body){
    var body = this._createBody(body),
        headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };

    return fetch('/api/fullarticle', { 
          method: "POST", 
          body: body, 
          headers: headers,
        })
  }

  _makeArticleRequest(url, callback){
    var info = {};

    fetch(url)
      .then((response) => response.json())
      .then((data) => data.response.docs[0])
      .then((data) => {
        info = Object.assign({}, data);
        return this._makeTextRequest({web_url: data.web_url});
      })
      .then((response) => response.text())
      .then((data) => {
        callback(Object.assign(info, {articleText: data}));
      })
      .catch(function(msg){
        console.log('error  ', msg)
      });
  }

  getArticle(articleId, callback){
    var fq = '_id:("'+articleId+'")',
        url = this._createUrl({'api-key': this.key, fq: fq});
    this._makeArticleRequest(url, callback)
  }
}

module.exports = new Api();