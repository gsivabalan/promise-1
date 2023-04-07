let url = 'https://biriyani.anoram.com/img/14.jpg';
let imageContainer = document.querySelector('.image-container');
let fetchImage = (url) => {
return fetch(url)
.then(response => response.blob())
.then(blob => {
let img = document.createElement('img');
img.src = URL.createObjectURL(blob);
imageContainer.appendChild(img);
})
.catch(error => console.log(error));
}
      
fetchImage(url);