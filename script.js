function calc() {
    document.getElementById('output').innerHTML="";
    let o = document.getElementById('ot').value;
    let i = document.getElementById('in').value;
    let h = document.getElementById('ht').value;

    let diff = (o - i) / 2;
    if (diff != 0) {
        let ad = diff * diff + h * h;
        let param = diff;
        let ans = [];
        let temp;
        while (param >= 3) {
            temp = param * param + ad;
            ans.push(Math.sqrt(temp));
            param -= 3;
        }
        ans.push(Math.sqrt(ad));
        for (let k = 0; k < ans.length; ++k) {
            let x = ans[k];
            let intPart = Math.floor(x);
            let fracPart = x - intPart;
            let nw = fracPart * 12;
            let nwinp, nwfp;
            nwinp = Math.floor(nw);
            nwfp = nw - nwinp;
            if (nwfp >= 0.5) {
                document.getElementById('output').innerHTML+=(`${intPart} ${nwinp} <br>`);
            } else {
                nwinp = nwinp + 1;
                document.getElementById('output').innerHTML+=(`${intPart} ${nwinp} <br>`);
            }
        }
        return false;
    }

}
