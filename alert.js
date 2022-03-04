const maComing = () => {
    alert('ma asteche boka debe');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic');
    console.log(response);
    if(response == true){
        alert('amake fee ta bkash kore akashe patiye de');
    }
    else{
    alert('DGM !!! Door e giya mor !!!');
    }
}

const askName = () => {
    const name = prompt('What is your name');
    if(name){
        console.log(name);
    }
}