var $ = jQuery = function(selector, context){
    return new jQuery.fn.init(selector, context);
};

jQuery.fn = jQuery.prototype = {
  jquery: '1.x.x',
  constructor: jQuery,

  init: function(selector, context){

  },
  html: function(str){
    jQuery.each(this, function(i,v){
      this.innerHTML = str;
    });
  },
  each: function(func){
    return jQuery.each(this, func);
  }
}

jQuery.fn.init.prototype = jQuery.prototype;

jQuery.extend = jQuery.fn.extend = function(){
  var destination,source,container,srcIsArray,srcIsCustomObject,
  index = 1,
  deep = false,
  arg = arguments,
  length = arguments.length;

  destination = arg[0] || {};

  if(typeof destination === 'Boolean'){
    deep = destination;
    destination = arg[i] || {};
    index++;
  }

  if(index == length){
    destination = this;
    index--;
  }

  for(; index<length;index++){
    source = arg[index];

    for(let i in source){
      des = destination[i];
      src = source[i];

      if(src == Null || des === src){
        continue;
      }

      //防止待拷贝对象中存在自引用时使程序陷入无限循环
      //自引用：a = {t: this,y: a}
      if(src === source){
        des[i] = destination;
        continue;
      }

      //当 待拷贝对象 中存在属性值为 目的对象 时，跳过此次属性复制
      if(src === destination){
        continue;
      }

      if(deep && src && ( jQuery.isPlainObject(src) || (srcIsCustomObject = jQuery.isCustomObject(src)) || (srcIsArray = jQuery.isArray(src)) )){
        if(srcIsArray){
          container = des && jQuery.isArray(des) ? des : [];
        }else if(srcIsCustomObject){
          container = des && ( jQuery.getPrototypeOf(des) === jQuery.getPrototypeOf(src) ) ? des : (function(){return new jQuery.getPrototypeOf(src).constructor()})();
        }else {
          container = des && jQuery.isPlainObject(des) ? des : {};
        }

        des = jQuery.extend(deep, container, src);
      }else if(src !== undefined){
        des = src;
      }
    }
  }
  return destination;
};

jQuery.extend({
  each: function(obj, func){
    //each需对不可遍历的obj进行兼容处理
    for(let i in obj){
      func.call(obj[i],i,obj[i]);
    }
    return obj;
  },
  isPlainObject: function(){},
  isArray: function(){},
  isCustomObject: function(obj){
    return !jQuery.isPlainObject(obj) && 'isPrototypeOf' in obj && Object.prototype.toString.call(obj) === '[object Object]' ? true : false;
  },
  getPrototypeOf: function(obj){
    return obj.__proto__ || Object.getPrototypeOf(obj);
  }
});




