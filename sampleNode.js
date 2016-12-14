module.exports = function(RED) {
  "use strict";

  function sampleNode(config) {
    RED.nodes.createNode(this, config);

    let node = this;
    let name = config.name;
    let value = config.value;

    console.log(`name: ${name}, value: ${value}`);
  }

  RED.nodes.registerType("Sample Node", sampleNode);
};
