
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["Apetyt rośnie w miarę jedzenia", "Atak jest najlepszą obroną", "Bez pracy nie ma kołaczy", "Biednemu zawsze wiatr w oczy", "Być pracowitym jak pszczoła", "Co cię nie zabije, to cię wzmocni", "Czas to pieniądz", "Co dwie głowy, to nie jedna", "Człowiek człowiekowi wilkiem", "Grosz do grosza, a będzie kokosza", "Fortuna kołem się toczy", "Cel uświęca środki", "Nadzieja matką głupich", "Nie szata zdobi człowieka", "Gdzie dwóch się bije, tam trzeci korzysta", "Jedna jaskółka wiosny nie czyni", "Elektryka prąd nie tyka", "Lepszy wróbel w garści niż gołąb na dachu", "Gdzie kucharek sześć, tam nie ma co jeść", "Nosił wilk razy kilka, ponieśli i wilka", "Niedaleko pada jabłko od jabłoni", "Potrzeba jest matką wynalazków", "Lepiej późno niż wcale", "Kto pyta, nie błądzi", "Mądry Polak po szkodzie", "Po burzy zawsze słońce przychodzi", "Jeśli wejdziesz między wrony, musisz krakać jak i one", "Jak sobie pościelesz, tak się wyśpisz", "Nadzieja umiera ostatnia", "Kłamstwo ma krótkie nogi", "Nie od razu Kraków zbudowano", "Prawdziwych przyjaciół poznaje się w biedzie"];


var haslo = "";
haslo = random_item(items);

haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");


var haslo1 = "";

for(i=0; i<dlugosc; i++)
{
    
    if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}


function wypisz_haslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start; 

var litery = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];

/*var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
*/





function start() {
    var tresc_diva = "";

    for(i=0; i<=34; i++){
        var element = "lit" + i;
        tresc_diva = tresc_diva +'<div class="litera" onclick="sprawdz('+i+')" id="' + element + '">' + litery[i] +'</div>';
        if((i+1) % 7 == 0 ) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;



    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak) {

    if(miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr) {

    var trafiona = false;


    for (i=0; i<dlugosc; i++) {
        if(haslo.charAt(i) == litery[nr]){
           haslo1 = haslo1.ustawZnak(i,litery[nr]); 
           trafiona = true;
        }

    }

    if(trafiona == true){
        yes.play();
        var element = "lit" + nr; 
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00c000"; 
        document.getElementById(element).style.border = "3px solid #00c000";
        document.getElementById(element).style.cursor = "default";
        wypisz_haslo();
    }
    else {
        no.play();
        var element = "lit" + nr; 
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#c00000"; 
        document.getElementById(element).style.border = "3px solid #c00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        //skuch
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz +'"alt="" >';
    
    }

    //wygrana
    if (haslo == haslo1)
    document.getElementById("alfabet").innerHTML  = "Brawo! Udało Ci się odgadnąć prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

    if (ile_skuch >= 9)
    document.getElementById("alfabet").innerHTML  = "Porażka! Prawidłowe hasło to: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

}
    

    