module.exports = {
  async redirects() {
    return [
      {
        source: '/front-end-portfolio',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
