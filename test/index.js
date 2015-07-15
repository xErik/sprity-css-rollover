'use strict';

var fs = require('fs');
var should = require('chai').should();
var cssesc = require('cssesc');
var Handlebars = require('handlebars');
var prettydiff = require('prettydiff');
var ratio = 1;

Handlebars.registerHelper('cssesc', function(value) {
	return value && value.length > 0 ? cssesc(value, {
		isIdentifier: true
	}) : '';
});

Handlebars.registerHelper('escimage', function(img) {
	return img.replace(/['"\(\)\s]/g, function encodeCssUri(chr) {
		return '%' + chr.charCodeAt(0).toString(16);
	});
});

Handlebars.registerHelper('baseDim', function(size) {
	return Math.round(size * ratio);
});

require('mocha');

var cssProc = require('../index');

var fixture = [{
	"name": "default",
	"classname": "icon",
	"layout": {
		"height": 1898,
		"width": 192,
		"items": [{
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite007.png'),
				"fileName": "sprite007.png",
				"height": 138,
				"name": "sprite007",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 0
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite001.png'),
				"fileName": "sprite001.png",
				"height": 138,
				"name": "sprite001",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 146
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite003.png'),
				"fileName": "sprite003.png",
				"height": 138,
				"name": "sprite003",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 292
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite004.png'),
				"fileName": "sprite004.png",
				"height": 138,
				"name": "sprite004",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 438
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite005.png'),
				"fileName": "sprite005.png",
				"height": 138,
				"name": "sprite005",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 584
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite006.png'),
				"fileName": "sprite006.png",
				"height": 138,
				"name": "sprite006",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 730
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite002.png'),
				"fileName": "sprite002.png",
				"height": 138,
				"name": "sprite002",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 876
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite008.png'),
				"fileName": "sprite008.png",
				"height": 138,
				"name": "sprite008",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 1022
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite009.png'),
				"fileName": "sprite009.png",
				"height": 138,
				"name": "sprite009",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 1168
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite010.png'),
				"fileName": "sprite010.png",
				"height": 138,
				"name": "sprite010",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 1314
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite011.png'),
				"fileName": "sprite011.png",
				"height": 138,
				"name": "sprite011",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 1460
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite012.png'),
				"fileName": "sprite012.png",
				"height": 138,
				"name": "sprite012",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 1606
		}, {
			"height": 146,
			"width": 192,
			"meta": {

				"contents": fs.readFileSync('test/fixtures/sprite013.png'),
				"fileName": "sprite013.png",
				"height": 138,
				"name": "sprite013",
				"type": "png",
				"width": 184
			},
			"x": 0,
			"y": 1752
		}]
	},
	"sprites": [{
		"name": "sprite",
		"url": "sprite.jpg",
		"type": "jpg",
		"dpi": null,
		"ratio": null,
		"width": 192,
		"height": 1898
	}]
}];

describe('sprity-css-rollover', function() {
	it('should be beautifyable', function() {
		cssProc.isBeautifyable({}).should.be.true;
	});
	it('should return css as the extension', function() {
		cssProc.extension({}).should.equal('css');
	});
	it('should return css as expected', function(done) {
		cssProc.process(fixture, {}, Handlebars)
			.then(function(s) {
				require('fs').writeFileSync('out.txt',s);
				var style = prettydiff.api({
					source: s,
					lang: 'css',
					mode: 'beautify'
				})[0];
				var fix = prettydiff.api({
					source: fs.readFileSync('test/expected/style.css').toString(),
					lang: 'css',
					mode: 'beautify'
				})[0];
				style.should.equal(fix);
				done();
			});
	});
});
