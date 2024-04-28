import Link from "next/link"

export function Section({ title, description, resources }) {
  return (
    <div>
      <h1>
        {title}
      </h1> 
      <p>
        {description}
      </p>
      <ul>
        {resources}
      </ul>
    </div>
  )
}

export default function Descriptions() {
  return (
    <>
    <Section
      title="$306.00 - Lower Sproul Plaza Fee"
      description=
        <>
          The Lower Sproul Plaza fee is continuing to fund the transformation of Lower
          Sproul Plaza into the vibrant, student-oriented space it is today. The
          project addressed physical deficiencies, added new facilities and services,
          and enhanced outdoor amenities. The revitalized Plaza offers 24-hour study
          spaces, multicultural community centers, performance venues, and more,
          fostering a more engaging student environment.
        </>
      resources=
        <>
          <li><Link href="https://studentaffairs.berkeley.edu/wp-content/uploads/BEARS-Referendum-2010.pdf"> B.E.A.R.S Referendum </Link></li>
        </>
    />
    <Section
      title="$212.75 - Wellness Fee"
      description=
        <>
          The Wellness and Recreation Fee (WRF) financed the construction and operation
          of the new Wellness Center and Memorial Stadium Fitness Center and
          eliminated the RecSports membership fee. The fee has funded various
          wellness programs, fitness equipment, and recreational activities and
          continues to improve services related to recreation and wellbeing.
        </>
      resources=
        <>
          <li><Link href="https://studentaffairs.berkeley.edu/wp-content/uploads/Wellness-and-Recreation-Fee-Spring-2013-final-referendum-language.pdf"> Wellness Fee Referendum </Link></li>
          <li><Link href="https://wellnessfund.berkeley.edu/"> Wellness Fund Website </Link></li>
        </>
    />
    <Section
      title="$92.75 - Campus Health Care Fee"
      description=
        <>
          The campus health care fee is designed to improve student access to
          top-notch medical and mental health services at UHS. It supports urgent care,
          medical appointments, counseling, psychiatry, and preventive health
          services. Furthermore, the fee enables upgrades in technology, like online
          scheduling, and provides financial aid to assist students in need.
          Ultimately, it ensures that students have affordable and reliable health
          care options, tackling rising costs while enhancing campus resources.
        </>
      resources=
        <>
          <li><Link href="https://studentaffairs.berkeley.edu/wp-content/uploads/Health-Fee-Final-Ballot-2005.pdf"> Health Fee Referendum </Link></li>
          <li><Link href="https://wellnessfund.berkeley.edu/"> Wellness Fund Website </Link></li>
        </>
    />
    <Section
      title="$46.00 - Life Safety Fee"
      description=
        <>
          The Life Safety Fee provides funding to improve building seismic safety and
          supplement necessary renovations of facilities on campus. One of the main
          projects it has supported was the renovation of the Recreational Sports
          Facility, both the fieldhouse and the main gymnasium.
        </>
      resources=
        <>
          <li><Link href="https://www.ucop.edu/capital-planning/_files/nonstate/0506NRAPP/b-lifesafetyfeeprogram.pdf"> Life Safety Fee Referendum </Link></li>
          <li><Link href="https://wellnessfund.berkeley.edu/"> Wellness Fund Website </Link></li>
        </>
    />
    <Section
      title="$34.00 - Associated Students of University of California (ASUC) Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$33.00 - Campus Climate & Equity (Big C) Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$28.75 - Recruitment and Retention (STARR) Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$20.75 - Educational Opportunity & Equity (GOLD) Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$17.25 - Student Basic Needs Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$10.00 - The Green Initiative Fund (TGIF) Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$6.00 - Save the Daily Cal Initiative (V.O.I.C.E.) Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$4.50 - Housing Security Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      title="$2.25 - Ethnic Studies Fee"
      description="Like tuition, the SSF is standardized across all UC campuses. However, the revenue from this fee Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    </>
  )
}
