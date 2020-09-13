import server from './Server';
const { PORT = 3000 } = process.env;

process.on("uncaughtException", error => {
  console.log(error.message, error);
  process.exit(1);
})

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);