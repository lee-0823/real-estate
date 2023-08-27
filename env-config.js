const debug = process.env.NODE_ENV !== 'production';
const repository = 'real-estate';

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${repository}` : '',
};
