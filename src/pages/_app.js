import '@/styles/globals.scss';
import { useRouter } from "next/router";
import MainLayout from '@/components/layouts/MainLayout';
import AuthLayout from '@/components/layouts/AuthLayout';

export default function App({ Component, pageProps }) {
 
  const router = useRouter();

  console.log(router)

  return (
    <>
      {
        router.pathname.startsWith("/auth") ? (
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        )
          : (
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          )
      }
    </>
  )
}