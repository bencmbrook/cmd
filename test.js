const cmd = require('.');

(async () => {
  await cmd('echo log first');
  await cmd('ls -a ..');
  await cmd('echo log last');
})();