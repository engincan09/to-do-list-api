const User = require('../../models').User;

module.exports ={
    async findAll(req,res){
        try {
            const name = req.query.name;
            var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

            const users = await User.findAll({where: condition});
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send("Bir hata gerçekleşti: "+error)
        }
    },

    async create(req,res){
        let fullName = req.body.firstName + ' ' + req.body.lastName;
        try {
            const user = await User.create({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                fullName : fullName
            });
            res.status(201).send(user);
        } catch (error) {
            res.status(500).send("Bir hata gerçekleşti: "+error)
        }
    }
}