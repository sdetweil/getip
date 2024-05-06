var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({


	start: function(){ 
			console.log(this.name+" setup for ip address get")
	    this.expressApp.get("/modules/"+this.name, (req, res) => {
	      // redirect to config form
	      console.log(this.name+" responding with "+'{"address":"'+req.socket.remoteAddress+'"}')
	      res.send('{"address":"'+req.socket.remoteAddress+'"}')
	    });
	}   
  })