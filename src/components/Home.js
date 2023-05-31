import React, { useEffect, useState } from 'react'
import Table  from 'react-bootstrap/Table';
function Home() {
    const [products,setProduct] = useState([]);
    const [load,setLoad] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const getData = async()=>{
       let result = await fetch("https://randomuser.me/api/?results=20");
        result = await result.json();
        console.warn(result.results);
        setProduct(result.results);
    }
    useEffect(()=>{
      getData();
    },[]);

    const handleScroll = async()=>{
        try{
        if( window.innerHeight + document.documentElement.scrollHeight >=
         document.documentElement.scrollTop){
           setLoad(true);
         }
        

        }catch(err){
            console.log(err);
        }
    }

   

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      if ((load)) {
        loadMoreItems();
      }
    }, [load]);

    const loadMoreItems = () => {
      // Simulating an API call delay
      setTimeout(() => {
        const newStartIndex = endIndex;
        const newEndIndex = endIndex + 10;
        const newVisibleItems = products.slice(newStartIndex, newEndIndex);
  
        setProduct((prevItems) => [...prevItems, ...newVisibleItems]);
        setStartIndex(newStartIndex);
        setEndIndex(newEndIndex);
        setLoad(false);
      }, 1000);
    };

   
  return (
    <div style={{"text-align":"center","width":"100vw"}}>
       <h1 >Users</h1>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
        <th>Country</th>
        
      </tr>
    </thead>
    { products.map((item,index)=><tbody>
      <tr key = {index}>
        <td>{index+1}</td>
        <td>{item.name.title+" "+item.name.first+" "+item.name.last}</td>
        <td>{item.gender}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location.city}</td>
        <td>{item.location.country}</td>
       
      </tr>
      </tbody>
    )
    }  </Table>
    </div>
  )
}

export default Home
