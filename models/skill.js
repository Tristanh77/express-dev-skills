const skills = [
	{id: 125223, skill: 'HTML', comfortable: true},
	{id: 127904, skill: 'Javascript', comfortable: true},
	{id: 139608, skill: 'Express', comfortable: false}
  ];

  module.exports = {
	getAll,
	getOne,
  create,
  deleteOne
  };

  function getAll() {
	return skills;
  }

  function getOne(id) {
	return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.comfortable = false;
    skills.push(skill);
    }

    function deleteOne(id) {
      const idx = skills.findIndex(skill => skill.id === parseInt(id));
      skills.splice(idx, 1);
      }
    