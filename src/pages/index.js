import Head from 'next/head'
import Layout from '@/components/Layout'
import { Container } from "@nextui-org/react";
import CodeIde from '@/components/CodeIDE';

export default function Home() {
  return (
    <>
      <Head>
        <title>JsTea</title>
        <meta name="description" content="Solve js problems everyday" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container justify="center" css={{
          marginTop: '$10'
        }}>
          <CodeIde />
        </Container>
      </Layout>
    </>
  )
}
