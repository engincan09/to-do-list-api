module.exports = (sequelize,DataTypes)=>{
    let Job = sequelize.define('Job',{
        description:DataTypes.STRING,
        status:DataTypes.BOOLEAN
    });

    Job.associate = function(models){
        Job.belongsTo(models.User,{
            onDelete:"CASCADE",
            foreignKey:"userId"
        })
    }
    return Job;
}