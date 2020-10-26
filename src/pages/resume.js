import React from "react"
import { graphql } from "gatsby"

import "./resume.css"

import Line from "../components/Line"
import Contact from "../components/Contact"
import TwoColumn from "../components/TwoColumn"
import Layout from "../components/layout"
import SEO from "../components/seo"

const intro = [
  `Hi, I'm Matt. I'm a keen problem solver and ideator.`,
  `I enjoy thinking about problems, all kinds of problems, finding connections between seemingly disconnected ideas and finding solutions for those problems.`,
  `In my spare time I like to learn about new topics and interests and spend most of my time digesting different ideas. I'm an advocate for mental well being and welcome all discussions in this area, often promoting techniques and practices for friends, family and colleagues.`,
  `The rest of my time is spent with my family, and 2 kids easily fill that.`
];

const values = [
  'Equality',
  'Inclusivity',
  'Respect',
  'Transparency',
  'Ownership',
  'Continuous learning and mentoring'
];

const atWork = [
  `I'm a good communicator and effective team member.`,
  `I've worked professionally with software for over 15 years. In that time, I've worked as a developer, senior developer, lead developer, principal engineer, and for the past 3 years have been an architect.`,
  `As an architect I've been designing systems and finding effective ways to convey those designs. This has been for start-ups, SMEs and, most recently, at an enterprise scale.`,
  `I value transparency and really believe the scientific method has a stronger place in software design and release.`,
  ``,
];

const architectureExperience = [
  'Systems design',
  'Domain design',
  'Team topologies',
  'Evolutionary architecture',
  'Cloud-first architecture',
  'Solutions design',
  'Strategic mindset',
];

const engineeringExperience = [
  'C# / .NET',
  'ES6 / TypeScript',
  'SQL',
  'AWS / Azure',
  'Design patterns',
  'React',
  'DDD',
  'SOLID',
];

const Experience = ({ link, title, description, responsibilities }) => (
  <div>
    <h4>
      <a href={link} target="_new">
        {title}
      </a>, {description}
    </h4>
    {responsibilities && responsibilities.map(s => <p>{s}</p>)}
  </div>
);

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.author.name
  return (
  <Layout location={location} title={siteTitle}>
    <SEO title="Resume" />
    <h2>Software architect</h2>
    <h3>About me</h3>
    <TwoColumn>
      <div>
        <Contact email="contact@mattwaldron.me" />
        {intro.map(s => <Line>{s}</Line>)}
      </div>
      <div>
        <h4>My values include...</h4>
        <ul>
        {values.map(s => <li>{s}</li>)}
        </ul>
      </div>
    </TwoColumn>
    <hr />
    <h3>At work</h3>
    {atWork.map(s => <Line>{s}</Line>)}
    <hr />
    <TwoColumn>
      <div>
        <h3>Architecture experience</h3>
        <ul>
          {architectureExperience.map(s => <li>{s}</li>)}
        </ul>
      </div>
      <div>
        <h3>Engineering experience</h3>
        <ul>
          {engineeringExperience.map(s => <li>{s}</li>)}
        </ul>
      </div>
    </TwoColumn>
    <hr />
    <div>
      <h3>Work experience</h3>
      <Experience
        link="https://www.xero.com/"
        title="Xero Accounting"
        description="Bank feeds - Product architect (2019 - Present)"
        responsibilities={[
          'Working in a team of 3 architects, within a broader architecture arm of Xero. I was initially responsible for the most rapidly dependent subdomain in bank feeds. The team strategy aimed to increase access to third parties by building new integrations to our platform.',
          'A critical member in the transformation of the team, in which the architecture aligned with the organisational structure to promote a culture of ownership.',
          'Responsible for ensuring bank feeds conforms to the broader architectural principles and that the organisation benefits from the learnings and practices within the team.',
          'Building good communication channels with architects, engineers, product managers and product owners.',
          'Responsible for analysing third-parties for suitability within the platform.',
          'Responsible for creating and maintaining the future architecture of the platform. This involved creating a 1 and 5 year plan and producing an operating model describing how architecture can effectively communicate to the team.',
          'Responsible for creating and implementing effective strategies to ensure the architectures effectiveness is maintained.',
          'Responsible for creating and implementing strategies and techniques to promote an understanding of the architecture amongst the team.',
          'Understanding and measuring important metrics of the systems to ensure architectural principles were accurately followed.',
          'Championed for the scientific process in technical initiatives, to enable an evidence based approach to change within the team.'
        ]}
      />
      <hr class="thin" />
      <Experience
        link="https://www.slimmingworld.co.uk/"
        title="Slimming World"
        description="Software architect (2018 – 2019)"
        responsibilities={[
          'Designed and initiated an architectural roadmap to facilitate CI/CD, reducing delivery cycle time and promoting an automated testing culture.',
          'Designed and built an improved group search function using React and ElasticSearch to support a scale over 0&lt;n&lt;20 unique searches/second.',
          'Proposed designs for a micro-service architecture with CQRS to empower both front-end and back-end teams restricted by organisational structure, promoting rapid iteration.',
          'Responsible for evaluating the front-end experience and introducing a monorepo pattern, enabling front-end teams to build modular applications and libraries.',
          'Worked with the existing team to plan containerisation and improved delivery pipelines.'
        ]}
      />
      <hr class="thin" />
      <Experience
        link="https://www.rightindem.com/"
        title="RightIndem"
        description="Solutions architect (2017 - 2018)"
        responsibilities={[
          'Co-ordinated multiple development teams, ensuring technical alignment toward the organisations long-term goals.',
          'Fundamental in analysing and designing the long-term vision alongside SMEs. Identified and designed additional platform products to support the business vision and reduce developer overhead.',
          'Actively developed on the code-base, React/Node front-ends and C# back-ends.',
          'Lead the development of migrating existing applications toward a DDD pattern.',
          'Responsible for developing and maintaining the Azure infrastructure to support availability and scalability SLA commitments.',
          'Built the SaaS to PaaS migration plan and required proof of concepts.',
          'Developed an architectural plan describing how and why our technical approach satisfied the organisation requirements. This was intended for multiple audiences as outlined by TOGAF specifications.',
          'Responsible for management of the production application including co-ordinating CloudFlare, Azure infrastructure, application interfaces and the CI/CD strategy.',
          'Line managed a team of 2 architects.',
        ]}
      />
      <hr class="thin" />
      <Experience
        link="https://www.rightindem.com/"
        title="RightIndem"
        description="Principal engineer (2016)"
        responsibilities={[
          'Served as the lead developer to a team of 5.',
          'Introduced the initial requirements and instructions for a CQRS/Event sourced system. This architecture was desirable for it\'s natural audit trail and scalability. We also required it to be configurable to a number of degrees for our PaaS goals and it\'s multi-tenant nature. This framework was the start of our SaaS to PaaS platform implementation.',
          'Key in re-platforming and migrating the existing MVC application to React/Redux with WebAPI.',
          'Developed the primary platform products in React/Redux.',
          'Line managed a team of 5 developers.',
        ]}
      />
      <hr class="thin" />
      <Experience
        link="https://www.boots.com/"
        title="Boots pharmaceuticals"
        description="Lead engineer (2013 - 2016)"
      />
      <hr class="thin" />
      <Experience
        link="https://www.bet365.com/"
        title="Bet365"
        description="Lead engineer (2012 – 2013)"
      />
      <hr class="thin" />
      <Experience
        link="https://www.bacp.co.uk/"
        title="British Association of Counsellors and Psychotherapists"
        description="Senior developer (2012)"
      />
      <hr class="thin" />
      <Experience
        link="https://www.slimmingworld.co.uk/"
        title="Slimming World"
        description="Senior developer (2008 - 2012)"
      />
      <hr class="thin" />
      <Experience
        link="https://www.realsense-learning.co.uk/"
        title="RealSense Solutions"
        description="Developer (2004 - 2008)"
      />
    </div>
    <hr />
    <div>
      <h3>Qualifications</h3>
      <p>BSc Computer Science</p>
    </div>
  </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
