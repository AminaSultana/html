let items = document.getElementsByClassName('list-group')
console.log(items)
items[2].style.backgroundColor = 'green'

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
}
