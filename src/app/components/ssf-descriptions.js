import Link from "next/link"
import styles from "../styles/Description.module.css"

function Line( { miscTitle }) {
  if (miscTitle !="Disabled Students Program: $1,297,576") {
    return <hr className={styles.descHr}/>
  }
}


export function Section({ title, titleLink, description }) {
  return (
    <div>
      <a className={styles.ssfTitle} href={titleLink}>
        {title}
      </a> 
      <p className={styles.para}>
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
      title="Student Affairs Division: $29,009,334"
      titleLink="https://studentaffairs.berkeley.edu/"
      description=
        <>

          The Division of Student Affairs at UC Berkeley supports students
          throughout their university journey, facilitating their experience and
          advocating for their needs. With a vision for transformative education and
          global citizenship, the division prioritizes student well-being and
          community engagement. Through strategic planning and collaboration, it aims
          to enhance services and programs, creating a vibrant and inclusive campus
          environment.

        </>
    />
    <Section
      title="University Health Services: $14,048,487"
      titleLink="https://uhs.berkeley.edu/home"
      description=
        <>

          University Health Services supports the on-campus medical facility,
          the Tang Center. The Tang Center provides a comprehensive range of health
          and wellness services for students, including primary and urgent care,
          counseling, psychiatry, pharmacy, and more. It also promotes mental health
          and safety through prevention systems and offers remote care services via
          the eTang Patient Portal. Additionally, UHS conducts health promotion
          activities like workshops to enhance students' physical and emotional
          well-being.

        </>
    />
    <Section
      title="AVC SA and Dean of Students: $7,824,953"
      titleLink="https://deanofstudents.berkeley.edu/"
      description=
        <>

          The AVC SA & Dean of Students at UC Berkeley fosters an equitable
          environment for students through programs like Golden Bear Orientation,
          freshman housing, and career services. The funding received from the
          Student Services Fee also supports units such as the ASUC Student Union and
          Career Center, aimed at helping students achieve their academic and
          personal goals.

        </>
    />
    <Section
      title="Equity and Inclusion Division: $4,483,359"
      titleLink="https://diversity.berkeley.edu/"
      description=
        <>

          The Division of Equity & Inclusion at UC Berkeley is committed to fostering
          social justice and ensuring equitable opportunities for every member of the
          Berkeley community. Through transformative initiatives like the Basic Needs
          Center and the Centers for Equity and Excellence, historically marginalized
          students are provided with tailored support, scholarships, and resources.
          These efforts not only cultivate a sense of belonging but also empower
          individuals to thrive and succeed, regardless of their background or
          circumstances.

        </>
    />
    <Section
      title="Undergraduate Education Division: $3,369,773"
      titleLink="https://ue.berkeley.edu/home"
      description=
        <>

          The Undergraduate Education Division, led by the Vice Provost for Undergraduate
          Education, is dedicated to shaping and implementing strategies to enhance
          the undergraduate experience at UC Berkeley. It collaborates with campus
          leadership, partners with academic units, convenes committees, and provides
          programs and services to support teaching, learning, and discovery for
          students, faculty, and staff. Units funded under the undergraduate
          education division include the American Cultures Center, Athletic Study
          Center, Berkeley Changemaker Program, Berkeley Connect, and the Student
          Learning Center.

        </>
    />
    <Section
      title="Research Teaching and Learning: $2,982,364"
      titleLink="https://rtl.berkeley.edu/"
      description=
        <>

          The Research Training and Learning Division at UC Berkeley supports instructors
          and researchers with technological, policy, and funding concerns. It
          oversees teams like Berkeley Online Advising, Educational Technology
          Services, and KALX Radio, each providing niche expertise and resources.
          Digital Learning Services (DLS) under RTL helps instructors integrate
          digital tools like bCourses and Zoom into their teaching.

        </>
    />
    <Section
      title="Financial Aid Division: $2,363,619"
      titleLink="https://financialaid.berkeley.edu/"
      description=
        <>

          The Financial Aid Division partners with students to make a Berkeley education
          affordable and provides aid in the form of grants, scholarships, loans,
          work study and awards. In addition to providing financial aid, this
          division funds the Center for Financial Wellness which aims to provide
          accessible resources and empower students to make informed financial
          decisions, promoting long-term financial security and wellness. Services
          include one-on-one appointments with Financial Wellness Coaches, drop-in
          office hours, group workshops, presentations, and online personal finance
          tools like iGRAD and CashCourse.

        </>
    />
    <Section
      title="Graduate Division: $1,604,871"
      titleLink="https://grad.berkeley.edu/"
      description=
        <>

          The Graduate Division oversees admissions, funding, academic
          progress, and professional development for UC Berkeley's 13,000 graduate
          students across 100+ programs. It provides advising, employment services,
          and funds for academic programs and events to foster community. Recently,
          it has focused on developing programs for graduate student mental health.
          The unit serves as the governing body for the graduate school,
          administering policies and consulting with advisors and administrators.

        </>
    />
    <Section
      title="BAMPFA: $1,300,497"
      titleLink="https://bampfa.org/"
      description=
        <>

          The Berkeley Art Museum and Pacific Film Archive (BAMPFA) is a globally
          acclaimed institution, renowned for its collection of art and films,
          offering cultural enrichment and educational opportunities to both the
          Berkeley campus and the wider community. With a commitment to student
          engagement and accessibility, BAMPFA provides numerous opportunities for
          student involvement, including career and leadership initiatives, student
          committees, curated exhibitions, and film series. Supported by a Student
          Service Fee allocation, BAMPFA continues to prioritize showcasing
          progressive and socially relevant artwork while serving as a vital cultural
          hub for the Berkeley community.

        </>
    />
    <Section
      title="Disabled Students Program: $1,297,576"
      titleLink="https://dsp.berkeley.edu/"
      description=
        <>

          The Disabled Students' Program (DSP) at UC Berkeley fosters inclusivity for
          students with disabilities by providing tailored accommodations and
          services to support their academic goals. Dedicated to removing barriers to
          educational access, DSP collaborates with the campus community to uphold
          values of equity and inclusion. Through individually designed services
          based on assessments by DSP Specialists, students receive personalized
          support to ensure their success. DSP believes that an accessible
          environment benefits everyone and offers a wide range of services to meet
          the diverse needs of students with disabilities.

        </>
    />
    </>
  )
}
