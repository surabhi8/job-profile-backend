//  import bcrypt from 'bcrypt';
const  Model = require('../../models');
const bcrypt = require('bcrypt');
const userSchema = require('../schemas/user')
module.exports = [
  {
    path: "/login",
    method: "POST",
    async handler(request,reply) {
       try{
      const {userName} = request.payload;
      const {password} = request.payload;
      const user = await Model.User.findOne({
        attributes: ['userName', 'password'],
        where: {
          userName
        },
      });
      if(!user){
          reply({
            message: 'Please enter correct username',
          }).code(401);
        } else {
          bcrypt.compare(password,user.dataValues.password,function(err,result){
            if(result===true) {
              reply({message:"Successfully logged in"}).code(200);
            } else {
              reply({
                message: 'Please enter correct password',
              }).code(204);
             }
          });
        }
      } catch(err) {
      reply(err);
    };  
  },
  config: {
    tags: ['api', 'user'],
    validate: {
      payload: userSchema.loginRequestSchema,
    },
  },
},
{
  path: "/profile",
  method: "POST",
  async handler(request,reply) {
     try {
     const {userName} = request.payload;
     const user = await Model.User.findOne({
      attributes: ['name','image','jobRole','companyId'],
      where: {
        userName
      },
      include: [
        {
          model: Model.Company,
          as:'Company',
          attributes: ['name'],
          required: true
        },
      ],
    });
    if(!user) {
    reply({message:"Profile doesn't exist"}).code(401);
    } else {
      try{
        const company = await Model.Company.findOne(
        { where: { id:user.dataValues.companyId } } );
        await company.increment('totalViews');
        reply({
          result: user.toJSON(),
        }).code(200);
       }
        catch(error) {
        console.log(error);
        reply(error);
      }  
    }
  }
     catch(error) {
    reply(error);
    }
  },
config: {
  tags: ['api', 'profile'],
  validate: {
    payload: userSchema.profileRequestSchema,
  },
},
}
]