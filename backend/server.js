const http = require("http");

const server = http.createServer((req, res) => {

  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Route
  if (req.url === "/api/info" && req.method === "GET") {

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      info: "React is communicating with Node.js"
    }));

  } else {

    res.writeHead(404, {
      "Content-Type": "text/plain"
    });

    res.end("Not Found");
  }

});

server.listen(5000, () => {
  console.log("Backend server running at http://localhost:5000");
});