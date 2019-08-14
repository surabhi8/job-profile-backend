'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    address: DataTypes.STRING,
    uniqueUsers: DataTypes.ARRAY(DataTypes.STRING),
    totalViews: DataTypes.INTEGER
  }, {});
  Company.associate = function(models) {
    models.Company.hasMany(models.User, {foreignKey: 'companyId', sourceKey: 'id'});
  };
  return Company;
};