(function(){

  "use strict";

  var PairWithMeProto  = Object.create(HTMLElement.prototype);

  PairWithMeProto.createdCallback = function() {
    var shadow   = this.createShadowRoot()
      , imprt    = document.querySelector('[href*="pair-with-me.html"]').import
      , template = imprt.querySelector('#pair-with-me-tmpl')
      ;
    shadow.appendChild(template.content.cloneNode(true));
  };

  PairWithMeProto.attachedCallback = function() {
    var img    = this.img    = this.shadowRoot.querySelector('img')
      , anchor = this.anchor = this.shadowRoot.querySelector('a')
      , imgSrc = this.getAttribute('image')   || "http://www.pairprogramwith.me/assets/badge.svg"
      , imgAlt = this.getAttribute('summary') || "Pair Program with me picture"
      ;

    this.$event = new CustomEvent('pair-with-me');
    this.pictureSrc(imgSrc);
    this.pictureDesc(imgAlt);
    this.action();
  };

  PairWithMeProto.attributeChangedCallback = function(attrName, oldVal, newVal) {
    if(oldVal !== newVal){
      if(attrName === 'image'){ this.pictureSrc(newVal); }
      if(attrName === 'summary' ){ this.pictureDesc(newVal); }
    }
  };

  PairWithMeProto.action = function(){
    if(this.getAttribute('link')) {
      this.anchor.setAttribute('href', this.getAttribute('link'));
    } else {
      this.anchor.addEventListener('click', this.publishEvent.bind(this));
    }
  };

  PairWithMeProto.publishEvent = function(evt){
    evt.preventDefault();
    document.dispatchEvent(this.$event);
  };

  PairWithMeProto.pictureSrc = function(imgSrc){
    this.img.setAttribute('src', imgSrc);
  };

  PairWithMeProto.pictureDesc = function(imgAlt){
    this.img.setAttribute('alt', imgAlt);
  };

  window.PairWithMe = document.registerElement('pair-with-me', {
    prototype: PairWithMeProto
  });

}(window, document));
