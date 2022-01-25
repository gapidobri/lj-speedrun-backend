module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('POSTGRES_DB', 'lj-speedrun'),
      user: env('POSTGRES_USER', 'lj-speedrun'),
      password: env('POSTGRES_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
