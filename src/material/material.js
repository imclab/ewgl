(function(global){
  var undef;
  
  var emptyTexture;
  
  var materialList = global.materialList;
  var lights = global.lights;
  
  
  var material = function(){
    
    materialList.registerMaterial(this);
    
    this.geometries = [];
    this.zOrdered = false;
    this.shaderProgram = undef;
    this.lastUpdate = -1;
    
    Object.defineProperties(this,{
      "renderer":{
        "get":function(){
          return global.renderer;
        }
      }
    });
    
    
  };
  
  var p = material.prototype;
  
  p.undate = function(){};
  
  p.render = function(){};


 global.material = material;

}(EWGL));