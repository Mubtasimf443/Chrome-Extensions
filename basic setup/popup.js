/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ */

let total = document.querySelector('#Total')
let spend_amount = document.querySelector('#spend_amount')
let inp = document.querySelector('#inp')


chrome.storage.sync.get('total', b => total.innerHTML = b.total )


spend_amount.addEventListener('click' ,e => {
    let a = inp.valueAsNumber
    chrome.storage.sync.get('total', b =>  {
       if (a === NaN) return
       a += b.total
       chrome.storage.sync.set({'total':a} , function() {
        total.innerHTML = a 
        
    })
    })
    

    
})
