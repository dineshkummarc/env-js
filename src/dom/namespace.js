
/**
 * @class  DOMNamespace - The Namespace interface represents an namespace in an Element object
 *
 * @extends DOMNode
 * @author Jon van Noort (jon@webarcana.com.au)
 * @param  ownerDocument : DOMDocument - The Document object associated with this node.
 */
var DOMNamespace = function(ownerDocument) {
  this.DOMNode = DOMNode;
  this.DOMNode(ownerDocument);

  this.name      = "";                           // the name of this attribute

  // If this attribute was explicitly given a value in the original document, this is true; otherwise, it is false.
  // Note that the implementation is in charge of this attribute, not the user.
  // If the user changes the value of the attribute (even if it ends up having the same value as the default value)
  // then the specified flag is automatically flipped to true
  this.specified = false;

  this.value     = "";                           // the value of the attribute is returned as a string

  this.nodeType  = DOMNode.NAMESPACE_NODE;
};
DOMNamespace.prototype = new DOMNode;
__extend__(DOMNamespace.prototype, {
    get value(){
        return this.nodeValue;
    },
    set value(value){
        this.nodeValue = String(value);
    },
    getValue:function(){
        return this.value;
    },
    setValue:function(value){
        this.value = value;
    },
    get xml(){
        var ret = "";

          // serialize Namespace Declaration
          if (this.nodeName != "") {
            ret += this.nodeName +"=\""+ __escapeXML__(this.nodeValue) +"\"";
          }
          else {  // handle default namespace
            ret += "xmlns=\""+ __escapeXML__(this.nodeValue) +"\"";
          }
        
          return ret;
    },
    toString: function(){
        return "Namespace #" + this.id;
    }
});

