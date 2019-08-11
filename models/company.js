'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    logo: DataTypes.BLOB,
    address: DataTypes.STRING,
    uniqueUsers: DataTypes.ARRAY,
    totalViews: DataTypes.INTEGER
  }, {});
  Company.associate = function(models) {
    models.Company.hasMany(models.User, {foreignKey: 'companyId', sourceKey: 'id'});
  };
  return Company;
};