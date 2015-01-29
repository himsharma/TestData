module.exports = function (response) {
  this.response = response;
};
module.exports.prototype = {
  extend: function (properties) {
    var Child = module.exports;
    Child.prototype = module.exports.prototype;
    for (var key in properties) {
      Child.prototype[key] = properties[key];
    }
    return Child;
  },

  render: function (data) {
    if (this.response) {
      this.response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      this.response.end(JSON.stringify(data));
    }
  }
}
