const filterInput = document.getElementById('input');

filterInput.addEventListener('keyup', (e) =>{
    //get input value
    let inputValue = document.querySelector('#input').value.toUpperCase();
    
    // Get names ul    
    const names = document.querySelector('#names');
    //get collection items
    const items = document.querySelectorAll('li.collection-l');
    //loop through  items
    items.forEach(item =>{
        const a = item.getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1 ){
            item.style.display = '';
        } else{
            item.style.display = 'none';
        }
    })
})

