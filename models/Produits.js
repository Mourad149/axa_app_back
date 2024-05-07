const { DataTypes } = require("sequelize");

  module.exports = (sequelize, Sequelize) => {
    const Produits = sequelize.define("produits", {
      num_opportunite: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ref_dossier: {
        type: DataTypes.STRING,
        allowNull: false
      },
      num_siret_siren: {
          type: DataTypes.STRING,
          allowNull: false
        },
        affaire:{
          type: DataTypes.STRING,
          allowNull: false
        },
        nom_client:{
          type: DataTypes.STRING,
          allowNull: false
        },
        intermediaire:{
          type: DataTypes.STRING,
          allowNull: false
        },
        desc_succ :{
          type: DataTypes.STRING,
          allowNull: false
        },
        image_desc :  {
          type: DataTypes.BLOB('long'),
          allowNull: true
        },
        is_coassurance : {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        adresse : {
          type: DataTypes.STRING,
          allowNull: false
        },
        plan_adress : {
          type: DataTypes.BLOB('long'),
          allowNull: true
        },
        desc_operation:{
          type: DataTypes.STRING,
          allowNull: false
        },
        cout_operation : {
          type: DataTypes.STRING,
          allowNull: false
        }
    });
   
    return Produits;
  };