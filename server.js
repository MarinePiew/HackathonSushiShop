const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', function (req, res, next) {
  res.render('index');
});

app.post('/webhook', function (req, res, next) {
    let request = req.body.result.resolvedQuery;
    if (request.includes('oeufs') | request.includes('œuf')) {
      return res.json({
        speech: `Bonjour Céline, Sushi Shop vous propose une recette d'oeuf cocotte à la moutarde (Temps: 10 minutes de préparation, 10 minutes de cuisson). Voulez-vous faire la recette ?`,
        displayText: `Bonjour Céline, Sushi Shop vous propose une recette d'oeuf cocotte à la moutarde (Temps: 10 minutes de préparation, 10 minutes de cuisson). Voulez-vous faire la recette ?`,
        source: `webhook`
      });
    } else if (request.includes('oui') || request.includes('je veux bien') || request.includes(`d'accord`)) {
      return res.json({
        speech: `Voici les étapes de la recette. Etape 1: Préchaffer le four à 180°. Mélanger la crème et la moutarde. La verser dans un ramequin.`,
        displayText: `Voici les étapes de la recette. Etape 1: Préchaffer le four à 180°. Mélanger la crème et la moutarde. La verser dans un ramequin.`,
        source: `webhook`
      });
    } else if (request.includes('étape')) {
      return res.json({
        speech: `Etape 2: Casser l'oeuf sur la crème. Saupoudrer le parmesan râpé, en évitant le jaune. Ajouter les petits morceaux de tomates sur le blanc d'oeuf. Saler légèrement et poivrer.`,
        displayText: `Etape 2: Casser l'oeuf sur la crème. Saupoudrer le parmesan râpé, en évitant le jaune. Ajouter les petits morceaux de tomates sur le blanc d'oeuf. Saler légèrement et poivrer.`,
        source: `webhook`
      });
    } else if (request.includes(`fait`)) {
      return res.json({
        speech: `Etape 3: Enfourner pendant 10 minutes environ, jusqu'à ce que le blanc ait pris et que le jaune soit encore liquide. Servir bien chaud, avec quelques copeaux de parmesan sur le dessus, accompagné de pain beurré.`,
        displayText: `Etape 3: Enfourner pendant 10 minutes environ, jusqu'à ce que le blanc ait pris et que le jaune soit encore liquide. Servir bien chaud, avec quelques copeaux de parmesan sur le dessus, accompagné de pain beurré.`,
        source: `webhook`
      });
    } else if (request.includes(`non`)) {
      return res.json({
        speech: `Voulez-vous commander sur Sushi Shop ?`,
        displayText: `Voulez-vous commander sur Sushi Shop ?`,
        source: `webhook`
      });
    } else if (request.includes(`menu`) || request.includes(`repas`)) {
      return res.json({
        speech: `Ce soir Sushi Shop vous propose de réaliser la recette du chef Jean-François Piége, Bowls de daurade aux agrumes`,
        displayText: `Ce soir Sushi Shop vous propose de réaliser la recette du chef Jean-François Piége, Bowls de daurade aux agrumes`,
        source: `webhook`,
      });
    }
  });

const server = app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});

module.exports = server;