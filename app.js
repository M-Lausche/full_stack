window.onload = () => {
    const baseUrl ="http://3.139.62.178:8000" 
  
    const listBtn = document.querySelector("#listBtn")
    const userSelect = document.querySelector("#userSelect")
    const userContainer = document.querySelector("#userContainer")
  
    // Generate options for the user dropdown dynamically
    for (let i = 1; i <= 2; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        userSelect.appendChild(option);
    }
  
    const doFetch = async (url) => {
      const result = await fetch(url)
      const resultJson = await result.json()
      return resultJson
    }
  
    const getPeople = async () => {
      
      const url = `${baseUrl}/users`
      const fetchResult = await doFetch(url)
      const people = fetchResult.info
      people.forEach( p => createHtmlPerson(p))
    }
  
    const getPerson = async (id) => {
      console.log('get person')
      const url = `${baseUrl}/${id}` 
      const fetchResult = await doFetch(url)
      const person = fetchResult.info[0]
      console.log(person)
      createHtmlPerson(person)
    }
  
    const removeUsers = () => {
      while(userContainer.firstChild) {
        userContainer.removeChild(userContainer.firstChild)
      }
    }
  
    const createHtmlPerson = (person) => {
      const div = document.createElement("div")
      const h3 = document.createElement("h3")
      const p1 = document.createElement("p")
      const p2 = document.createElement("p")
      const p3 = document.createElement("p")
      const p4 = document.createElement("p")
      
  
      h3.innerText = `ID: ${person[0]}`
      p1.innerText = `FirstName: ${person[1]}`
      p2.innerText = `Last Name: ${person[2]}`
      p3.innerText = `Email: ${person[3]}`
      p4.innerText = `Phone: ${person[4]}`

      
  
      div.appendChild(h3)
      div.appendChild(p1)
      div.appendChild(p2)
      div.appendChild(p3)
      div.appendChild(p4)
      
  
      div.className = "item"
  
      userContainer.appendChild(div)
    }
  
  
    userSelect.addEventListener("change" ,(e) => {
        removeUsers()
        getPerson(e.target.value)

      })
    
    listBtn.addEventListener("click" ,() => {
      removeUsers()  
      getPeople()
      
      })
  }