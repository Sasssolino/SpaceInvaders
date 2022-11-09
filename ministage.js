export default class Ministage {

    static elaboraInput(tastoPremuto) {
         let valoreX=0,valoreY=0;

         let deveSparare=false


         switch(tastoPremuto){
            case  'ArrowRight' :
                valoreX=1
                break;
            case  'ArrowLeft' :
                valoreX=-1
                break;
            case  'ArrowUp' :
                valoreY=-1
            break;
            case  'ArrowDown' :
                valoreY=1
                break;
            case ' ':
                deveSparare = true
                break;
         }

         return{'x':valoreX,'y':valoreY,'spara':deveSparare}
         
    }

    static avanzaDiLivello(statistiche) {

    }
} 