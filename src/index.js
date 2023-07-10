const colors = require('picocolors');
const patternList = require('./pattern-list');

class StartingPatternWebpackPlugin {
  static defaultOptions = {
    type: 'default',
    color: 'green',
    pattern: ''
  };

  constructor(options = {}) {
    this.options = { ...StartingPatternWebpackPlugin.defaultOptions, ...options };
    this.outPutLogInfo = () => {
      let successMessage = patternList[this.options.type];

      if (this.options.pattern) {
        successMessage = this.options.pattern;
      }

      console.log(colors[this.options.color](successMessage));
    };
  }

  apply(compiler) {
    compiler.hooks.done.tap(StartingPatternWebpackPlugin.name, () => {
      setTimeout(() => {
        this.outPutLogInfo();
      }, 10);
    });
  }
}

module.exports = StartingPatternWebpackPlugin;
