// 配置文件路径别名
const path = require('path');
const homenav = require('./mock/homenav.json');
const recommend = require('./mock/Recommend.json');
const category = require('./mock/category.json');
const search = require('./mock/search.json');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('api', resolve('src/api'))
            .set('assets', resolve('src/assets'))
            .set('base', resolve('src/base'))
            .set('components', resolve('src/components'))
            .set('pages', resolve('src/pages'));
        // 格式.set('', resolve(''))
    },
    // 模拟后台数据
    devServer: {
        before(app) {
            app.get('/homenav', (req, res) => {
                res.json(homenav);
            });
            app.get('/recommend', (req, res) => {
                res.json(recommend);
            });
            app.get('/category', (req, res) => {
                res.json(category);
            });
            app.get('/search', (req, res) => {
                res.json(search);
            });
        }
    }
};
