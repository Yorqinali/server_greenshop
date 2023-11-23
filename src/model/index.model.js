import { FlowersModel } from "./flowers.model.js";
import { UserModel } from "./user.model.js";

UserModel.belongsToMany(FlowersModel, {
  through: "FlowersModel",
  foreignKey: "user_id",
});

FlowersModel.belongsToMany(UserModel, {
  through: "UserModel",
  foreignKey: "flowers_id",
});

async function func() {
  await UserModel.sync({ alter: true });
  await FlowersModel.sync({ alter: true });
}

func();

export { UserModel as User, FlowersModel as Flowers };
