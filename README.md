## 使用
```
const {defineConfig} = require('@vue/cli-service');
const StartingPatternWebpackPlugin = require('starting-pattern-webpack-plugin');

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new StartingPatternWebpackPlugin({
                type: 'keyboard',
                color: 'green',
            })
        ]
    }
});

```
