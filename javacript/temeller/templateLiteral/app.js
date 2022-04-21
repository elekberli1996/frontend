const namee="emin elekberli fikret";
const department="bilisim";
const slary=4000;
const a=`isim:${namee}\ndepartment:${department}\nmaas:${slary}`;// bacKtik isaresi 
console.log(a);
const html=`
<ul>
<li>${namee}</li>
<li>${department}</li>
<li>${slary}</li>
</ul>
`;
document.body.innerHTML=html; //template literal qurulusu