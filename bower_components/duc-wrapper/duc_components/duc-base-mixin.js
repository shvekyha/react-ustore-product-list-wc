// Create the namespace, if it doesn't exist
if (!window.XMPDucWrapper) {
  window.XMPDucWrapper = {};
}

//Definition of the mixin which extends the base class that was passed to it
//The dedupingMixin function makes sure that the mixin is only applied once even if used more than once
XMPDucWrapper.DucBaseMixin = Polymer.dedupingMixin((base) =>

// the mixin class
class extends base {
  constructor() {
    super();
  }
  
  static get properties() {
    return {
      dialID: {
        type: Number
      },
      dialDisplayName: {
        type: String
      }
    };
  }
  
  ready(){
    super.ready();
    this.makeDucsInputUnique();
  }
  
  makeDucsInputUnique(){
    let inputElements = this.shadowRoot.querySelectorAll('input');
    for (let element of inputElements) {
      element.id += '_dialID_'+this.dialID;
    };
  }
}
);