var Selectfield = document.getElementById('selectField');
var SelectText = document.getElementById('selectText');
var Options = document.getElementsByClassName('options');
var List = document.getElementById('list')
var arrowIcon = document.getElementById('arrowIcon')



Selectfield.addEventListener('click',function(){
    List.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
})

for (let option of Options){
    option.addEventListener('click',function(){
        SelectText.innerHTML = this.textContent;
        List.classList.toggle('hide')
        arrowIcon.classList.toggle('rotate');


    })
}