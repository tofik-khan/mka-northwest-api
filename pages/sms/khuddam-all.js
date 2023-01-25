import { useEffect } from "react";

export default function API() {

    useEffect(() => {
        async function fetchData() {
          await fetch('/api/test')
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((error) => {
            //Error Handling
            console.log(error);
          });
        }
        fetchData();
      }, []);


    return <h1>Hello, from sms-khuddam-all API!</h1>;
}
