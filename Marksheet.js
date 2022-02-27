

function call()
{
    var rn=rollno.value
    var sn=studentn.value
    var fn=fathern.value
    var dob=birth.value
    var gm=genM.value
    var gf=genF.value
    var schooln=schoolname.value
    var h=parseInt(hin.value)
    var e=parseInt(eng.value)
    var m=parseInt(math.value)
    var p=parseInt(phy.value)
    var c=parseInt(che.value)

    var tn=h+e+m+p+c
    var per=tn/5
    var div=0
    if(per<=64)
    { div=2
    }
    else if(per<=54)
    { div=3
    }
    else if(per<=100)
    { div=1
    }
    
    if(h>=85)
    { re1='D'
    }
    else if(h<85)
    { re1='-'
    }
    if(e>=85)
    { re2='D'
    }
    else if(e<85)
    { re2='-'
    }
    if(m>=85)
    { re3='D'
    }
    else if(m<85)
    { re3='-'
    }
    if(p>=85)
    { re4='D'
    }
    else if(p<85)
    { re4='-'
    }
    if(c>=85)
    { re5='D'
    }
    else if(c<85)
    { re5='-'
    }
    
    if(genM.checked)
    { g='S/O'
    }
    else if(genF.checked)
    { g='D/O'
    }
    if(tn<=170)
    { var pf='Fail'
    }
    else
    { var pf='Pass'
    }
    var q="<table border='1' cellpadding='5' cellspacing='0' width='60%'>"
    q+="<tr><th><img src='logo1.png' width='100'></th><td align='center'><FONT face='impact' size='5' color='red'>CENTRAL BOARD OF SECONDARY EDUCATION</FONT><br><h3><b>Committed to Equity and Excellence in Education</b></h3></td></tr></table><BR>"
    q+="<table border='1' cellpadding='5' cellspacing='0' width='60%'>"
    q+="<tr><td><b>"+schooln+" SCHOOL <br> "+sn+" "+g+" "+fn+" <br> "+rn+" <br> "+dob+"</b></tr></td></table><br>"

    q+="<table border='1' cellpadding='5' cellspacing='0' width='60%'><tr><th>Sub Code</th><th>Subjects</th><th>MIN</th><th>MAX</th><th>Marks</th><th>Remarks</th></tr>"
    q+="<tr><th>301</th><th>Hindi</th><th>35</th><th>100</th><td>"+h+"</td><td>"+re1+"</td></tr>"
    q+="<tr><th>302</th><th>English</th><th>35</th><th>100</th><td>"+e+"</td><td>"+re2+"</td></tr>"
    q+="<tr><th>303</th><th>Mathematics</th><th>35</th><th>100</th><td>"+m+"</td><td>"+re3+"</td></tr>"
    q+="<tr><th>304</th><th>Physics</th><th>35</th><th>100</th><td>"+p+"</td><td>"+re4+"</td></tr>"
    q+="<tr><th>305</th><th>Chemistry</th><th>35</th><th>100</th><td>"+c+"</td><td>"+re5+"</td></tr></table>"
    q+="<table  border='1' cellpadding='5' cellspacing='0' width='60%'><tr><td>Total Number:"+tn+"</td> <td>Percentage: "+per+"%<td> Division: "+div+"nd</td><td>"+pf+"</td></tr></table>"
    ms.innerHTML=q

}


