const express = require("express");
const gamesController = require("../controllers/games.js");
const games = require("../data/data.js");

const router = express.Router();
router.get("/select_top_by_playtime", async (req, res) => {
  const options = req.query;
  try {
    const result = await gamesController.selectTopByPlayTime(games, options);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/select_top_by_players", async (req, res) => {
  const options = req.query;
  try {
    const result = await gamesController.selectTopByPlayers(games, options);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/", gamesController.getAllGames);
router.get("/:index", gamesController.getGameByIndex);
router.post("/", gamesController.createGame);
router.patch("/:index", gamesController.updateGameByIndex);
router.delete("/:index", gamesController.deleteGameByIndex);

module.exports = router;
