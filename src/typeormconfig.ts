import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'anhtuan120600',
  database: 'postgres',
  entities: [__dirname + 'src/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
