import Head from "next/head";
import { ReactElement, ReactNode } from "react";

export interface MainLayoutInterface {
  title: string;
  children?: ReactNode;
}

export const MainLayout = ({ title, children }: MainLayoutInterface): ReactElement => (<>
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  {children && (<div>
    {children}
  </div>)}
</>);

export default MainLayout;