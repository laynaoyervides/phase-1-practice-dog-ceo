console.log('%c HI', 'color: firebrick')

//Global Variables
    const container = document.querySelector("#dog-image-container");
    const imgUrl = "https://dog.ceo.api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo.api/breeds/list/all";
    const ulContainer = document.querySelector('#dog-breeds');
    const dropdown = document.querySelector("#breed-dropdown");
let breedsArray =[];
//set a global scope for this array so that we can use it later in the event listener
//Event Listeners
    ulContainer.addEventListener('click', handleClick)
    dropdown.addEventListener('change', handleChange)
//Methods
function getImages(){
    fetch(imgUrl)
        .then ((resp) => resp.json())
        .then (images=> {
          const imgs = images.message;
          let imgsArray = createImgElement(imgs)
             renderImgs(imgsArray);
})
}

        function createImgElement(imgs){
                return imgs.map((img) => {
                    let i = `<img src=${img}>`
                return i;
                    })
        }

                function renderImgs(imgsArray){
                    imgsArray.forEach(element => {
                    renderImg(element);
                    })
                }

                        function renderImg(element){
                             container.innerHTML += element;
                        }

function getBreeds(){
    fetch(breedUrl)
        .then ((resp)=> resp.json())
        .then(breeds => {
            breedsArray = Object.keys(breeds.message)
            const breedsLis = createLiElement(breedsArray)
            renderLis;
        })
}  
        function createLiElement(breedsArray){
         return breeds.map((breed) => {
               let li = `<li><${breed}</li>`
              return li;
         })
        }

                function renderLis(breedLis){
                    breedLis.forEach(element => {
                      renderElement(element)
                        })
                }
                        function renderElement(element){
                            ulContainer.innerHTML += element;

                        }

function handleClick(event){
    if (event.target ==='li')
    if(event.target.style.color === 'green'){
        event.target.style.color = 'black'
    } else {
        event.target.style.color = 'green';
    }
}
function handleChange(event){
    letter = event.target.value;
    //filter out the breeds that start with the letter
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiElement(filteredBreeds)
    ulContainer.innerHTML ='empty';
    //clears out container so the others don't show
    renderLis(filteredBreedsLis);
}

getImages();
getBreeds();
//invoke because it is run on page load
//event listeners can work better on parent listeners because it will lose it 





