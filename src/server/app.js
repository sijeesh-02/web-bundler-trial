const express = require("express");
const app = express();
const path = require("path");
const config = {
  port: 3000,
};

/**
 * all calls to /assets would be taken from
 * a new path which is join of current directory (__dirname)
 * and
 * ../../dist/ui (root/dist/ui)
 */
app.use("/assets", express.static(path.join(__dirname, "../../dist/ui")));

/**
 * All calls to express server on path / will serve index.html
 * from path root/public
 */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

app.listen(config.port, () =>
  console.log(`Example app listening at http://localhost:${config.port}`)
);
