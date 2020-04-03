window.onload = main;

function main(){
    let workContainer = document.getElementsByClassName("work-container");
    console.log(workContainer);

    let workBox = document.getElementsByClassName("work-box");
    console.log(workBox);

    let length = workBox.length;
    let times = (3 * Math.ceil(length / 3)) - length;

    for(let i = 0; i < times; i++){
        let div = document.createElement('div');
        div.className = 'work-empty';
        workContainer[0].appendChild(div);
    }
}