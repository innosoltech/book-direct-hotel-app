import asyncHandler from "../middleware/asyncHandler.js";
import Room from "../models/roomModel.js";
import rooms from "../data/rooms.js"; // temporary usage

// NOTE:
// @desc            fetch all rooms
// @route           GET /api/rooms
// @access          Public
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({});
  if (rooms) {
    res.json(rooms);
  }
});

// NOTE:
// @desc            fetch single room
// @route           GET /api/rooms/:id
// @access          Public
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const getRoomById = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (room) {
    res.json(room);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getRooms, getRoomById };
