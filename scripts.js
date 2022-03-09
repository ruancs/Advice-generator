
const btn = document.querySelector('.btn-random');
const id_tag = document.querySelector('.advice-id');
const advice_tag = document.querySelector('.advice');

function onBtnClick(){
    console.log('click');
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            id_tag.innerText = 'ADVICE #' + jsonData['slip']['id'];
            advice_tag.innerText = '"' + jsonData['slip']['advice'] + '"';
        });
    
}

btn.addEventListener('click', onBtnClick);

onBtnClick();



