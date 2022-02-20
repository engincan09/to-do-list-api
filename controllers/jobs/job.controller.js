const Job = require("../../models").Job;

module.exports = {
  async findAll(req, res) {
    try {
      const name = req.query.name;
      var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
      const jobs = await Job.findAll({ where: condition });
      res.status(200).send(jobs);
    } catch (error) {
      res.status(500).send("Bir hata gerçekleşti: " + error);
    }
  },

  async create(req, res) {
    try {
      const job = await Job.create({
        description:req.body.description,
        status: false,
        userId: req.body.userId,
      });
      res.status(201).send(job);
    } catch (error) {
      res.status(500).send("Bir hata gerçekleşti: " + error);
    }
  },
  async update(req, res) {
    try {
      const Job = await Job.create({
        description: req.body.description,
        status: req.body.status,
      });
      res.status(201).send(Job);
    } catch (error) {
      res.status(500).send("Bir hata gerçekleşti: " + error);
    }
  },
  async findBy(req, res) {
    try {
      const id = req.params.id;
      await Job.findByPk(id).then((data) => {
        res.status(200).send(data);
      });
    } catch (error) {
      res.status(500).send("Bir hata gerçekleşti: " + error);
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    try {
      await Job.destroy({ where: { id: id } }).then((num) => {
        if (num == 1) {
          res.status(200).send("Görev planı başarılı bir şekilde silindi!");
        } else {
          res.status(400).send("Silinecek görev planı bulunamadı!");
        }
      });
    } catch (error) {
      res.status(500).send("Bir hata gerçekleşti: " + error);
    }
  },
};
