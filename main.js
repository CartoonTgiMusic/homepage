const search = () =>{
    const searchBox = document.getElementById('search-item').value.toUpperCase();
    const main  = document.querySelector('.main')
    const product = document.querySelectorAll('.product')
    const pname = document.getElementsByTagName('h6')

    for(var i=0;  i < pname.length; i++){
        let match = product[i].getElementsByTagName('h6')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = ''
            }else{
                product[i].style.display = 'none'
            }
        }
    }
}

document.querySelector('.albums-see').addEventListener('click', ()=>{
    document.querySelector('.albums-ctn').classList.add('al-active')
})

function Close(){
    window.close()
}


