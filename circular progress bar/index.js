var start = setInterval(update,100);
var upto = 1;

function update(){
    var counter = document.getElementById('counter');
    var counts = upto++;
    console.log(counts);
    if(upto > 100) {
        clearInterval(start);
    }
    counter.innerHTML = counts + "%";
    document.getElementById('progress_outer').style.background = `
     conic-gradient(#FFE972 ${counts}%,#fff ${counts}%`;
}
