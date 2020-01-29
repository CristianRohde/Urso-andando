
    //Controle para mover a DIV------------------------------------------------------------------------
function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var larguraJanela = (document.body.clientWidth);
    var id = setInterval(frame, 15 );// 15 é velocidade da div
        
    function frame() {
        if (pos == larguraJanela) {
           elem = document.getElementById("animate");
          // clearInterval(id); //serve para que a div pare no final da janela
          pos = 0;
        } else {
            pos++; 
            // elem.style.top = pos + "px"; //serve para mover verticalmente, mais se esta em conjunto com elem.style.left = pos + "px"; ele mover-se diagonalmente
           elem.style.left = pos + "px"; //serve para mover horizontalmente 
        }
    }

    //Controle para Mover a imagen-----------------------------------------------------------------------
    var quadro = 0;
    var larguraJanela = (document.body.clientWidth);
    var urso = [
       "urso1.png",
       "urso2.png",
       "urso3.png"
    ];

    setInterval( 
        function (){
        document.getElementById("urso-img").src = urso[quadro];
        quadro++;

            if(quadro > 2){
                quadro = 0;
            }
        }
    ,150);//velocidade dos pasos
}
