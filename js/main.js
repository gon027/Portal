window.onload = main;

function main(){
    let workContainer = document.getElementsByClassName("work-container");
    console.log(workContainer);

    let workBox = document.getElementsByClassName("work-box");
    console.log(workBox);

    let offsetWidth = workBox[0].offsetWidth;
    let workContainerWidth = workContainer[0].offsetWidth;
    // console.log(offsetWidth)
    // console.log(workContainer[0].offsetWidth)
    // console.log(Math.floor(workContainer[0].offsetWidth / offsetWidth))

    let limit = Math.floor(workContainerWidth / offsetWidth);

    // console.log(limit)

    let length = workBox.length;
    let times = (limit * Math.ceil(length / limit)) - length;

    for(let i = 0; i < times; i++){
        let div = document.createElement('div');
        div.className = 'work-empty';
        workContainer[0].appendChild(div);
    }
}