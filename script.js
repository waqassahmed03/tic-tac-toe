let turn = "X"
let isgameOver = false;

const changeTurn = () =>{
    return turn === "X"? "O":"X";
}
const checkDraw = ()=>{
    let draw = document.getElementsByClassName("choice")
    if (Array.from(draw).some(element => element.innerText === '')){
        console.log("hello")
        return;
    }
    
    document.querySelector(".choice-info").innerText = "It's a Draw";
    
}


const checkWin = () => {
    let choice = document.getElementsByClassName('choice');
    // console.log(choice);
    let win_cases = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,-45],
    ]
    
    win_cases.forEach(e =>{
        if ((choice[e[0]].innerText === choice[e[1]].innerText) && (choice[e[2]].innerText === choice[e[1]].innerText) && (choice[e[0]].innerText !== "")){
            isgameOver =true;
            isWin = true
            document.querySelector(".choice-info").innerText = choice[e[0]].innerText + " Won";
            document.querySelector(".line").style.visibility = "visible"
            document.querySelector(".line").style.width = `20vw`
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            }

        });

}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let choice = element.querySelector('.choice');
    element.addEventListener('click',()=>{
        if (choice.innerText === ''){
            choice.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameOver){

                document.querySelector(".choice-info").innerText = "Turn For " + turn;
            }
            checkDraw();
        }
    });

});
const reset  = document.getElementById('reset');
reset.addEventListener('click',()=>{
    let choice_boxes = document.querySelectorAll(".choice");
    Array.from(choice_boxes).forEach(ele =>{

        ele.innerText ='';
    })
    turn ="X";
    isgameOver = false;
    document.querySelector(".choice-info").innerText = "Turn For " + turn;
    document.querySelector(".line").style.visibility = "hidden";
    document.querySelector(".line").style.width = `0`


});

