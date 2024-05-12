// Находим коллекцию кнопок
const btns = document.querySelectorAll('.accordion');


btns.forEach(item => {
    item.addEventListener('click', function(e){
    
        item.classList.toggle('active');

        const contentBlock = item.nextElementSibling;

        if(item.classList.contains('active')){
            document.querySelector('.active').classList.remove('active');
            contentBlock.style.maxHeight = 0 + 'px';
        }else{
            contentBlock.style.maxHeight = contentBlock.scrollHeight + 'px';
        }

        
        /* if(item.classList.contains('active')){
            contentBlock.style.maxHeight = contentBlock.scrollHeight + 'px';
        }else{
            contentBlock.style.maxHeight = 0 + 'px';
        } */
        

        /* item.classList.toggle('active');
        let contentBlock = item.nextElementSibling;
        contentBlock.style.maxHeight = contentBlock.scrollHeight + 'px'; */
    })
})