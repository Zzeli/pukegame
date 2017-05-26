$(function(){
	var zhuomian=$('.zhuomian')
    var puke=[];
    var biao={};
    var color=['s','h','c','d'];
    while(puke.length<52){
         var shuzi=Math.ceil(Math.random()*13);
         var huase=color[Math.floor(Math.random()*4)];
         if(!biao[shuzi+'_'+huase]){
         	biao[shuzi+'_'+huase]=true;
         	puke.push({
         		'shuzi':shuzi,
         		'huase':huase         		
         	})
         }
    }
    var dirs={
    	'1':'A',
    	'2':2,
    	'3':3,
    	'4':4,
    	'5':5,
    	'6':6,
    	'7':7,
    	'8':8,
    	'9':9,
    	'10':'T',
    	'11':'J',
    	'12':'Q',
    	'13':'K'
    };
for(var i=0,index=0;i<7;i++){
	for(var j=0;j<i+1;j++){
		index++;
		var item=puke[index];
		// console.log(item)
		var url='url(imgs/'+dirs[item.shuzi]+item.huase+'.png)';
		$('<div>').addClass('pai shang').attr('id',i+'_'+j)
		.data('num',item.shuzi)
		.css({backgroundImage:url})
		.appendTo(zhuomian).delay(index*30)
		.animate({
			opacity:1,
			top:i*50,
			left:(6-i)*50+j*100
		})
	}
}

for(;index<puke.length;index++){
	var item=puke[index];
		// console.log(item)
		var url='url(imgs/'+dirs[item.shuzi]+item.huase+'.png)';
		$('<div>').addClass('pai zuo').attr('id',i+'_'+j)
		.data('num',item.shuzi)
		.css({backgroundImage:url}).appendTo(zhuomian)
		.delay(index*30)
		.animate({
			opacity:1,
			top:460,
			left:160
		})
}
	var first=null;
$('.zhuomian .pai').click(function(){
	var coord=$(this).attr('id').split('_');
	var i=parseInt(coord[0]),j=parseInt(coord[1]);
	console.log(typeof(i,j))
    if(i<6){
	if($('#'+(i+1)+'_'+j).length||$('#'+(i+1)+'_'+(j+1)).length){
		console.log($('#'+(i+1)+'_'+j))
	return ;
}
}
	if($(this).data('num')===13){
		$(this).animate({
			top:0,
			left:600,
			opacity:0
		}).queue(function(){
			$(this).remove();
		})
	   return;
	}

 $(this).toggleClass('active');
 if($(this).hasClass('active')){
 	$(this).animate({
 		top:'-=30'
 	})
 }else{
 	$(this).animate({
 		top:'+=30'
 	})
 }

if(!first){
	first=$(this);
}else{
	
   if($(this).data('num')+first.data('num')==13){
   	      $('.pai.active').each(function(index,obj){
		   	      	$(obj).animate({
		   	      	  top:0,
		   	      	  left:600,
		   	      	  opacity:0
		   	      }).queue(function(){
		   	      	$(this).remove();
		   	      })
   	      })
   	      
   }else{
   	$('.pai.active').removeClass('active').each(function(index,obj){
   		$(obj).animate({
   			top:'+=30'
   		})

   	})
   }
   first=null;
}

})


var zindex=1;
$('.zhuomian .move_right').click(function(){
	// alert(1)
      $('.pai.zuo').eq(-1).addClass('you').removeClass('zuo').css({
      	zIndex:++zindex}).delay($(this)*50)
      .animate({
           left:'+=340'
      })
})
$('.zhuomian .move_left').click(function(){
	// alert(1)
	if(!$('.pai.you').length){
		return;
	}else{

      $('.pai.you').each(function(index,obj){
	      	$(obj).addClass('zuo').removeClass('you').css({
	      	zIndex:++zindex}).delay(index*50)
	      .animate({
	           left:'-=340'
	      })
      })
	}
})

$(document).on('mousedown',function(){
	return false;
})






})