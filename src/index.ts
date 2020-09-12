import server from './Server';
const { PORT = 3000 } = process.env;

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);