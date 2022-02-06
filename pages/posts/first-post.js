import Link from "next/link"
import Image from "next/image"

const FirstPost = () => {
  return (
    <>
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
