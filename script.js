let arr = [  //it is a array of objects
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" }, 
    { id: 3, name: "karen", age: "19", profession: "admin" }
    ]
    // questions says make a new aray with different data
    //second array
    let arr2 = [
    { id: 4, name: "joe", age: "17", profession: "admin" },
    { id: 5, name: "japu", age: "19", profession: "associate engineer" }, 
    { id: 6, name: "kiran", age: "18", profession: "developer" }
    ]
    //  now you have to fill the details arr2 to first array i.e arr
    //we use concatenate to merge two arrays
    // arr = arr.concat(arr2); // concat function creates a new array and return you that
    
    //*******Spread operator*******
    arr=  [...arr , ...arr2] //arr mai kam karo whatever in arr usko to rhnedo or arr2 ko bhi place it across


    // for(i=0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }

    // for each function is Higher order function

    // this function must have changed the age type from String to Number

    arr.map(function (item){//you can also use forEach() function  same use or same work of both 
        item.age = Number(item.age); //type conversion
    })
    
    //to change the age of john to 19
    arr.forEach((item)=>{ //arrow function
        if(item.name == "john"){
            item.age =19;
        }
    })

    // ************ DOM tasks*********
    // selecting the result div ,dropdown and button
    let result = document.getElementById("result")
    let dropdown = document.getElementById("dropdown")
    let button = document.getElementById("filterBtn")

    // function to filter by profession
    function filterByProfession(){

        // setting the result div to empty
        result.innerHTML= "";

        // getting the value of dropdown
        let dropdownValue = dropdown.value;
        console.log(dropdownValue);

        // if value is profession then alert the user to select a profession
        if(dropdownValue == "profession"){
            alert("Please select a profession");
            return;
        }
        
        // looping through the array and checking if the profession matches the dropdown value
        arr.forEach((item)=>{

            // if the profession matches, then create a div and append it bto the result div  
            if(item.profession === dropdownValue){
            let div = document.createElement("div")
            div.innerText = item.id +" Name:"+item.name + " Profession:"+item.profession+ "Age:"+ item.age;
            result.append(div);
            }
        })
    }
    //  adding event listener to the button
    button.addEventListener("click", filterByProfession )
