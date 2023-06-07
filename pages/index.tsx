import Link from 'next/link'
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      Hello World. by afjk <Link href="/about">About</Link>
    </div>
  )
}
