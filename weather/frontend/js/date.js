const today = new Date();

const month = today.getMonth() +1;
const date = today.getDate();

document.querySelector(".date").innerHTML = [month + "월" + date + "일"];