const fse = require('fs-extra');
const path = require('path');
const plugin = require('@parcel/plugin');

const getConfig = (projectRoot, logger) => {
  const config = fse.readJsonSync(path.join(projectRoot, 'package.json'))
    .staticFilesCopy;

  if (!config) {
    logger.error({
      message: '❌  Missing property staticFileCopy in package.json!',
    });
  }

  if (!Array.isArray(config)) {
    logger.error({
      message: '❌  Property staticFileCopy in package.json is not an array!',
    });
  }

  return config;
};

const copyFiles = (origin, destination, logger) => {
  try {
    fse.copySync(origin, destination);
    logger.info({
      message: `✅  Successfully copied ${origin} ===> ${destination}.`,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = new plugin.Reporter({
  async report({ event, options, logger }) {
    if (event.type === 'buildSuccess') {
      try {
        const config = getConfig(options.projectRoot, logger);
        config.forEach(({ origin, destination }) =>
          copyFiles(origin, destination, logger)
        );
      } catch (err) {
        logger.error({
          message : `🚨  Error: ${err.message}`
        })
      }
    }
  },
});
