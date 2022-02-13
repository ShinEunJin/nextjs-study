import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>
        <Link href="/">
          <a>first post</a>
        </Link>
      </h1>
      <Image
        src={"/images/test.jpg"}
        width={400}
        height={400}
        alt="df"
        objectFit="contain"
      />
    </>
  )
}

export default FirstPost
