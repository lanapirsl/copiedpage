const link = "http://lanapirsl.com/wordpress/wp-json/wp/v2/bikes";
window.addEventListener("DOMContentLoaded",getData());
function getData(data){
    fetch(link)
        .then(res=>res.json())
    .then(handleData);
}
function handleData(data){
    const myData=data;
    console.log(myData);
    myData.forEach(showData);
}
function showData(singleObject){
    const template=document.querySelector("#template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".bike-image").src=singleObject.image.guid;
    console.log(singleObject.image.guid);
    copy.querySelector(".brand").textContent=singleObject.brand;
    copy.querySelector(".model").textContent=singleObject.model;
    copy.querySelector(".price span").textContent=singleObject.price;
    if (!singleObject.colour.guid){
        copy.querySelector(".colours").textContent="Colours: N/A";
    }else{
        copy.querySelector(".colours-image").src=singleObject.colour.guid;
    }
    
    copy.querySelector(".stock span").textContent=singleObject.stock;
    document.querySelector(".mainid").appendChild(copy);
}