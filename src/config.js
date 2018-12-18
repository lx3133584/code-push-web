/* eslint-disable max-len */

export const port = process.env.PORT || 4001;
export const host = process.env.WEBSITE_HOSTNAME || `127.0.0.1:${port}`;

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const common = {
  api: {
    URL: 'http://code-push-server.duoduo.net.cn', // production code-push-server address
    devURL: 'http://code-push-server.duoduo.net.cn', // development code-push-server address
  },
};
