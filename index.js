function eventHander() {
    console.log('clicked');
}

function addingEventListener() {
    const btn = document.getElementById('button')
    btn.addEventListener('click', eventHander)

}

addingEventListener()
