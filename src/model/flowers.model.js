import { DataTypes, Model } from "sequelize";
import { newSequelize } from "../config/index.js";

export class FlowersModel extends Model {}

FlowersModel.init(
  {
    flowers_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "flowers",
    timestamps: true,
    sequelize: newSequelize,
    paranoid: true,
    deletedAt: true,
    underscored: true,
  } 
);
