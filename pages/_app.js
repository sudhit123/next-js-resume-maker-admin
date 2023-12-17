import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  const router=useRouter();
  useEffect(()=>{

        const token=localStorage.getItem("token");
        console.log(token)
        if(!token && router.pathname != "/signin" && router.pathname !="/signup")
        {
          router.push("/signin")
        }
      },[router])
  return <Component {...pageProps} />
}
