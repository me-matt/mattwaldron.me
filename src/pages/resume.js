import React from "react"
import { Link, graphql } from "gatsby"

import "./resume.css"

import Line from "../components/Line"
import Contact from "../components/Contact"
import TwoColumn from "../components/TwoColumn"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        {[
          `Hi, I'm Matt. I'm a keen problem solver and ideator.`,
          `I enjoy thinking about problems, all kinds of problems, and finding connections between seemingly disconnected ideas.`,
          `In my spare time I like to learn about new topics and interests and spend most of my time digesting different ideas. I'm an advocate for mental well being and welcome all discussions in this area, often promoting techniques and practices for friends, family and colleagues.`,
          `The rest of my time is spent with my family, and 2 kids easily fill that.`
        ].map(s => <Line>{s}</Line>)}
      </div>
      <div>
        <h4>My values include...</h4>
        <ul>
          <li>Equality</li>
          <li>Inclusivity</li>
          <li>Respect</li>
          <li>Transparency</li>
          <li>Ownership</li>
          <li>Continuous learning and mentoring</li>
        </ul>
      </div>
    </TwoColumn>
    <hr />
    <h3>At work</h3>
    {[
      `I'm a good communicator and effective team member.`,
      `I've worked professionally with software for over 15 years. In that time, I've worked as a developer, senior developer, lead developer, principal engineer, and for the past 3 years have been an architect.`,
      `As an architect I've been designing systems and finding effective ways to convey those designs. This has been for start-ups, SMEs and, most recently, at an enterprise scale.`,
      `I value transparency and really believe the scientific method has a stronger place in software design and release.`,
      ``,
    ].map(s => <Line>{s}</Line>)}
    <hr />
    <TwoColumn>
      <div>
        <h3>Architecture experience</h3>
        <ul>
          <li>Systems design</li>
          <li>Evolutionary architecture</li>
          <li>Team topologies</li>
          <li>Cloud-first architecture</li>
          <li>Solutions design</li>
          <li>Strategic mindset</li>
        </ul>
      </div>
      <div>
        <h3>Engineering experience</h3>
        <ul>
          <li>C# / .NET</li>
          <li>ES6 / TypeScript</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Kubernetes</li>
          <li>Design patterns</li>
          <li>React / Redux</li>
          <li>DDD</li>
          <li>SOLID</li>
        </ul>
      </div>
    </TwoColumn>
    <hr />
    <div>
      <h3>Work experience</h3>
      <div>
        <h4>
          <a href="https://www.xero.com/" target="_new">
            Xero Accounting
          </a>, Bank feeds - Software product architect (2019 - Present)
        </h4>
        <p>
          Working in a team of 3 architects, within a broader architecture arm of Xero, I was initially responsible for the most rapidly evolving subdomain in bank feeds. The initial strategy aimed to increase access to third parties by building new integrations to our platform. Within our architecture team, I was a key contributor to redesigning the way we structured the domain to enable more effective delivery.
        </p>
        <p>
          Achieving this required a rapid understanding of the business domain, contracts within the subdomain and the workflows for our system. I had to quickly analyse third party APIs, design the system and relevant milestones. Working alongside the engineering pods, I communicated and provided guidance on how to introduce this change, giving a set of guiding principles.
        </p>
        <p>
          Our team was undergoing a engineering transformation when I joined. This had a consequence that system ownership was being defined and the future architecture needed describing and presenting to the team.
        </p>
        <p>
          The future architecture of the platform introduced new fundamental changes like eventing, eventual consistency where relevant, structural improvements like decomposition of components and reorganising into newly described subdomains.
        </p>
        <p>
          Defining the key 'ilities of aspects of the system enabled me to focus on what patterns to use for suitable parts of the system. This was achieved alongside the broader architectural principles set out by Xero.
        </p>
        <p>
          Once ownership and architectural vectors were set, a process for introducing change initiatives also needed describing. I was a key member in expanding this process to enable broader initiatives to be prioritised.
        </p>
        <p>
          I championed for the scientific process in technical initiatives, where we either collected evidence to provide a baseline for predictions or introduced additional metrics to collect data to measure the outcome. This also involved 
        </p>
        <p>
          Championed good engineering practices and standards, advocating design patterns where applicable.
        </p>
      </div>
      <hr class="thin" />
      <div>
        <h4>
          <a href="https://www.slimmingworld.co.uk/" target="_new">
            Slimming World
          </a> - Software architect (2018 – 2019)
        </h4>
        <p>
          Designed an architectural roadmap to enable CI/CD.
        </p>
        <p>
          Championed the designs of a micro-service architecture with CQRS to empower both front-end and back-end teams and promote rapid iteration.
        </p>
        <p>
          Working with React and developing elements of the platform toward a MERN stack.
        </p>
        <p>
          Optimising their release cycle with Docker and K8s.
        </p>
      </div>
      <hr class="thin" />
      <div>
        <h4>
          <a href="https://www.rightindem.com/" target="_new">
            RightIndem
          </a> - Solutions architect (2017 - 2018)
        </h4>
        <p>
          Co-ordinated multiple development teams, ensuring technical alignment toward the organisations long-term goals.
        </p>
        <p>
          Fundamental in analysing and designing the long-term vision alongside SMEs. Identified and designed additional platform products to support the business vision and reduce developer overhead.
        </p>
        <p>
          Actively developed on the code-base, React/Node front-ends and C# back-ends.
        </p>
        <p>
          Lead the development of migrating existing applications toward a DDD pattern.
        </p>
        <p>
          Responsible for developing and maintaining the Azure infrastructure to support availability and scalability SLA commitments.
        </p>
        <p>
          Built the SaaS to PaaS migration plan and required proof of concepts.
        </p>
        <p>
          Developed an architectural plan describing how and why our technical approach satisfied the organisation requirements. This was intended for multiple audiences as outlined by TOGAF specifications.
        </p>
        <p>
          Responsible for management of the production application including co-ordinating CloudFlare, Azure infrastructure, application interfaces and the CI/CD strategy.
        </p>
        <p>Line managed a team of 2 architects.</p>
      </div>
      <hr class="thin" />
      <div>
        <h4>
          <a href="https://www.rightindem.com/" target="_new">
            RightIndem
          </a> - Principal engineer (2016)
        </h4>
        <p>Served as the lead developer to a team of 5.</p>
        <p>
          Introduced the initial requirements and instructions for a CQRS/Event sourced system. This architecture was desirable for it's natural audit trail and scalability. We also required it to be configurable to a number of degrees for our PaaS goals and it's multi-tenant nature. This framework was the start of our SaaS to PaaS platform implementation.
        </p>
        <p>
          Key in re-platforming and migrating the existing MVC application to React/Redux with WebAPI.
        </p>
        <p>Developed the primary platform products in React/Redux.</p>
        <p>Line managed a team of 5 developers.</p>
      </div>
      <hr class="thin" />
      <h4>
        <a href="https://www.boots.com/" target="_new">
          Boots pharmaceuticals
        </a> - Lead engineer (2013 - 2016)
      </h4>
      <hr class="thin" />
      <h4>
        <a href="https://www.bet365.com/" target="_new">
          Bet365
        </a> - Lead engineer
        (2012 – 2013)
      </h4>
      <hr class="thin" />
      <h4>
        <a href="https://www.bacp.co.uk/" target="_new">
          British Association of Counsellors and Psychotherapists
        </a> - Senior developer (2012)
      </h4>
      <hr class="thin" />
      <h4>
        <a href="https://www.slimmingworld.co.uk/" target="_new">
          Slimming World
        </a> - Senior engineer
        (2008 – 2012)
      </h4>
      <hr class="thin" />
      <h4>
        <a href="http://www.realsense-learning.co.uk/" target="_new">
          RealSense
        </a> - Developer
        (2004 - 2008)
      </h4>
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
