module.exports = function(RED){
	function nr-epd(config){
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input',function(msg){
			msg.payload = msg.payload;
			node.send(msg);
		});
	}
	RED.nodes.registerType("nr-epd",nr-epd);
}
