
    
        function play() {
        document.getElementById("Ljud").play();
        Ljud.currrentTime = 0;
        Ljud.play();
        }


        function hihats() {
            document.getElementById("Ljud2").play();
            Ljud2.currentTime = 0;
            Ljud2.play();
        }


        function kick() {
            document.getElementById("Ljud3").play();
            Ljud3.currentTime = 0; 
            Ljud3.play();
        }

        function snare() {
            document.getElementById("Ljud4").play();
            Ljud4.currentTime = 0; 
            Ljud4.play();
        }

        function stick() {
            document.getElementById("Ljud5").play();
            Ljud5.currentTime = 0; 
            Ljud5.play();
        }

        function warm() {
            document.getElementById("Ljud6").play();
            Ljud6.currentTime = 0; 
            Ljud6.play();
        }



        $( document ).ready(function() {
            $(document).keypress(function(event){
                key=String.fromCharCode(event.which);
                console.log(key);
               

                    switch(key) {
                    
                    case "1":
                    var play = document.getElementById("Ljud")
                    Ljud.currrentTime = 0;
                    Ljud.play();
                    break;
                
                    case "2": 
                    
                    var play = document.getElementById("Ljud2")
                    Ljud2.currrentTime = 0;
                    Ljud2.play();
                    break;
        
                    
                    case "3":
                    var play = document.getElementById("Ljud3")
                    Ljud3.currrentTime = 0;
                    Ljud3.play();
                    break;
        
                    
                    case "4":
                    var play = document.getElementById("Ljud4")
                    Ljud4.currrentTime = 0;
                    Ljud4.play();
                    break;
        
                    
                    case "5":
                    var play = document.getElementById("Ljud5")
                    Ljud5.currrentTime = 0;
                    Ljud5.play();
                    break;
                    
                    case "6":
                    var play = document.getElementById("Ljud6")
                    Ljud6.currrentTime = 0;
                    Ljud6.play();
                    break;
            
                      
                    }
                });

            });
    
