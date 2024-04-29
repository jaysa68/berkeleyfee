import Link from "next/link"
import styles from "../styles/Description.module.css"

function Line( { miscTitle }) {
  if (miscTitle !="Miscellaneous Fees") {
    return <hr className={styles.descHr}/>
  }
}


export function Section({ title, description }) {
  return (
    <div>
      <h1 className={styles.head1}>
        {title}
      </h1> 
      <p>
        {description}
      </p>
      <Line miscTitle={title} />
    </div>
  )
}

export default function Descriptions() {
  return (
    <>
    <Section
      title="Tuition"
      description=
        <>

          Tuition pays for the core services provided by UC Berkeley to its
          students. According to Regents Policy 3101, it can be used to cover most
          costs within the university budget. This includes areas such as faculty
          salaries and benefits, building maintenance, libraries, and some student
          financial aid. Graduate and undergraduate students are charged different
          amounts for tuition. Nonetheless, these costs are standardized across all
          universities that are part of the UC system.

        </>
    />
    <Section
      title="Nonresident Supplemental Tuition"
      description=
        <>

          In addition to the standard tuition, students who have not
          established California residency must also pay nonresident supplemental
          tuition. This amount differs between graduate and undergraduate students.
          More information on determining residency may be found on the <Link
          href="https://www.ucop.edu/residency/process.html"> UCOP website</Link>.

        </>
    />
    <Section
      title="Student Services Fee"
      description="Like tuition, the Student Services Fee is standardized across all UC campuses. The revenue from this fee is used towards services and programs that directly benefit students, but are complementary to, rather than part of, core instructional programs and services. The complementary services and programs are meant to create a rich and supportive learning environment for students."
    />
    <Section
      title="Campus-Based Fees"
      description="Campus-Based Fees are established via referendum by a campus unit or by students through the ASUC; these are distinct from the Student Service Fee. Campus-Based Fees require student involvement through every part of the referenda process: they must be reviewed approved by the SFRC (Student Fee Referenda Committee) and receive sufficient votes on the Spring ballot."
    />
    <Section
      title="Instructional Resilience and Enhancement Fee (IREF)"
      description="The Instructional Resilience and Enhancement Fee (IREF) is a course materials and services fee that is assessed on all students to support tools, infrastructure, and staff to support in-person and remote instruction. IREF is meant to address changing requirements and expectations of the classroom by providing software licensing, tech, and services that enhance learning."
    />
    <Section
      title="Class Pass Fee"
      description="The Class Pass Fee is a mandatory fee for all students that provides an AC Transit Class Pass. This gives students unlimited access to AC Transit buses and Bear Transit shuttles. This fee is overseen by the Class Pass Oversight Committee which is composed of members of the ASUC, Graduate Assembly and Residence Hall Assembly."
    />
    <Section
      title="Miscellaneous Fees"
      description="WIP: Document Management Fee, Student Health Insurance Plan (SHIP), UCSA Fee (opt-out), Professional Degree Supplemental Tuition"
    />
    </>
  )
}
