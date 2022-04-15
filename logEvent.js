const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const fsPromise = require("fs").promises;

const logEvent = async (msg) => {
  const newDate = `${format(new Date(), "dd/MM/yyyy")}`;
  const logItem = `${newDate}\t${uuid()}\t${msg}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "logs"));
    }

    await fsPromise.appendFile(
      path.join(__dirname, "logs", "logs.txt"),
      logItem
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvent;
