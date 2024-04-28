import Link from "next/link"

export function Section({ title, description }) {
  return (
    <div>
      <h1>
        {title}
      </h1> 
      <p>
        {description}
      </p>
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
          href="https://www.ucop.edu/residency/process.html"> UCOP website</Link>

        </>
    />
    <Section
      title="Student Services Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    </>
  )
}
