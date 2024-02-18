import React,{useState} from 'react';

export const App=()=>{
// By listing elements
//     const Obj={
//         firstname:"Nagendra",
//         lastname:"kallem",
//         age:21,
// };

// By function passing elements
    //  function Obj(){
    //     return {
    //     firstname:"Nagendra",
    //     lastname:"Kallem",
    //     age:21
    //     }

     
    // Here directly take the object to the useState
    // const [name,setname]=useState(Obj);

    const [name,setname]=useState({
        firstname:"Nagendra",
        lastname:"Kallem",
        age:21
    });

    // change firstname
    function Change_First(){
        setname({
            ...name,//for coping all remaining data ,when it click button the firstname change but remains are blank so it uses remain constant except change value.
            firstname:"Babu"});
    }

    // change lastname
    function Change_sec(){
        setname({
            ...name,
            lastname:"K"});
    }

    return (
        <>
        <h3>my Firstname is {name.firstname}</h3>
        <button onClick={Change_First}>Change First name</button>
        <h3>my Lastname is {name.lastname}</h3>
        <button onClick={Change_sec}>Change First name</button>
        <h3>Age {name.age}</h3>
        </>
    )

}