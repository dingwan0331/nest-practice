import * as dotenv from 'dotenv';

dotenv.config();

export const { SECRET_KEY, SERVER_PORT = 8000 } = process.env;
