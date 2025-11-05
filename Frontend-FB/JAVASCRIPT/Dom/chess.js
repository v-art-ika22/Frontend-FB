const chessboard=document.querySelector(".chess-row");
const first=`<div class="box"></div>`.repeat(8);
const second=`<div class="box-even"></div>`.repeat(8);
const complete =(first+second).repeat(4);

chessboard.innerHTML=complete;
