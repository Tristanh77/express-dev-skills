const SkillsModel = require('../models/skill');

module.exports = {
	index: index,
	show,
	new: newSkill,
	create,
	delete: deleteSkill
}

function index(req, res, next) {
	
	res.render('skills/index.ejs', {skills: SkillsModel.getAll() })
}

function show(req, res){
	res.render('skills/show', {skill: SkillsModel.getOne(req.params.id) })
}

function newSkill(req, res) {
	res.render('skills/new');
}

function create(req, res) {
	SkillsModel.create(req.body)
	res.redirect('/skills')
}

function deleteSkill(req, res) {
	SkillsModel.deleteOne(req.params.id);
	res.redirect('/skills');
}