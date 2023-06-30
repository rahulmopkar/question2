
import React from 'react'
import styles from '../styles/site.module.css';
import resonate from '../assets/resonate.png';

import {
    useParams,

  } from 'react-router-dom';


function ContactsPage() {
    const { id } = useParams();
    const [contacts, setContacts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getContacts = async () => {
      console.log('hello')
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      if (data.error) {
        alert('error in the data')
        setIsLoading(false);
      }
      else{
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === parseInt(id)) {
            setContacts([data[i]]);
          }
        }
        setIsLoading(false);

  
      }
    }
    React.useEffect(() => {
      getContacts()
    }, [])
    if (isLoading) {
      return <div>Loading...</div>; // Render a loading state
    }
    return (
 
        <div className={styles.example}>
               <div className={styles.sidebar}>
               <img src={resonate} alt="resonate logo"/>

              </div>
          {console.log(contacts)}
          <div className = {styles.outer}>
          <div>name: {contacts[0].name}</div>
          <div>phone number: {contacts[0].phone}</div>
          <div>address:</div> 
          <div className = {styles.addressBox}>
            <div>street: {contacts[0].address.street}</div>
            <div>city: {contacts[0].address.city}</div>
            <div>suite: {contacts[0].address.suite}</div>
            <div>zipcode: {contacts[0].address.zipcode}</div>
          </div>
          </div>
        </div>)
}
export default ContactsPage;
