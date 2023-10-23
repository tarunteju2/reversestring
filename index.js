document.getElementById('submitButton').addEventListener('click', function rString() {
    var inpuText = document.getElementById('revStringIp').value;
    if (inpuText.trim()!=='')
    {
        alert('Text received: '+ inpuText);
    }else{
        alert('You did not enter any text .Please could you enter some before submitting.');
    }

});

document.getElementById('submitButton').addEventListener('click', function () {
   const ipText=document.getElementById('revStringIp').value;
   const revString=revStringfun(ipText,'');
   
   document.getElementById('outputStr').textContent='Reversed String:'+ revString;
});
function revStringfun(strg) {
    let reversed=''
    s=strg.length-1
    while (s>=0) {
        reversed+=strg[s];
        s--;
    }
    return reversed;
}
