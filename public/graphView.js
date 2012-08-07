var datastore;
var datastore1;
var localTime;
var date;
var hr=0,hr1=0,hr2=0,hr3=0,hr4=0,hr5=0,hr6=0,hr7=0,hr8=0,hr9=0,hr10=0;
var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0,a7=0;
var b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,b7=0,b8=0,b9=0,b10=0;

var v1,v2,v3,v4,v5,v6,v7;
var dt1,dt2,dt3,dt4,dt5,dt6,dt7;
var s1=0,s2=0,s3=0,s4=0,s5=0,s6=0,s7=0;
var bar;
var mydate=new Array();
var mytime=new Array();

var fixdate=new Array();
var val=new Array();
var ln1; 
 var fc1,fc2;
var t=new Array();
var t1=new Array();
var hr1;
var tml=0;
 $(document).ready(function() {
	 //alert(datastore);
/*	 localTime = new Date();
  v1 = String(localTime.getDate() +"/"+ (localTime.getMonth()+1) +"/"+ (localTime.getFullYear()));
  v2 = (1).day().ago().getDate()+"/"+((1).day().ago().getMonth()+1) +"/"+ ((1).day().ago().getFullYear());
  v3 = (2).day().ago().getDate()+"/"+ ((2).day().ago().getMonth()+1) +"/"+ ((2).day().ago().getFullYear());
  v4 = (3).day().ago().getDate()+"/" + ((3).day().ago().getMonth()+1) +"/"+ ((3).day().ago().getFullYear());
  v5 = (4).day().ago().getDate()+"/"+ ((4).day().ago().getMonth()+1) +"/"+ ((4).day().ago().getFullYear()) ;
  v6 = (5).day().ago().getDate()+"/" + ((5).day().ago().getMonth()+1) +"/"+ ((5).day().ago().getFullYear());
  v7 = (6).day().ago().getDate()+"/"+ ((6).day().ago().getMonth()+1) +"/"+ ((6).day().ago().getFullYear());
	*/
 setInterval(function(){myTimer()},100);
    });



      function myTimer()
      { 
	  			hr=0,hr1=0,hr2=0,hr3=0,hr4=0,hr5=0,hr6=0,hr7=0,hr8=0,hr9=0,hr10=0;
				b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,b7=0,b8=0,b9=0,b10=0;
	   localTime = new Date();
  v1 = String(localTime.getDate() +"/"+ (localTime.getMonth()+1) +"/"+ (localTime.getFullYear()));
  v2 = (1).day().ago().getDate()+"/"+((1).day().ago().getMonth()+1) +"/"+ ((1).day().ago().getFullYear());
  v3 = (2).day().ago().getDate()+"/"+ ((2).day().ago().getMonth()+1) +"/"+ ((2).day().ago().getFullYear());
  v4 = (3).day().ago().getDate()+"/" + ((3).day().ago().getMonth()+1) +"/"+ ((3).day().ago().getFullYear());
  v5 = (4).day().ago().getDate()+"/"+ ((4).day().ago().getMonth()+1) +"/"+ ((4).day().ago().getFullYear()) ;
  v6 = (5).day().ago().getDate()+"/" + ((5).day().ago().getMonth()+1) +"/"+ ((5).day().ago().getFullYear());
  v7 = (6).day().ago().getDate()+"/"+ ((6).day().ago().getMonth()+1) +"/"+ ((6).day().ago().getFullYear());
	
  hr = localTime.getHours();
  hr1 = (1).hour().ago().getHours();
  hr2 = (2).hour().ago().getHours();
  hr3 = (3).hour().ago().getHours();
  hr4 = (4).hour().ago().getHours() ;
  hr5 = (5).hour().ago().getHours();
  hr6 = (6).hour().ago().getHours();
     hr7 = (7).hour().ago().getHours();
  hr8 = (8).hour().ago().getHours();
  hr9 = (9).hour().ago().getHours();
  hr10 = (10).hour().ago().getHours();
	 
	  
	   a1=0,a2=0,a3=0,a4=0,a5=0,a6=0,a7=0;
		   for(var i=0;i<datastore.length;i++)
	  	{ 
	  		//document.write(datastore[i].ip+' -- ' +datastore[i].date);
			if(v1==datastore[i].date)
			{ a1 = a1 + 1; //alert(a1);
			}
			if(v2==datastore[i].date)
			{ a2 = a2 + 1; //alert(a1);
			}
			if(v3==datastore[i].date)
			{ a3 = a3 + 1; //alert(a1);
			}
			if(v4==datastore[i].date)
			{ a4 = a4 + 1; //alert(a1);
			}
			if(v5==datastore[i].date)
			{ a5 = a5 + 1; //alert(a1);
			}
			if(v6==datastore[i].date)
			{ a6 = a6 + 1; //alert(a1);
			}
			if(v7==datastore[i].date)
			{ a7 = a7 + 1; //alert(a1);
			}
			
		
		
		  
		
		
		
		}
	//	document.write(v1 +' ---- '+ v2 +' ---- '+ v3 + ' ---- ' + v4 + ' - ---'+ v5 +' ----- '+ v6 + ' ---- '+v7+'\n');
	//	document.write("\n"+ a1 +' ---- '+ a2 +' ---- '+ a3 + ' ---- ' + a4 + ' - ---'+ a5 +' ----- '+ a6 + ' ---- '+a7);
	//   document.write("\n total = "+datastore.length);
	
	    
	 	  bar = new RGraph.Bar('cvs', [a7,a6,a5,a4,a3,a2,a1]);
	      bar.Set('chart.labels', [v7,v6,v5,v4,v3,v2,v1]);
		  var c=document.getElementById("cvs");
   		  var ctx=c.getContext("2d");
          ctx.fillStyle="#FFFFFF";
          ctx.fillRect(0,0,700,300);
          bar.Draw();
		  


		    ln1 = datastore1.length;

			for(var m=0;m<ln1;m++)
			{
				if(hr==datastore1[m].time)
				{ b1=b1+ 1}
				if(hr1==datastore1[m].time)
				{ b2=b2+ 1}
				if(hr2==datastore1[m].time)
				{ b3=b3+ 1}
				if(hr3==datastore1[m].time)
				{ b4=b4+ 1}
				if(hr4==datastore1[m].time)
				{ b5=b5+ 1}
				if(hr5==datastore1[m].time)
				{ b6=b6+ 1}
				if(hr6==datastore1[m].time)
				{ b7=b7+ 1}
				if(hr7==datastore1[m].time)
				{ b8=b8+ 1}
				if(hr8==datastore1[m].time)
				{b9=b9+ 1}
				if(hr9==datastore1[m].time)
				{ b10=b10+ 1}
				
							}// end of for lloop
		  
		  
		  
		  
		  
		  
		  
		  //alert(b1+'-' + b2 +'-'+ b3);
		  
		  bar = new RGraph.Bar('cvs1', [b10,b9,b8,b7,b6,b5,b4,b3,b2,b1]);
	      bar.Set('chart.labels', [hr9+":00",hr8+":00",hr7+":00",hr6+":00",hr5+":00",hr4+":00",hr3+":00",hr2+":00",hr1+":00",hr+":00"]);
		  var c=document.getElementById("cvs1");
   		  var ctx=c.getContext("2d");
          ctx.fillStyle="#FFFFFF";
          ctx.fillRect(0,0,700,300);
          bar.Draw();
		// end of time wise chart
      }// end of interval function