const compareVersion = (v1, v2) => {
    const [a1, b1] = v1.split('.');
    const [a2, b2] = v2.split('.');
 
     const major = Math.sign(a1 - a2);
     const minor = Math.sign(b1 - b2);
     
     return major === 0 ? minor : major;
     
 };
 
 export default compareVersion;
 
 console.log(compareVersion("4.3", "4.2"));