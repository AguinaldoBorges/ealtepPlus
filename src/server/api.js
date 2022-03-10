const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b9887caedd5542b6be425763104e2dcd');



newsapi.v2.sources({
    category: 'technology',

    country: 'us'
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
});