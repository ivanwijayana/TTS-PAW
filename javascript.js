$('document').ready(function(){
    // var k = kotak
    // var b = box
    var k = 1;
        while (k <= 120) {
            $('#frame-tts').append(`<div class="box-kosong box-isi-${k} box-kosong"></div>`);
            k++;
        }
        
        for (var b=9; b<=69; b+=12) {
            if(b==9){
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no" >1</p><p class="jwb jwb-${b}"></p></div>`);
            }else{
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
            }
        }
        
        for (var b=18; b<=24; b++) {
            $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
        }
    
        for (var b=49; b<=55; b++) {
            if(b==49){
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no" >4</p><p class="jwb jwb-${b}"></p></div>`);
            }else{
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
            }
        }
        
        for (var b=18; b<=90; b+=12) {
            if(b==18){
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no" >2</p><p class="jwb jwb-${b}"></p></div>`);
            }else{
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
            }        
        }
        
        for (var b=76; b<=79; b++) {
            if(b==76){
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no" >5</p><p class="jwb jwb-${b}"></p></div>`);
            }else{
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
            }
        }
        
        for (var b=115; b<=119; b++) {
            if(b==115){
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no" >6</p><p class="jwb jwb-${b}"></p></div>`);
            }else{
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
            }
        }
        
        for (var b=23; b<=119; b+=12) {
            if(b==23){
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="no" >3</p><p class="jwb jwb-${b}"></p></div>`);
            }else{
                $(`.box-isi-${b}`).replaceWith(`<div class="box-isi box-isi-${b}"><p class="jwb jwb-${b}"></p></div>`);
            }
        }


        // SUBMIT JAWABAN

        $('#submit').click(function(){
            var options = document.getElementById("select").value;
            var answer1 =$('#input').val().toUpperCase();
            var array1=answer1.split('');
    
            if (options == "1.Menurun"){
                if(answer1=="TAKJIL"){
                    for (var b = 9; b <= 69; b += 12){
                        $(`.jwb-${b}`).text(array1.shift());
                    }
                }else{
                    alert('jawaban salah')
                }          
            }
            // 
    
            if(options =="2.Menurun"){
                if(answer1=="TADARUS"){
                    for (var b=18; b<=90; b+=12){
                        $(`.jwb-${b}`).text(array1.shift());
                    }               
                }else{
                    alert('jawaban salah')
                }  
            }
    
            if(options =="3.Menurun"){
                if(answer1=="EIDALFITR"){
                    for (var b=23; b<=119; b+=12){
                        $(`.jwb-${b}`).text(array1.shift());
                    }               
                }else{
                    alert('jawaban salah')
                }  
            }
    
            if(options=="2.Mendatar"){
                if(answer1=="TARAWEH"){
                    for (var b=18; b<=24; b++){
                        $(`.jwb-${b}`).text(array1.shift());
                    }               
                }else{
                    alert('jawaban salah')
                }  
            }
    
            if(options=="4.Mendatar"){
                if(answer1=="RAMADAN"){
                    for (var b=49; b<=55; b++){
                        $(`.jwb-${b}`).text(array1.shift());
                    }               
                }else{
                    alert('jawaban salah')
                }  
            }
    
            if(options =="5.Mendatar"){
                if(answer1=="HAUS"){
                    for (var b=76; b<=79; b++){
                        $(`.jwb-${b}`).text(array1.shift());
                    }               
                }else{
                    alert('jawaban salah')
                }  
            }
    
            if(options=="6.Mendatar"){
                if(answer1=="SAHUR"){
                    for (var b=115; b<=119; b++){
                        $(`.jwb-${b}`).text(array1.shift());
                    }               
                }else{
                    alert('jawaban salah')
                }  
            }
        })

    })