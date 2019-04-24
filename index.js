const { spawn } = require('child_process');

module.exports = async function cmd(inputString) {
  const args = inputString.split(' ');
  const command = args.shift();

  return new Promise((resolve, reject) => {
    spawn(command, args, { stdio: 'inherit' })
      .on('close', ((code) => {
        if (code === 0) resolve();
        else (reject(new Error(`Failed ${command} with code ${code}.`)));
      }));
  });
};