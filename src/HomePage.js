import Person from "./Person"


function HomePage(){

    const persons = [

    {
      id : 1,
      name : "pooja1",
    },
    {
        id : 2,
        name : "pooja2",
    },
    {
        id : 3,
        name : "pooja3",
    }
    ]
    
    const personList = persons.map( person => <Person  person  = {person}/>)
    const int = 4 
return (
    <>
    
   {personList}
    </>
)

}

export default HomePage