//  import bcrypt from 'bcrypt';
const  Model = require('../../models');

module.exports = [{
  path: '/company-profile',
  method: 'GET',
  async handler(request,reply) {
     const {companyId} = request.query;
     Model.Company.findOne({
      attributes: ['name','logo','address','uniqueUsers','totalViews'],
      where: {
        id:companyId
      }
    }).then((company) => {
      if(!company) {
            reply({message:"Company doesn't exist"}).code(401);
      } else {
        reply({
          result: company.toJSON(),
        }).code(200);
      } 
     }).catch((err) => {
    reply(err);
  });
}
}
]