const get=async()=>{
    const res=await fetch('http://localhost:3000');
    const d=await res.json();
    console.log(d);
    const t=document.querySelector('tbody');
    content="";
    d.forEach(e => {
        content+=`
        <tr>
            <td>${e.s_id}</td>
            <td>${e.s_name}</td>
            <td>${e.dept}</td>
            <td>${e.gender}</td>
            <td>${e.city}</td>
            <td>${e.phonenumber}</td>
        </tr>
        `
    });
        t.innerHTML = content;
}
get();