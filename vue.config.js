module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Catherine Gilbert";
                return args;
            })
    },
    pwa: {
        name: "Catherine Gilbert",
        themeColor: "#3a2e39",
        msTileColor: "#3a2e39",
        appleMobileWebAppCapable: true,
    }
}