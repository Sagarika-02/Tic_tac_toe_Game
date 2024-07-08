
let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".resetbtn");

let player0 = true;
let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

    
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player0) {
            box.innerText = "O";
            // box.classList.add('playerO');
            // box.classList.remove('playerX');or,

            box.style.color='blue';
            player0 = false;
        }
        else {
            box.innerText = "X";  
            // box.classList.add('playerX');
            // box.classList.remove('playerO'); or,
            box.style.color='orange';
            player0 = true;
        }
        box.disabled = true;
        win_draw();
    });
});


const disableboxes=()=>
    {
        boxes.forEach((box)=>{
            box.disabled=true;
        }
        )
    }


// const enableboxes=()=>
//     {
//         boxes.forEach((box)=>{
//             box.disabled=false;
//         })
//     }

const resetgame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled=false;
        document.querySelector("h2").innerText="";
    });
}
resetbtn.addEventListener("click",resetgame);


const showwinner = (winner) => {
    document.querySelector("h2").innerText = `Player ${winner} is winner`;
}

const showdraw =()=>
    {
        document.querySelector("h2").innerText = "The Match is Draw";
    }

const win_draw = () => {

    let posval1;
    let posval2;
    let posval3;
    for (let element of winpattern) {
        posval1 = boxes[element[0]].innerText;
        posval2 = boxes[element[1]].innerText;
        posval3 = boxes[element[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
               //Making sure that once I get a winner the game is finished. No more turn 
                disableboxes();
                showwinner(posval1);
            }
        
        }

    }

}