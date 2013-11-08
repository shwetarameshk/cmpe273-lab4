$(":button").click(function updateStatus() {
    var isbn = this.id;
    $.ajax({
  	  url: '/library/v1/books/'+isbn+"?status=lost",
  	  type: 'PUT',
  	  statusCode:{
  		  200:function(){
  			  $('#'+isbn).prop('disabled', true);
  			  $('#status'+isbn).text("lost");
  		  }
    	
  	  }
  	});
});
