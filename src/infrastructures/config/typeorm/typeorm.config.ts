import { DataSource } from 'typeorm';

const config = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
  migrationsRun: true,
  migrations: ['database/migrations/**/*{.ts,.js}'],
});

config
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

console.log(config);

export default config;
