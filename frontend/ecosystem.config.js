
require("dotenv").config({ path: ".env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [
    {
      name: "frontend",
      script: "./build/index.html",
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: "https://github.com/IPlesovskikh/nodejs-pm2-deploy.git",
      path: DEPLOY_PATH,
      "post-deploy": "cd frontend && npm install && npm run build",
    },
  },
};