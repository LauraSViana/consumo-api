const url = 'https://random.dog/woof.json'


fetch(url)
  .then(response => response.json())
  .then(dog => {
    const img = document.createElement('img');
    img.src = dog.url;
   img.alt = 'Random Dog';
   img.classList.add("auau")
   
   
    document.querySelector('.inner').appendChild(img);
  });
