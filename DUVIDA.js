//Gostaria de entender se esse pelo menos é o caminho certo, porque consegui consumir a api,
//porém não consigo separar o consumo por índices.


function getApi() {
    const ul = document.getElementById('sectionAccordion');

		fetch('https://stark-cove-48986.herokuapp.com/seguros/motivos')
       		.then(assync res => {
    
              if(!res.ok) {
              		throw new Error(res.status)              
              }
              
              var data = await res.json()
              
              data.map(item => {
              		let p = document.createElement('p')
                  
                  p.innerHTML = `
                  <p>${item.title}</p>
                  <p>${item.text}</p>
                `
            ul.appendChild(p)
                
            }).catch(e => console.log(e))
        })
    }
getAPI();




function getObject(array) {
    let objetos = [];
    
    for(let i = 0; i < array.length; i++) {

        const {title, text} = array[i];

        if (i == 0) {
            return(title, text);
        }

        if (i == 1) {
            return(title, text);
        }

        if (i == 2) {
            return(title, text);
        }

        if (i == 3) {
            return(title, text);
        }
    }
    return (...);  //retornar o objeto correspondente ao valor do índice
}