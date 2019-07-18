module.exports = function(app) {
  app.get('https://pokeapi.co/api/v2/generation/:genNum', function(req, res) {
    poke.getRegion(req, res);
  });
};
