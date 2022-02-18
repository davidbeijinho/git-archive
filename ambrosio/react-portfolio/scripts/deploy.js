/* eslint-disable no-console */
const colors = require('colors/safe');
const FtpDeploy = require('ftp-deploy');
const PromiseFtp = require('promise-ftp');
const config = require('../config/config.secret.json');
const OPTIONS = require('../config/config.json').deploy;

const ftpDeploy = new FtpDeploy();
const ftpConfig = {
  user: config.ftpUsername,
  password: config.ftppassword,
  host: config.ftpHost,
  port: 21,
  localRoot: OPTIONS.localDir,
  remoteRoot: OPTIONS.remoteDir,
  include: ['*', '**/*'],
  exclude: [],
  deleteRemote: false,
};
const ftp = new PromiseFtp();

function checkDirectory(options) {
  return options.list.find(element => (element.name === options.name
    && element.type === options.type));
}

function upload() {
  ftpDeploy.deploy(ftpConfig)
    .then(res => console.log(colors.green('Deploy Finish'), res))
    .catch(err => console.log(colors.red('Error deploying'), err));

  ftpDeploy.on('uploading', (data) => {
    console.log('uploading -> ', data.filename);
  });
  ftpDeploy.on('uploaded', (data) => {
    console.log('uploaded: ', `${Math.floor((data.transferredFileCount / data.totalFilesCount) * 100)}%`);
  });
  ftpDeploy.on('upload-error', (data) => {
    console.log(colors.green('upload-error'), data);
  });
}

ftp.connect({
  host: config.ftpHost,
  user: config.ftpUsername,
  password: config.ftppassword,
})
  .then((serverMessage) => {
    console.log(colors.green('Connected to server'), serverMessage);
    return ftp.list(OPTIONS.remoteBase);
  })
  .catch((err) => {
    console.log(colors.red('Error conecting'), err);
  })
  .then((list) => {
    console.log('Directory listing:');
    if (checkDirectory({ list, name: OPTIONS.directoryName, type: 'd' })) {
      console.log('Send remove directory');
      return ftp.rmdir(OPTIONS.remoteDir, true)
        .then(() => {
          console.log(colors.green('Success remove directory'));
          return ftp.end();
        })
        .catch((err) => {
          console.log(colors.red('Error removing directory'), err);
          return ftp.end();
        });
    }
    console.log(colors.yellow('Directory not present'));
    return ftp.end();
  })
  .catch((err) => {
    console.log(colors.red('Error listing directory'), err);
  })
  .then(() => {
    console.log(colors.green('Conection finished'));
    upload();
  })
  .catch((err) => {
    console.log(colors.red('Error ending conection'), err);
  });
