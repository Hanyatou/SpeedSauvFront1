const userModel = require('../../_models/user');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = {
    create: function(req, res, next) {
        userModel.create({ loginId: req.body.loginId,
             firstNameUser: req.body.firstNameUser, 
             lastNameUser: req.body.lastNameUser, 
             numSecu: req.body.numSecu,
              password: req.body.password }, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "User added successfully!!!", data: null}); 
        });
 },
 
    authentificate: function(req, res, next) {
        userModel.findOne({loginId:req.body.loginId, password:req.body.password}, function(err, userInfo){
            if (err) {
             next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '0.5h' });
                    res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
                }else{
                    res.json({status:"error", message: "Invalid email/password!!!", data:null});
                }
            }
        });
    s},
}