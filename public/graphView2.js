var localTime;
var date;
var a1,a2,a3,a4,a5,a6,a7=0;
var v1,v2,v3,v4,v5,v6,v7;
var dt1,dt2,dt3,dt4,dt5,dt6,dt7;
var s1=0,s2=0,s3=0,s4=0,s5=0,s6=0,s7=0;
var bar;
var mydate=new Array();
var fixdate=new Array();
var val=new Array();
 $(document).ready(function() {
	 localTime = new Date();
  v1 = String(localTime.getDate() +"/"+ (localTime.getMonth()+1) +"/"+ (localTime.getFullYear()));
  v2 = (1).day().ago().getDate()+"/"+((1).day().ago().getMonth()+1) +"/"+ ((1).day().ago().getFullYear());
  v3 = (2).day().ago().getDate()+"/"+ ((2).day().ago().getMonth()+1) +"/"+ ((2).day().ago().getFullYear());
  v4 = (3).day().ago().getDate()+"/" + ((3).day().ago().getMonth()+1) +"/"+ ((3).day().ago().getFullYear());
  v5 = (4).day().ago().getDate()+"/"+ ((4).day().ago().getMonth()+1) +"/"+ ((4).day().ago().getFullYear()) ;
  v6 = (5).day().ago().getDate()+"/" + ((5).day().ago().getMonth()+1) +"/"+ ((5).day().ago().getFullYear());
  v7 = (6).day().ago().getDate()+"/"+ ((6).day().ago().getMonth()+1) +"/"+ ((6).day().ago().getFullYear());
	
	fixdate[0]=v1;
	fixdate[1]=v2;
	fixdate[2]=v3;	
	fixdate[3]=v4;
	fixdate[4]=v5;
	fixdate[5]=v6;
	fixdate[6]=v7;
		 a1 = parseInt(document.getElementById("lb1").innerHTML);
		 a2 = parseInt(document.getElementById("lb2").innerHTML);
	     a3 = parseInt(document.getElementById("lb3").innerHTML);
	  	 a4 = parseInt(document.getElementById("lb4").innerHTML);
	  	 a5 = parseInt(document.getElementById("lb5").innerHTML);
		 a6 = parseInt(document.getElementById("lb6").innerHTML);
      	 a7 = parseInt(document.getElementById("lb7").innerHTML);
		 val[0]=a1;
		 val[1]=a2;
		 val[2]=a3;
		 val[3]=a4;
		 val[4]=a5;
		 val[5]=a6;
		 val[6]=a7;
		 
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
			
	 a1 = parseInt(document.getElementById("lb1").innerHTML);
	 a2 = parseInt(document.getElementById("lb2").innerHTML);
	  a3 = parseInt(document.getElementById("lb3").innerHTML);
	  a4 = parseInt(document.getElementById("lb4").innerHTML);
	a5 = parseInt(document.getElementById("lb5").innerHTML);
		a6 = parseInt(document.getElementById("lb6").innerHTML);
		 a7 = parseInt(document.getElementById("lb7").innerHTML); 
		 val[0]=a1;
		 val[1]=a2;
		 val[2]=a3;
		 val[3]=a4;
		 val[4]=a5;
		 val[5]=a6;
		 val[6]=a7;
		  dt1 =document.getElementById("dt1").innerHTML;
		  dt2 =document.getElementById("dt2").innerHTML;
		  dt3 =document.getElementById("dt3").innerHTML;
		  dt4 =document.getElementById("dt4").innerHTML;
		  dt5 =document.getElementById("dt5").innerHTML;
		  dt6 =document.getElementById("dt6").innerHTML;
		  dt7 =document.getElementById("dt7").innerHTML;
		    mydate[0]=dt1;
			mydate[1]=dt2;
			mydate[2]=dt3;
			mydate[3]=dt4;
			mydate[4]=dt5;
			mydate[5]=dt6;
			mydate[6]=dt7;
    
for(j=0;j<7;j++)
	{ ///alert(fixdate[j]);
	//alert(mydate[j])
	//	alert(a5);
			if(mydate[j] == fixdate[0])
			{  
				s1 = val[j];
			}
			if(mydate[j] == fixdate[1])
			{   		
				s2 = val[j];
			}
			if(mydate[j] == fixdate[2])
			{ 
				s3 = val[j];
			}
			if(mydate[j] == fixdate[3])
			{
				s4 = val[j];
			}
			if(mydate[j] == fixdate[4])
			{ 			
				s5 = val[j];
			}
			if(mydate[j] == fixdate[5])
			{
				s6 = val[j];
			}
			if(mydate[j] == fixdate[6])
			{ 
				s7 = val[j];
			}
			//alert(s7+'='+s6+'='+s5+'='+s4+'='+s3+'='+s2+'='+s1);
	}
parseInt(s1);parseInt(s2);parseInt(s3);parseInt(s4);parseInt(s5);parseInt(s6);parseInt(s7);
	 bar = new RGraph.Bar('cvs', [s7,s6,s5,s4,s3,s2,s1]);
	//bar = new RGraph.Bar('cvs', [2,0,0,0,1,0,16]);
            bar.Set('chart.labels', [v7,v6,v5,v4,v3,v2,v1]);
            bar.Draw();
      }