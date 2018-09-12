var articlesElt = document.getElementById("articles");
ajaxGet("https://api.myglamapp.pl/api/categories?language=EN", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
  //  articles.forEach(function (article) {
for(i=0;i<articles.data.length;i++)
{

  // Ajout du titre et du contenu de chaque article

        var logoElt = document.createElement("img");
        logoElt.src = articles.data[i].imagePath;

        var labelElt = document.createElement("h4");
        labelElt.textContent = articlesdata.label;

        var descriptionElt = document.createElement("p");
        descriptionElt.textContent = article.data.description;

        articlesElt.appendChild(logoElt);
        articlesElt.appendChild(labelElt);
        articlesElt.appendChild(descriptionElt);

    };
});

