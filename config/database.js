module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USER', 'strapi'),
      password: env('DATABASE_PASSWORD', 'rNyuWJxjKv2Bntnus2muVHTFzsPjp'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
