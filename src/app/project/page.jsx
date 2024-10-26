import Link from "next/link"

export const metadata = {
  title: 'Project'
}

const page = () => {
  return (
    <section>
      <div className="container">
        <p>Project Page</p>
        <Link href={'/project/10'}>Project Details</Link>
      </div>
    </section>

  )
}

export default page
