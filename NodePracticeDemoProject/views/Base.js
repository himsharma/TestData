module.exports = function (response, template) {
  this.response = response;
  this.template = template;
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
  render: function (data, parts) {
    if (this.response && this.template) {
      this.response.locals = data;
      this.response.render(this.template, {
        partials: parts
      });
    }
  }
}
