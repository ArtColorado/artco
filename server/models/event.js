const { Schema, model } = require("mongoose");
const Artist = require("./artist");

function formatDate(dbDate) {
  const date = new Date(dbDate);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const h = date.getHours();
  const min = date.getMinutes();

  if (h === 0) {
    return `${m}/${d}/${y} @ ${h + 1}:${min} AM`;
  } else if (h === 12) {
    return `${m}/${d}/${y} @ ${h}:${min} PM`;
  } else if (h > 12) {
    return `${m}/${d}/${y} @ ${h - 12}:${min} PM`;
  } else {
    return `${m}/${d}/${y} @ ${h}:${min} AM`;
  }
}

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      get: formatDate,
    },
    artists: [Artist],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Event = model("events", eventSchema);

module.exports = Event;
