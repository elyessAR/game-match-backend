const games = require("../data/data.js");

// Get all games
const getAllGames = (req, res) => {
  try {
    res.status(201).json(games);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a single game by index
const getGameByIndex = (req, res) => {
  const index = parseInt(req.params.index);

  if (index < 0 || index >= games.length) {
    return res.status(404).send("Data not found");
  }
  try {
    res.status(201).json(games[index]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Create a new game
const createGame = (req, res) => {
  const newGame = req.body;
  try {
    games.push(newGame);
    res.status(201).json({ message: "Game created successfully", game: newGame });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Update a game by index
const updateGameByIndex = (req, res) => {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= games.length) {
    return res.status(404).send("Data not found");
  }
  const updatedGame = req.body;
  try {
    games[index] = updatedGame;
    res.status(201).json({ message: "Game Updated Successfully", game: updatedGame });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete a game by index
const deleteGameByIndex = (req, res) => {
  const index = req.params.index;
  if (index < 0 || index >= games.length) {
    return res.status(404).send("Data not found");
  }
  try {
    games.splice(index, 1);
    res.status(201).json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const selectTopByPlayers = (games, options) => {
  let items = games;

  if (options) {
    if (options.genre) {
      items = items.filter((data) => data.genre.toUpperCase() === options.genre.toUpperCase());
    }
    if (options.platform) {
      items = items.filter((data) =>
        data.platforms.map((p) => p.toUpperCase()).includes(options.platform.toUpperCase())
      );
    }
  }

  const sortedData = items.sort((a, b) => b.userId - a.userId);
  const highestPlayers = sortedData[0].userId;
  const result = sortedData.filter((data) => data.userId === highestPlayers);
  return result;
};

const selectTopByPlayTime = (games, options) => {
  let items = games;

  if (options) {
    if (options.genre) {
      items = items.filter((data) => data.genre.toUpperCase() === options.genre.toUpperCase());
    }
    if (options.platform) {
      items = items.filter((data) =>
        data.platforms.map((p) => p.toUpperCase()).includes(options.platform.toUpperCase())
      );
    }
  }
  const sortedData = items.sort((a, b) => b.playTime - a.playTime);
  const highestPlaytime = sortedData[0].playTime;
  const result = sortedData.filter((data) => data.playTime === highestPlaytime);
  return result;
};

module.exports = {
  getAllGames,
  getGameByIndex,
  createGame,
  updateGameByIndex,
  deleteGameByIndex,
  selectTopByPlayers,
  selectTopByPlayTime,
};
