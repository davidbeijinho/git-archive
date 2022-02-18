module.exports = {
  apps: [
    {
      name: 'sensorAmbrosio',
      script: '.',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'pi',
      host: '192.168.0.170',
      ref: 'origin/master',
      repo: 'git@github.com:davidbeijinho/sensor-core-ambrosio.git',
      path: '/home/pi/sensor-ambrosio/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
