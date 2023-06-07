import Link from 'next/link'
import { useEffect } from 'react';
import axios from 'axios';

export default function IndexPage() {
  useEffect(() => {
    axios.get('/api/user')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      Hello World. by afjk <Link href="/about">About</Link>
    </div>
  )
}
