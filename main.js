// Находим коллекцию кнопок
const btns = document.querySelectorAll('.accordion');



btns.forEach(function(btn){

    btn.addEventListener('click', function(e){
        

        const content = btn.nextElementSibling;
        

        if(btn.classList.contains('active')){
            btn.classList.remove('active');
            content.style.maxHeight = 0;
        }else{
            btns.forEach(item => {
                item.classList.remove('active');
            })

            const contentBlocks = document.querySelectorAll('.content');
            contentBlocks.forEach(item => {
                item.style.maxHeight = 0;
            })


            btn.classList.add('active');

            content.style.maxHeight = content.scrollHeight + 'px';
        }


    })

})



/* btns.forEach(btn => {
    btn.addEventListener('click', function(){
        const content = btn.nextElementSibling;

        if(btn.classList.contains('active')){
            btn.classList.remove('active');
            content.style.maxHeight = 0;
        }else{
            btns.forEach(function(btn){
                btn.classList.remove('active');
            })
            

            const contentBlocks = document.querySelectorAll('.content');
            contentBlocks.forEach(function(block){
                block.style.maxHeight = 0;
            })


            btn.classList.add('active');

            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
}) */