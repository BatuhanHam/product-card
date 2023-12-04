const cardBox = document.getElementsByClassName('card-box')[0];
const circleItems = document.getElementsByClassName('circle-item');



const imgOver = (imgNumber) => {
    switch (imgNumber) {
        case 0:
            cardBox.style.backgroundColor = '#F7EFE5';
            activeCircle(0)

            break;

        case 1:
            cardBox.style.backgroundColor = '#C2D9FF';
            activeCircle(1)
            break;

        case 2:
            cardBox.style.backgroundColor = '#D0F288';
            activeCircle(2)
            break;

        case 3:
            cardBox.style.backgroundColor = '#FED9ED';
            activeCircle(3)
            break;
    
        default:
            break;
    }
}

const imgOut = () =>{    
    imgOver(0)
}


const activeCircle = (activeNumber) =>{
    for(let i=0 ; i<circleItems.length ; i++){
        if(activeNumber === i){
            circleItems[i].style.color = 'orange'
        } else{
            circleItems[i].style.color = '#00000026'
        }
    }
}

