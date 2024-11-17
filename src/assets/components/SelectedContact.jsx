import { useState} from "react";
import { useEffect } from "react";


export default function ContactList({ setSelectedContactId }){
const [contact, setContacts] =useEffect(null)
useEffect(()=>) {
    async function fetchContacts() {
        try {
          const response = await fetch(
            'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1'${setContacts});
            const result = await response.json();
            setContacts(result);
          } catch (err) {
            console.log(contact);
          }
} 
}
}