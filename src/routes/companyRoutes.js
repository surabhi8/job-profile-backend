//  import bcrypt from 'bcrypt';
const  Model = require('../../models');

module.exports = [{
  path: '/company-profile',
  method: 'GET',
  async handler(request,reply) {
     try
     {
     const {companyId} = request.query;
     const company = await Model.Company.findOne({
      attributes: ['name','logo','address','uniqueUsers','totalViews'],
      where: {
        id:companyId
      }
    })
      if(!company) {
            reply({message:"Company doesn't exist"}).code(401);
      } else {
        reply({
          result: company.toJSON(),
        }).code(200);
      } 
    }
     catch(err) {
    reply(err);
  };
}
}
]