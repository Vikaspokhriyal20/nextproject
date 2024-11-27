import cardcontent from "../../api/ApiData"

export const metadata = {
  title: 'Project'
}

const page = () => {

  return (
    <section>
      <h4 className="title-text">Project-section</h4>
      <div className="container grid-4">
        {
          cardcontent.map((currEle) => {
            return (
              <div className="project-card" key={currEle.id}>
                <h4>{currEle.title}</h4>    
                <p>{currEle.description}</p>
              </div>
            )
          })
        }
      </div>
    </section>

  )
}

export default page
