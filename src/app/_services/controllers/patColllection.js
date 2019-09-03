const patientCollectionsModel = require('../../_models/patCollection');
module.exports = {
    getById: function(req, res, next) {
     console.log(req.body);
     patientCollectionsModel.findById(req.params.id_Pat, function(err, pat_Coll_Info){
        if (err) {
            next(err);
        } else {
            res.json({status:"success", message: "patient found!!!", data:{patCollection: pat_Coll_Info}});
        }
        });
    },

//get user allergies 
   get_All_Allergies_By_ID: function(req, res, next) {
     let allergiesList = [];
     patientCollectionsModel.findById(req.params.id_Pat, function(err, allergies){
      if (err){
       next(err);
      } else{
       for (let allergie of allergies) {
        allergiesList.push({id: allergie._id, name: allergie.name});
       }
       res.json({status:"success", message: "Movies list found!!!", data:{allergies: allergiesList}});
          
      }
   });
    },

    //get user traitement en cours   
   get_All_Traitement_en_cours_By_ID: function(req, res, next) {
    let traitements_en_coursList = [];
    patientCollectionsModel.findById(req.params.id_Pat, function(err, traitements_en_cours){
     if (err){
      next(err);
     } else{
      for (let traitement_en_cours of traitements_en_cours) {
        traitements_en_coursList.push({id: traitement_en_cours._id, name: traitement_en_cours.name});
      }
      res.json({status:"success", message: "Movies list found!!!", data:{traitement_en_cours: traitements_en_coursList}});
         
     }
  });
   },

   
//get user traitement en cours   
    get_All_Operation_Recente_By_ID: function(req, res, next) {
    let operations_recentesList = [];
    patientCollectionsModel.findById(req.params.id_Pat, function(err, operations_recentes){
     if (err){
      next(err);
     } else{
      for (let operation_recentes of operations_recentes) {
        operations_recentesList .push({id: operation_recentes._id, name: operation_recentes.name});
      }
      res.json({status:"success", message: "Movies list found!!!", data:{operations_recentes: operations_recentesList}});
         
     }
  });
   },

   //get user tmaladies à traiter  
   get_All_Mlds_declarer_By_ID: function(req, res, next) {
    let mlds_declarersList = [];
    patientCollectionsModel.findById(req.params.id_Pat, function(err, mlds_declarer){
     if (err){
      next(err);
     } else{
      for (let mld_declarer of mlds_declarer) {
        mlds_declarersList.push({id: mld_declarer._id, name: mld_declarer.name});
      }
      res.json({status:"success", message: "Movies list found!!!", data:{mlds_declarer: mlds_declarersList}});
         
     }
  });
   },

   updateById: function(req, res, next) {
    patientCollectionsModel.findByIdAndUpdate(req.params.id_Pat,{groupe_Sanguin:req.body.groupe_Sanguin,
            allergies:req.body.allergies, traitements_en_cours:req.body.-
            ,
            operations_recentes:req.body.operations_recentes, mlds_declarer:req.body.mlds_declarer, 
            contact:req.body.contact
    
            }, function(err, pat_Coll_Info){
   if(err)
       next(err);
      else {
       res.json({status:"success", message: "Movie updated successfully!!!", data:null});
      }
     });
    },

   deleteById: function(req, res, next) {
    patientCollectionsModel.findByIdAndRemove(req.params.id_Pat, function(err, pat_Coll_Info){
      if(err)
       next(err);
      else {
       res.json({status:"success", message: "Movie deleted successfully!!!", data:null});
      }
     });
    },
    
   create: function(req, res, next) {
    patientCollectionsModel.create({prenom: req.body.prenom, 
        nom: req.body.nom, 
        sexe: req.body.sexe,
        numSecu: req.body.numSecu,
        groupe_Sanguin:req.body.groupe_Sanguin,
        allergies:req.body.allergies, traitements_en_cours:req.body.traitements_en_cours,
        operations_recentes:req.body.operations_recentes, mlds_declarer:req.body.mlds_declarer, 
        contact:req.body.contact }, function (err, result) {
         if (err) 
          next(err);
         else
          res.json({status: "success", message: "Movie added successfully!!!", data: null});
         
       });
    },
   }