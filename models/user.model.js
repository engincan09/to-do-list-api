module.exports = (sequelize,DataTypes)=>{
    let User = sequelize.define('User',{
        firstName:DataTypes.STRING,
        lastName:DataTypes.STRING,
        fullName:DataTypes.STRING
    });

    User.associate = function(models){
        User.hasMany(models.Job,{
            foreignKey:"id",
            as:"jobs"
        })
    }

    return User;
}