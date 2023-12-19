import {Box, Center, Spacer, Stack} from "@chakra-ui/react"
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar.tsx"
import Disconnected from '../components/Disconnected'
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/Connected"

const Home: NextPage = () => {
  const { connected } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Ekom's NFT Builder Frontend</title>
        <meta name="This NFT collection is only for the BUilders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          { /* NavBar */ }
        <NavBar/>

          <Spacer />
          <Center>
            {connected ? <Connected /> : <Disconnected />}
                </Center>
          <Spacer />

          <Center>
           <Disconnected / >
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
