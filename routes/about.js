const express = require('express');
const router = express.Router();

/* GET stats page. */
router.get('/stats', function(req, res, next) {
	res.render('about/stats', { 
		title: 'GW2Trivia', 
		subtitle: 'Statistiques', 
		description: 'Statistiques sur Questions pour un Quaggan.',
		keywords: 'questions pour un quaggan, guild wars, gw, gw2, ogden guéripierre, jeu, gw2trivia, trivia, culture, pandraghon',
	});
});

/* GET support page. */
router.get('/support', function(req, res, next) {
	res.render('about/support', { 
		title: 'GW2Trivia', 
		subtitle: 'Soutenir GW2Trivia', 
		description: 'Statistiques sur Questions pour un Quaggan.',
		keywords: 'questions pour un quaggan, guild wars, gw, gw2, ogden guéripierre, jeu, gw2trivia, trivia, culture, pandraghon',
	});
});

/* GET legal page. */
router.get('/legal', function(req, res, next) {
	res.render('about/legal', { 
		title: 'GW2Trivia', 
		subtitle: 'Mentions légales', 
		description: 'Tester vos connaissances sur l\'univers de Guild Wars en participant à Questions pour un Quaggan, un jeu présenté par Ogden Guéripierre.',
		keywords: 'questions pour un quaggan, guild wars, gw, gw2, ogden guéripierre, jeu, gw2trivia, trivia, culture, pandraghon, mentions, legal',
	});
});

module.exports = router;

