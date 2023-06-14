import React from "react";
import "../../styles/style.css";
import {
  Card,
  Text,
  CardBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function Experience() {
  return (
    <section id="experience">
      <p className="header">experience</p>
      <div className="section">
        <Tabs>
          <TabList>
            <Tab>Better Mortgage</Tab>
            <Tab>Port City Java</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>
                <span className="position">
                  Written Communications Specialist:Team Lead
                </span>{" "}
                <span className="dateworked">December 2021 – January 2023</span>
              </p>
              <ul>
                <li>
                  {" "}
                  Built new department and worked with software development,
                  sales, funding, coordination and underwriting to identify what
                  was needed to meet the expanding needs of the WCS department
                  to ensure timely resolution for clients experiencing document
                  collection issues
                </li>
                <li>
                  {" "}
                  Audited team's chats to identify areas of opportunity and
                  success and led group feedback sessions daily huddles to work
                  toward improvements
                </li>
                <li>
                  {" "}
                  Analyzed credit, asset, income, and policy documents to
                  determine if documents met UW guidelines and helped borrowers
                  understand what documents were needed
                </li>
              </ul>

              <p>
                <span className="position">
                  Sales Development Associate: Written Communications
                </span>{" "}
                <span className="dateworked">July 2021 – December 2021</span>
              </p>
              <ul>
                <li>
                  {" "}
                  Mentored, trained, and held shadowing sessions with all
                  incoming associates across US and India teams
                </li>
                <li>
                  {" "}
                  Maintained the position as #1 IC in the department with a CSAT
                  of 4.9%, reply time of 11 seconds, and averaging over 800
                  chats per month handling inquiries at all areas of customer
                  experience from pre-application through funding
                </li>
                <li>
                  {" "}
                  Created canned responses for FAQs which were approved by
                  compliance to be incorporated into SDA workflow
                </li>
              </ul>

              <p>
                <span className="position">
                  Customer Experience Associate: Inbound Calls
                </span>{" "}
                <span className="dateworked">April 2021 – July 2021</span>
              </p>
              <ul>
                <li>
                  {" "}
                  Passed NMLS Exam and became licensed in 21 states | NMLS
                  #2137031
                </li>
                <li>
                  {" "}
                  Maintained position in the top 5% of the department with CSAT
                  of 4.8%, 100% PUR, and consistently exceeded target of 400
                  inbound calls per month
                </li>
              </ul>
            </TabPanel>
            <TabPanel>

            <p>
                <span className="position">
                Cafe Manager
                </span>{" "}
                <span className="dateworked">December 2016 - April 2021</span>
              </p>
              <ul>
              <li> Work to resolve any customer complaints in a timely manner through interpersonal and solutions-oriented communication</li>
              <li> Invoice incoming orders from a variety of outside vendors and translate daily sale reports into location-specific reports for CFO</li>
              <li> Achieve and exceed monthly and quarterly sales targets: $150,562.50 quarterly goal vs $155,125 quarterly actual</li>
              <li> Improve effectiveness of product and labor through monthly inventory and monitoring waste. Consistently in top 3 of 16 cafes for monthly productivity efficiency</li>
              <li> Interview, hire, and coach a staff of 12 people while keeping them up to date on corporate standards and changes</li>
              <li> Successfully established a communicative and goal-oriented workplace through weekly meetings with the CEO and DM to discuss industry best practices</li>
                </ul>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <hr className="break"></hr>
      </div>
    </section>
  );
}
