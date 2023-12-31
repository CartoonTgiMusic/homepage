const search = () =>{
    const searchBox = document.getElementById('search-item').value.toUpperCase();
    const storeItem = document.getElementById('product-list')
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


