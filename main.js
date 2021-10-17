var studentlist=[];
function submit(){
    var n1=document.getElementById("s1").value;
    var n2=document.getElementById("s2").value;
    var n3=document.getElementById("s3").value;
    studentlist.push(n1);
    studentlist.push(n2);
    studentlist.push(n3);
    console.log(studentlist);
    document.getElementById("result").innerHTML=studentlist;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2s").style.display="inline-block";
}
function sort(){
    studentlist.sort();
    document.getElementById("result").innerHTML=studentlist;
}