XIR
===

jQuery Cross Domain Image Request

How To Use
__________

$.xir({
  url: '{url to requisition}',
  data: { put: "some data here"},
  complete: function(){
    console.log('The End.');
  }
});
