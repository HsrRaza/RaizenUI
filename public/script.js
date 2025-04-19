
const tabBtn = document.querySelectorAll('.tab-btn');
const tabCtn = document.querySelectorAll('.tabs-ctn');

const showContent = (indx,clrcode)=>{

    tabBtn.forEach(element =>{
     element.style.backgroundColor = "red";
    });
 
    tabBtn[indx].style.backgroundColor= clrcode;

    tabCtn.forEach(element =>{
    element.style.display = 'none';
    });
    tabCtn[indx].style.display = 'block'
}




// feedBack form
const feedBackBtn = document.getElementById('feedback-btn');

feedBackBtn.addEventListener('click', redirect)

function redirect(){
    window.location.href = './styles.docs.html';
}