var __ourip_parts=document.currentScript.src.split('/')



Module.register("getip", {
  // holder for config info from module_name.js
    ourdiv:null,
    ourIP:null,
    getHeader: function(){
      return null
    },
    start: function(){
      let our_ap=__ourip_parts.slice(3,4)
      our_ap.push(__ourip_parts.slice(-2,-1)[0])
      let ourip_service=our_ap.join('/')
      fetch(ourip_service)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("getip results="+JSON.stringify(responseData))
         this.ourIP=responseData.address
        this.updateDom()
      })
    },
    getDom: function(){
      if(this.ourIP !== null){
        this.ourdiv=document.createElement('div')
        this.ourdiv.id="getip_address"
        this.ourdiv.innerText=this.ourIP
        this.ourdiv.style="display:none;"
      }
      return this.ourdiv
    }
  }
)