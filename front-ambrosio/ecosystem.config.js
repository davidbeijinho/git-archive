module.exports = {
  apps : [{
    name: 'frontAmbrosio',
    script: 'server.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user: 'pi',
      host: '192.168.0.159',
      ref: 'origin/master',
      repo: 'git@github.com:davidbeijinho/front-ambrosio.git',
      path: '/home/pi/front-ambrosio/production',
      'post-deploy':
        'npm install --only=prod && npm run build &&  ./node_modules/pm2/bin/pm2 reload ecosystem.config.js --env production',
    }
  }
};
