import express from "express";
import { getRooms, getRoomById } from "../controllers/roomController.js";
const router = express.Router();

// Note: roomRoutes file (this file) contains all routes that hit the /api/rooms routes, at the backend.
// Note: this file is connected with server.js, so that it picks the route path.
// Note: router.route is an express router method, used in place of app.get or app.post.
// Note: "/api/rooms" is prefixed to all "/" routes in this file, to determine the route to be opened, and response to serve.
router.route("/").get(getRooms);

router.route("/:id").get(getRoomById);

export default router;
