import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`✨ Serenity Planners Server is running on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
});

// Handle unhandled promises
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
});
