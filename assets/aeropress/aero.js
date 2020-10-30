
// AeroPress Random Recipe Generator
// Alvaro Aguirre - September 24th

function getGrams(){
    var num = Math.random();
    if(num < 0.05) return "10";  
    else if(num < 0.1) return "11";
    else if(num < 0.15) return "11.5";
    else if(num < 0.175) return "12";
    else if(num < 0.225) return "12.5";
    else if(num < 0.275) return "13";
    else if(num < 0.325) return "13.5";
    else if(num < 0.4) return "14";
    else if(num < 0.5) return "14.5";
    else if(num < 0.6) return "15";
    else if(num < 0.7) return "15.5";
    else if(num < 0.75) return "16";
    else if(num < 0.8) return "16.5";
    else if(num < 0.85) return "17";
    else if(num < 0.9) return "17.5";
    else if(num < 0.95) return "18";
    else return "19"; 
}

function getWaterTemp(){
    var num = Math.random();
    if(num < 0.05) return "78 °C / 172 °F";  
    else if(num < 0.2) return "80 °C / 176 °F";
    else if(num < 0.27) return "82 °C / 179 °F";
    else if(num < 0.4) return "85 °C / 185 °F";
    else if(num < 0.5) return "88 °C / 190 °F";
    else if(num < 0.7) return "90 °C / 194 °F";
    else if(num < 0.82) return "92 °C / 197 °F";
    else if(num < 0.92) return "93 °C / 199 °F";
    else if(num < 0.97) return "94 °C / 201 °F";
    else return "95 °C / 203 °F"; 
}

function getWaterAmount(){
    var num = Math.random();
    if(num < 0.05) return "150 ml";  
    else if(num < 0.1) return "175ml";
    else if(num < 0.2) return "190ml";
    else if(num < 0.3) return "200ml";
    else if(num < 0.4) return "210ml";
    else if(num < 0.5) return "220ml";
    else if(num < 0.6) return "225ml";
    else if(num < 0.7) return "230ml";
    else if(num < 0.85) return "240ml";
    else return "250 ml"; 
}

function getPosition(){
    var num = Math.random();
    if(num < 0.66) return "inverted";  
    else return "standard"; 
}

function getStir(){
    var num = Math.random();
    if(num < 0.15) return "Don't stir";  
    else if(num < 0.3) return "Stir once";
    else if(num < 0.4) return "Stir three times";
    else if(num < 0.5) return "Stir four times";
    else if(num < 0.6) return "Stir five times";
    else if(num < 0.7) return "Stir slowly for ten seconds";
    else if(num < 0.8) return "Stir vigorously for ten seconds";
    else if(num < 0.9) return "Stir slowly for fifteen seconds";
    else return "Stir twice"; 
}

function getBrewtime(){
    var num = Math.random();
    if(num < 0.05) return "45 seconds";  
    else if(num < 0.1) return "1 minute";
    else if(num < 0.175) return "1:15 minutes";
    else if(num < 0.225) return "1:20 minutes";
    else if(num < 0.3) return "1:30 minutes";
    else if(num < 0.4) return "1:45 minutes";
    else if(num < 0.55) return "2 minutes";
    else if(num < 0.65) return "2:15 minutes";
    else if(num < 0.75) return "2:30 minutes";
    else if(num < 0.85) return "3 minutes";
    else if(num < 0.925) return "3:15 minutes";
    else return "3:30 minutes"; 
}

function getFilters(){
    var num = Math.random();
    if(num < 0.8) return "one paper filter";  
    else return "two paper filters"; 
}

function getGrind(){
    var num = Math.random();
    if(num < 0.2) return "fine";  
    else if(num < 0.4) return "medium fine";
    else if(num < 0.6) return "medium";
    else if(num < 0.8) return "medium coarse";
    else return "coarse"; 
}

function getBloomAmount(){
    var num = Math.random();
    if(num < 0.1) return "Pour 30 ml of water.";  
    else if(num < 0.3) return "Pour 50 ml of water.";  
    else if(num < 0.4) return "Pour 75 ml of water.";  
    else if(num < 0.5) return "Pour 100 ml of water.";  
    else if(num < 0.6) return "Pour 125 ml of water.";  
    else return ""; 
}

function getBloomTime(){
    var num = Math.random();
    if(num < 0.2) return "10 seconds";  
    else if(num < 0.4) return "15 seconds";  
    else if(num < 0.6) return "20 seconds";  
    else if(num < 0.8) return "30 seconds";  
    else return "45 seconds"; 
}

function generateRecipe() {

    var grams = getGrams();
    var position = getPosition();
    var stir_bloom = getStir();
    var stir = getStir();
    var brewtime = getBrewtime();
    var grind = getGrind();
    var temp = getWaterTemp();
    var water = getWaterAmount();
    var filter = getFilters();
    var bloom = getBloomAmount();
    var bloomtime = getBloomTime();

    document.getElementById("recipe").style.display = "block";
    document.getElementById("water").innerHTML = "Heat " + water + " of water at "  + temp;
    document.getElementById("grams_grind").innerHTML = "Grind " + grams + " grams of coffee, "  + grind;
    document.getElementById("posit").innerHTML = "Place your Aeropress in the " + position + " position";
    document.getElementById("filter").innerHTML = "Put " + filter + " on the Aeropress cap and rinse";
    if(bloom != "") document.getElementById("bloom_amt").innerHTML = bloom + " " + stir_bloom;
    if(bloom == "") document.getElementById("bloom_amt").innerHTML = "";
    if(bloom != "") document.getElementById("bloom_time").innerHTML = "Let the coffee bloom for " + bloomtime;
    if(bloom == "") document.getElementById("bloom_time").innerHTML = "";
    if(bloom != "") document.getElementById("pour").innerHTML = "Pour the remaining water into the chamber. " + stir;
    if(bloom == "") document.getElementById("pour").innerHTML = "Pour the water into the chamber. " + stir;
    if(position == "inverted") document.getElementById("press").innerHTML = "After " + brewtime + ", flip the Aeropress and press gently";
    if(position != "inverted") document.getElementById("press").innerHTML = "After " + brewtime + ", put the plunger on the Aeropress and press gently";
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}


var intervalRef, current, stoptime, count, oldcount;

function startTimer(){
    document.getElementById("timer").style.display = "inline";
    document.getElementById("pause").style.display = "inline";
    document.getElementById("restart").style.display = "inline";
    document.getElementById("start").style.display = "none";

    var start = new Date();

    intervalRef = setInterval(_ => {
        current = new Date();
        count = +current - +start;
            
        var s = Math.floor((count /  1000)) % 60;
        var m = Math.floor((count / 60000)) % 60;
          
        $('#timer').text(zeroPad(m,2) + ":" + zeroPad(s,2) );
    }, 10);
}

function stopTimer(){
    document.getElementById("pause").style.display = "none";
    document.getElementById("resume").style.display = "inline";
    clearInterval(intervalRef);
}

function resumeTimer(){

    document.getElementById("resume").style.display = "none";
    document.getElementById("pause").style.display = "inline";

    oldcount = count;
    var start = new Date();

    intervalRef = setInterval(_ => {
        current = new Date();
        count = +current - +start + oldcount;
            
        var s = Math.floor((count /  1000)) % 60;
        var m = Math.floor((count / 60000)) % 60;
          
        $('#timer').text(zeroPad(m,2) + ":" + zeroPad(s,2) );
    }, 10);
}

function restartTimer(){
    stopTimer();
    document.getElementById("resume").style.display = "none";
    document.getElementById("pause").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("start").style.display = "inline";
    oldcount = 0;
    count = 0;
    document.getElementById("timer").innerHTML = "00:00";
}

function clearTimer(){
    stopTimer();
    document.getElementById("timer").innerHTML = "00:00";
    document.getElementById("timer").style.display = "none";
    document.getElementById("start").style.display = "inline";
    document.getElementById("resume").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("stop").style.display = "none";
}