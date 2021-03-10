module.exports = {
 
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Kieran McBride - Portfolio";
      return args;
    });
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/#/contact"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};