var mocha = require('./lib/jake-mocha');
mocha.defineTask(
    {
      name: 'mocha',
      files: 'spec/*.js',
      mochaOptions: {
        ui: 'bdd',
        reporter: 'spec'
      }
    }
);
task('default', ['mocha']);