let score = 0
if (score == 4){
    alert('Ты победил!');
}
    
document.querySelector(".score").innerHTML = score
document.querySelector(".item1").onclick = function(){
    document.querySelector(".item1").style.display = "none";
    alert("Молодец! Нашёл подкову!")
    score = score + 1
    document.querySelector(".score").innerHTML = score
    document.querySelector(".i1").style.textDecoration = "line-through"
    if (score == 4){
    alert('Ты победил!');
    }
}
document.querySelector(".item2").onclick = function(){
    document.querySelector(".item2").style.display = "none";
    alert("Молодец! Нашёл шляпу!")
    score = score + 1
    document.querySelector(".score").innerHTML = score 
    document.querySelector(".i2").style.textDecoration = "line-through"

    if (score == 4){
    alert('Ты победил!');
    }   
}
document.querySelector(".item3").onclick = function(){
    document.querySelector(".item3").style.display = "none";
    alert("Молодец! Нашёл меч!")
    score = score + 1
    document.querySelector(".score").innerHTML = score 
    document.querySelector(".i3").style.textDecoration = "line-through"

    if (score == 4){
    alert('Ты победил!');
    }
}
document.querySelector(".item4").onclick = function(){
    document.querySelector(".item4").style.display = "none";
    alert("Молодец! Нашёл корону!")
    score = score + 1
    document.querySelector(".score").innerHTML = score 
    document.querySelector(".i4").style.textDecoration = "line-through"

    if (score == 4){
    alert('Ты победил!');
    }
}




