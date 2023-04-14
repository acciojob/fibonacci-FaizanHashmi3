function fibonacci(num) {
    // your code here
    if(num==1) return 0;
    if(num==2) return 1;
        let fir=0;
        let sec=1;
        let ans=fir+sec;
        for(let i=0;i<num-3;i++)
            {
                fir=sec;
                sec=ans;
                ans=fir+sec;
            }
        return ans;
    }
module.exports = fibonacci;
