import { pool } from "../db.js";

export const getDrinks = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM drinks ORDER BY dr_name ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDrink = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM drinks WHERE d_id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res
        .status(404)
        .json({ message: "I'm sorry, we dont have that drink." });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDrink = async (req, res) => {
  try {
    const { dr_name, d_desc, d_price, isSelected, hasAlcohol } = req.body;
    const result = await pool.query(
      "INSERT INTO drinks VALUES (null, ?, ?, ?, ?, ?)",
      [dr_name, d_desc, d_price, isSelected, hasAlcohol]
    );
    res.status(201).json({
      id: result.inserId,
      dr_name,
      d_desc,
      d_price,
      isSelected,
      hasAlcohol,
      message: "Successful.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDrink = async (req, res) => {
  try {
    const [result] = req.body;
    const response = await pool.query("UPDATE drinks SET ? WHERE d_id = ? ", [
      req.body,
      req.params,
    ]);
    if (result.length === 0)
      return res.status(404).json({ message: "Drink not found" });

    res.status(200).json(response[0]);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteDrink = async (req, res) => {
  try {
    const idDrink = req.params;
    const result = await pool.query("DELETE FROM drinks WHERE d_id = ?", [
      idDrink,
    ]);
    if (result.length === 0)
      return res.status(404).json({ message: "Drink not found " });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
