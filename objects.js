const allUsers=[
    {
        firstName:"Prajjwal",
        lastName:"Goswami",
            age: 50,
            eyeColor: "blue"
    },
    {
        firstName:"Mayank",
        lastName:"Tunnu",
            age: 30,
            eyeColor: "red"
    },
    {
        firstName:"Poonji",
        lastName:"Jadon",
            age: 23,
            eyeColor: "black"
    }
]

for(let i =0;i<allUsers.length;i++){
    if(allUsers[i]["age"] > "25"){
        console.log(allUsers[i]["firstName"])
    }
}