//  import bcrypt from 'bcrypt';
const  Model = require('../../models');
const bcrypt = require('bcrypt');
module.exports = [
  {
    path: "/login",
    method: "POST",
    async handler(request,reply) {
       const {userName} = request.payload;
       const {password} = request.payload;
       Model.User.findOne({
        attributes: ['userName', 'password'],
        where: {
          userName
        },
      }).then((user) => {
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
              }).code(401);
             }
          });
        }
       }).catch((err) => {
      reply(err);
    });  
  }
},
{
  path: "/profile",
  method: "POST",
  async handler(request,reply) {
     const {userName} = request.payload;
     Model.User.findOne({
      attributes: ['userName','image','jobRole','companyId'],
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
    }).then((user) => {
      if(!user) {
            reply({message:"Profile doesn't exist"}).code(401);
      } else {
        reply({
          result: user.toJSON(),
        }).code(200);
      } 
     }).catch((err) => {
    reply(err);
  });
}
}
]