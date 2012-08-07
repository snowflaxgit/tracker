var localTime;
var date;
var a1,a2,a3,a4,a5,a6,a7;
var v1,v2,v3,v4,v5,v6,v7;
var dt1,dt2,dt3,dt4,dt5,dt6,dt7;
var s1,s2,s3,s4,s5,s6,s7;
var bar;
var mydate=new Array();
 $(document).ready(function() {
	 localTime = new Date();
  v1 = String(localTime.getDate() +"/"+ (localTime.getMonth()+1) +"/"+ (localTime.getFullYear()));
  v2 = (1).day().ago().getDate()+"/"+((1).day().ago().getMonth()+1) +"/"+ ((1).day().ago().getFullYear());
  v3 = (2).day().ago().getDate()+"/"+ ((2).day().ago().getMonth()+1) +"/"+ ((2).day().ago().getFullYear());
  v4 = (3).day().ago().getDate()+"/" + ((3).day().ago().getMonth()+1) +"/"+ ((3).day().ago().getFullYear());
  v5 = (4).day().ago().getDate()+"/"+ ((4).day().ago().getMonth()+1) +"/"+ ((4).day().ago().getFullYear()) ;
  v6 = (5).day().ago().getDate()+"/" + ((5).day().ago().getMonth()+1) +"/"+ ((5).day().ago().getFullYear());
  v7 = (6).day().ago().getDate()+"/"+ ((6).day().ago().getMonth()+1) +"/"+ ((6).day().ago().getFullYear());
	
	

	
		 a1 = parseInt(document.getElementById("lb1").innerHTML);
		 a2 = parseInt(document.getElementById("lb2").innerHTML);
	     a3 = parseInt(document.getElementById("lb3").innerHTML);
	  	 a4 = parseInt(document.getElementById("lb4").innerHTML);
	  	 a5 = parseInt(document.getElementById("lb5").innerHTML);
		 a6 = parseInt(document.getElementById("lb6").innerHTML);
      	 a7 = parseInt(document.getElementById("lb7").innerHTML);
		 
		  dt1 =document.getElementById("dt1").innerHTML;
		  dt2 =document.getElementById("dt2").innerHTML;
		  dt3 =document.getElementById("dt3").innerHTML;
		  dt4 =document.getElementById("dt4").innerHTML;
		  dt5 =document.getElementById("dt5").innerHTML;
		  dt6 =document.getElementById("dt6").innerHTML;
		  dt7 =document.getElementById("dt7").innerHTML; 
//	 date = localTime.getDate();
//	 month = localTime.getMonth()+1;
 setInterval(function(){myTimer()},1000);
    });



      function myTimer()
      {
			mydate[0]=dt1;
			mydate[1]=dt2;
			mydate[2]=dt3;
			mydate[3]=dt4;
			mydate[4]=dt5;
			mydate[5]=dt6;
			mydate[6]=dt7;
    
	 a1 = parseInt(document.getElementById("lb1").innerHTML);
	 a2 = parseInt(document.getElementById("lb2").innerHTML);
	  a3 = parseInt(document.getElementById("lb3").innerHTML);
	  a4 = parseInt(document.getElementById("lb4").innerHTML);
	a5 = parseInt(document.getElementById("lb5").innerHTML);
		a6 = parseInt(document.getElementById("lb6").innerHTML);
		 a7 = parseInt(document.getElementById("lb7").innerHTML); 
		
		  dt1 =document.getElementById("dt1").innerHTML;
		  dt2 =document.getElementById("dt2").innerHTML;
		  dt3 =document.getElementById("dt3").innerHTML;
		  dt4 =document.getElementById("dt4").innerHTML;
		  dt5 =document.getElementById("dt5").innerHTML;
		  dt6 =document.getElementById("dt6").innerHTML;
		  dt7 =document.getElementById("dt7").innerHTML;
		  
for(j=0;j<7;j++)
	{ 
	//alert(mydate[j])
			if(mydate[j] == v1)
			{  
				s1 = a1;
			}
			if(mydate[j] == v2)
			{   				
				s2 = a2;
			}
			if(mydate[j] == v3)
			{ 
				s3 = a3;
			}
			if(mydate[j] == v4)
			{
				s4 = a4;
			}
			if(mydate[j] == v5)
			{ 			
				s5 = a5;
			}
			if(mydate[j] == v6)
			{
				s6 = a6;
			}
			if(mydate[j] == v7)
			{
				s7 = a7;
			}
			//alert(s7+'='+s6+'='+s5+'='+s4+'='+s3+'='+s2+'='+s1);
	}

	 bar = new RGraph.Bar('cvs', [s7,s6,s5,s4,s3,s2,s1]);
            bar.Set('chart.labels', [v7,v6,v5,v4,v3,v2,v1]);
            bar.Draw();
      }