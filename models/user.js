'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.BLOB,
    jobRole: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    models.User.belongsTo(models.Company, {foreignKey: 'companyId', targetKey: 'id'});
  };
  return User;
};