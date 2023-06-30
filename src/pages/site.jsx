import React from 'react';
import ContactsPage from './contactPage';
import styles from '../styles/site.module.css';
import resonate from '../assets/resonate.png';

import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

const  Site = () => {
  
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
        setContacts([...data]);
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
   <div >
      <div className={styles.sidebar}>
      <img src={resonate} alt="resonate logo"/>
      </div>
      <div className={styles.Header}>Contacts</div>
      {console.log(contacts,'hello')}
      {contacts.map((contact, index) => {
 return (       <div className = "contacts">
  <Link to={`/contactPage/${contact.id}`} style={{ textDecoration: 'none' }}>{contact.name}</Link>
         
          {console.log(contact.phone)}
        </div>)
      })}
      <Routes>
        <Route path="/contactPage/:id" element={<ContactsPage />}/>
      </Routes>
    </div>
  );
}

export default Site;