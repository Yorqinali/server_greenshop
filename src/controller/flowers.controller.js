import { Flowers } from "../model/index.model.js";

export const flowerGet = async (req, res) => {
  try {
    const data = await Flowers.findAll();
    return res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const flowercreate =  async (req, res) => {
  try {
  
    if (!req.file) {
      return res.status(400).json({ message: "Fayl yuklanmadi" });
    }

    const {title, price} = req.body; 
    const image = req.file.filename; 

  
    const flower = await Flowers.create({
      title, price, image
    });

    res.status(201).json({ message: "Gul muvaffaqiyatli qo'shildi", data: flower });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xatosi" });
  }
}

export const flowerdelete = async (req, res) => {
  try {
    const { flowers_id } = req.params; 
    

    await Flowers.destroy({
      where: {
        flowers_id,
      },
  }); 

    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server xatosi" });
  }
};
