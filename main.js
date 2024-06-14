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

function Close(){
    window.close()
}

const tabs = document.querySelectorAll('.tab-btn')
        const allContents = document.querySelectorAll('.content')
        
        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', (e)=>{
                tabs.forEach(tab=>{tab.classList.remove('active')})
                tab.classList.add('active')
                
                allContents.forEach(content=>{content.classList.remove('active')})
                allContents[index].classList.add('active')
            })
        })



