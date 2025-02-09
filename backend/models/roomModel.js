import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    roomName: {
      type: String,
      required: true,
    },
    maxGuest: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    roomImageUrl: [],
    currentBookings: [],
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
