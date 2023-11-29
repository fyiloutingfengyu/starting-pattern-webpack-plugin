## 安装
```
npm install starting-pattern-webpack-plugin -g
```

## 使用
```
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
