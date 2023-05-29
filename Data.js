const apiRM=async (pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api= await fetch(url);
    const data= await api.json();
    console.log(data);
    divRes=document.querySelector("#results");
    divRes.innerHTML = ''
    data.results.map(item=>{
        divItem=document.createElement('div');
        divItem.setAttribute('id', 'contenedor-singular');
        divItem.innerHTML=
        `<div class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container cols">
                <div class="front" >
                    <div class="inner">
                        <img src="${item.image}" class="card-img-top">
                        <h3>${item.name}</h3>
                        <span>${item.species} - ${item.gender}</span>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                        <p>Id: ${item.id}</p>
                        <p>Origen: ${item.origin.name}</p>
                        <p>Ubicacion: ${item.location.name}</p>
                        <p>Estado: ${item.status}</p>
                    </div>
                </div>
            </div>
        </div>`
        divRes.appendChild(divItem);
        
    })
}
apiRM(1);