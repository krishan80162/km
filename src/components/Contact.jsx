import React, { useEffect, useState } from 'react'

import { db } from '../firebase';

export const Contact = () => {

    const [Name, setname] = useState();
    const [Names, setnames] = useState([]);

    // const [salary, setsalary] = useState('');


    const handlesubmit = (e) => {
        e.preventDefault();

        db.collection('contact').add({
            name: Name,
            // salary: salary
        }).then(() => {
            alert("form submitted successfully!!")
        }).catch((error) => {
            alert(`error ${error}`)
        })
    }

    const handlechange=(e)=>{
            {/* setname(e.target.value); */}
            console.log(setname(e.target.value));
    }

    const fetchBlogs = async () => {
        const response = db.collection("contact");
        const data = await response.get();
        data.docs.forEach(item => {
            setnames([...Names])
        })
    }

    

    useEffect(() => {

        fetchBlogs();
    },[])

    return (
        <>
            <h1>Contact form</h1>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="enter name" value={Name} onChange={handlechange}/>
                <br />
                {/* <input type="number" placeholder="salary" value={salary} onChange={(e) => { setsalary(e.target.value) }} /> */}
                <button type="submit"> submit</button>
            </form>
            <br />
            <br />

            <table border="1px solid black">
                <thead>
                    <th>salary data</th>
                    <th>Name</th>
                </thead>
                {
                   Names.map((val) => {
                        return (
                            <>
                                <tr>{val.Name}</tr>
                            </>
                        )
                    })}

            </table>
        </>
    )
}
