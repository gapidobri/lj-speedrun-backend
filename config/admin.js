module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93ce7d2efa50dca04bb1b12c98a6e396'),
  },
});
