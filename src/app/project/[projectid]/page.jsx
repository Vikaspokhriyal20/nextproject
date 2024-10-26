// changing the title of page 

export const metadata = {
  title: 'Project Details',
}

const page = ({ params }) => {
  return (
    <section>
      <div className="container">
        <p>Project Details - {params.projectid}</p>
      </div>
    </section>

  )
}

export default page
