import case_hero from "../../../images/portfolio/connectworx/hero.png";
import problem_1 from "../../../images/portfolio/connectworx/problem-1.png";
import problem_2 from "../../../images/portfolio/connectworx/problem-2.png";
import problem_3 from "../../../images/portfolio/connectworx/problem-3.png";
import personas from "../../../images/portfolio/connectworx/personas.png";
import graph from "../../../images/portfolio/connectworx/graph.png";
import user_access from "../../../images/portfolio/connectworx/user-access.png";
import networking_features from "../../../images/portfolio/connectworx/networking-features.png";
import keynote_features from "../../../images/portfolio/connectworx/keynote-features.png";
import exhibition_features from "../../../images/portfolio/connectworx/exhibition-features.png";
import studio_features from "../../../images/portfolio/connectworx/studio-features.png";
import { motion } from "framer-motion";

export default function ConnectworX() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-between px-4 lg:px-20 gap-0  md:py-16 "
    >
      {/* Header Sections */}
      <div className="flex-1 max-w-7xl relative mx-auto py-20 px-4 w-full left-0 top-0">
        <h1 className="text-3xl md:text-7xl font-bold dark:text-white">
          ConnectworX
        </h1>
        <p className="text-xl md:text-2xl mt-2 text-[#757575] font-[300] leading-relaxed">
          Check out some of our latest product case studies.
        </p>
        {/* <p className="text-lg md:text-lg mt-8 dark:text-neutral-800">
							We have worked for startups, agencies, corporations, and government and have created products used by millions of people.
						</p> */}
      </div>
      {/* Body Section */}
      <div className="flex flex-col flex-1 max-w-7xl relative mx-auto px-4 w-full left-0 top-0 gap-8">
        <img
          src={case_hero}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-24 text-center justify-center items-center">
          <h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">
            Problem Definition & Exploration
          </h2>
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <div className="flex flex-col gap-6 ">
              <h3 className="text-2xl md:text-3xl">The Problem</h3>
              <p className="md:text-lg flex flex-col font-[300]">
                ConnectworX was born at the start of the pandemic out of
                necessity. When a country-wide ban on social gatherings removed
                our primary revenue source, in-person conferences, we set out to
                create the most lifelike digital event experience on the market.
                <br />
                <br />
                We set out to show the world a web-based conference experience
                which would really listen to and solve problems for attendees,
                speakers, and sponsors.
              </p>
              <div className="flex flex-col w-full px-8 py-4 rounded-md  bg-[#5657971a]">
                <div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
                  <span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">
                    Interesting Note: 
                  </span>{" "}
                  The platform was originally planned as an internal tool but we
                  opted to offer it as a service when our partners began asking
                  about running their own events!
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl ">
                Competitive Analysis & Market Fit
              </h3>
              <div className="md:text-lg flex flex-col font-[300]">
                While digital events platforms have existed for nearly a decade,
                most (at the time of writing) struggle to get audience members
                to engage with one another and with event sponsors.
                <br />
                <br />
                Lackluster networking experiences often leave attendees checked
                out and event sponsors with a lack of meaningful connections.
                Additionally, these platforms are very cookie cutter in their
                organization, and often require A/V teams to manage complex and
                expensive streaming solutions.
              </div>
              <p className="text-[12px] font-normal">
                <em>Check out our findings when evaluating the competition:</em>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-6 ">
            <img
              src={problem_1}
              alt="full width"
              className="object-contain rounded-2xl"
            />
            <h4 className="md:text-lg font-bold">
              The Livestreaming Solutions
            </h4>
            <p className="md:text-lg flex flex-col font-[300]">
              Competitor platforms are simply integrating Vimeo Live, Zoom, or
              YouTube Live to stream live sessions. 3rd party apps requires
              additional fees, a separate technical support contact, and may
              present security risks.
            </p>
          </div>

          <div className="flex flex-col gap-6 ">
            <img
              src={problem_2}
              alt="full width"
              className="object-contain rounded-2xl"
            />
            <h4 className="md:text-lg font-bold">
              Online Networking Limitations
            </h4>
            <p className="md:text-lg flex flex-col font-[300]">
              Trying to herd worldwide attendees into an event-planned schedule
              is going to disappoint. Users are much more comfortable with
              casual, social- based communication tools (like LinkedIn) to
              conversate at their own pace.
            </p>
          </div>

          <div className="flex flex-col gap-6 ">
            <img
              src={problem_3}
              alt="full width"
              className="object-contain rounded-2xl"
            />
            <h4 className="md:text-lg font-bold">
              Online Networking Limitations
            </h4>
            <p className="md:text-lg flex flex-col font-[300]">
              Competitor platforms take the idea of a conference too literally,
              spending energy on replicating a 3D space with avatars, booths,
              and cheesy graphics.
            </p>
          </div>
        </div>

        <div className="my-10 md:my-16 text-center justify-center items-center">
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <div className="flex flex-col gap-6 ">
              <h3 className="text-2xl md:text-3xl">Action Statement</h3>
              <div className="md:text-lg flex flex-col font-[300]">
                Build a product that enables conference companies to host
                engaging digital events and provide value to both sponsors and
                attendees.
              </div>
              <h4 className="md:text-lg font-bold">The product should be:</h4>
              <ul className="ml-10 list-disc list-inside flex flex-col gap-6">
                <li>User-friendly for both administrators and end users</li>
                <li>
                  Accessible and scaleable (regardless of company or event size)
                </li>
                <li>
                  Comprehensive and highlight meaningful connection including:
                </li>
                <ul className="ml-10 list-disc list-inside flex flex-col gap-6">
                  <li>Communicate in real-time with others</li>
                  <li>Easily make meaningful connections</li>
                  <li>Follow up with new connections post-event</li>
                  <li>
                    Learn from and interact with from groundbreaking leaders
                  </li>
                </ul>
              </ul>
            </div>

            <div className="flex flex-col gap-6 ">
              <h3 className="text-2xl md:text-3xl">Who Is ConnectworX For?</h3>
              <p className="md:text-lg flex flex-col font-[300]">
                <span className="font-bold">Administrators:</span> Conference
                organizers who want (or need) to host digital events during the
                pandemic. They may be looking to run a series of small events
                for 500 attendees or one big event with over 10,000. Event
                organizers will have variable experience with running digital
                events and it may be their first time doing so.
                <br />
                <br />
                <span className="font-bold">End Users:</span> Attendees, event
                speakers, and sponsors who love the in- person experience of a
                conference. Each of these user groups has different needs during
                an event. Their location, age, and ability to use technical
                products will vary in a big way.
              </p>
              <p className="text-[12px] font-normal">
                <em>
                  Check out possible personas for ConnectworX users below:
                </em>
              </p>
            </div>
          </div>
        </div>

        <img
          src={personas}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-16 text-center justify-center items-center">
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl">
                Impact Vs. Effort: Choosing A Platform
              </h3>
              <p className="md:text-lg flex flex-col font-[300]">
                ConnectworX will function most effectively as a web application
                to begin with. We considered building a dedicated mobile or
                desktop app, but ultimately landed on a web app because:
              </p>
              <ul className="ml-10 list-disc list-inside flex flex-col gap-4">
                <li>
                  A large percentage of event attendees will access ConnectworX
                  from a work device. If the device has strict security
                  settings, the user may not be able to download an application
                </li>
                <li>
                  A downloaded product requires additional development effort to
                  be device agnostic. A web app is much quicker for our team to
                  build
                </li>
                <li>
                  A web app would allow us to fail faster and iterate on the
                  product
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          src={graph}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-24 text-center justify-center items-center">
          <h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">
            Solving the Problem
          </h2>
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <div className="flex flex-col gap-6 ">
              {/* <h3 className="text-2xl md:text-3xl">The Problem</h3> */}
              <div className="md:text-lg flex flex-col font-[300]">
                ConnectworX is made up of two components for two different user
                types: An engaging and familiar event platform for conference
                attendees and a flexible, editable CMS for conference
                organizers:
                <br />
                <br />
                <p>
                  <span className="font-[500]">ConnectworX</span> (Front-facing
                  event platform)
                </p>
                The frontend of ConnectworX will be the visual output of the
                Studio, where an event takes place. Invited attendees, speakers,
                sponsors, and press will interact here. Changes to the frontend
                can be made by admins in real- time using the Studio.
                <br />
                <br />
                <p>
                  <span className="font-[500]">ConnectworX Studio </span> (Event
                  organizer control center)
                </p>
                The studio will serve as the backend; an editable CMS for
                administrators to customize their pages, forms, user access
                levels, and overall design. Admins can also view event metrics
                and moderate social activity from the Studio. The studio is only
                available to admins who purchase a license for ConnectworX.
                <br />
                <br />
                <p className="text-[12px] font-normal">
                  <em>
                    Check out how we planned out view/edit access for various
                    user groups within the platform:
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={user_access}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-16 text-center justify-center items-center">
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            \
            <div className="flex flex-col gap-6 ">
              <h3 className="text-2xl md:text-3xl">
                High Fidelity Designs:  ConnectworX (The Event Platform)
              </h3>
              <div className="md:text-lg flex flex-col font-[300]">
                ConnectworX is where a live event takes place and is made up of
                three primary pillars of information:
                <br />
                <br />
                <ul className="ml-10 list-disc list-inside flex flex-col gap-4">
                  <li>
                    <span className="font-[600]">Networking features</span> such
                    as profiles, chat functionality, and forums.
                  </li>
                  <li>
                    <span className="font-[600]">Keynote features</span>{" "}
                    including the agenda and live speaker rooms.
                  </li>
                  <li>
                    <span className="font-[600]">Exhibitor features</span> which
                    include digital exhibition booths as well as detailed
                    analytics for the sponsor staff themselves.
                  </li>
                </ul>
                <br />
                <span className="font-[400] text-xl">
                  Designing For Networking Features
                </span>
                <br />
                The ConnectworX profile is the networking home for event
                attendees. Users can interact with one another in the following
                ways:
                <br />
                <br />
                <ul className="ml-10 list-disc list-inside flex flex-col gap-4">
                  <li>
                    <span className="font-[600]">Chat in real time:</span>{" "}
                    Privately message, send audio recordings, and video chat
                    from the Messenger.
                  </li>
                  <li>
                    <span className="font-[600]">(Efficiently) Network:</span>{" "}
                    Users can exchange virtual business cards with other users.
                    If accepted, both parties exchange their provided contact
                    info (Similar to a LinkedIn connection). Attendees can then
                    export a formatted .CSV file containing details of their
                    event contacts.
                  </li>
                  <li>
                    <span className="font-[600]">Save content for later:</span>{" "}
                    A beloved experience at in-person conferences is the tote
                    bag full of swag. We replicated this digitally with the
                    "Digital Briefcase", where users can quickly save any shared
                    or public file from the event and download it all at the
                    end.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col w-full px-8 py-4 rounded-md  bg-[#5657971a]">
                <div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
                  <span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">
                    Work sample below:{" "}
                  </span>{" "}
                  Finalized designs for ConnectworX's user profiles including a
                  fully filled out user profile (top left), a user's exportable
                  connections from the event (top middle), A user's personalized
                  event agenda (right), the Digital Briefcase features (bottom
                  left), and a user's calendar of scheduled in-platform meetings
                  with other users (bottom right)
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={networking_features}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-16 text-center justify-center items-center">
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <div className="flex flex-col gap-6 ">
              <h3 className="text-2xl md:text-3xl">
                Designing for Keynote Features: Agenda & Meeting Rooms
              </h3>
              <div className="md:text-lg flex flex-col font-[300]">
                Our research indicated that digital event attendees are likely
                to be interested in some but not all of a conference, and will
                want to watch content at their own pace.
                <br />
                <br />
                We designed the agenda to be fully customizable, where each user
                can add, remove, and get notified about sessions to build their
                own conference experience.
                <br />
                <br />
                The live session rooms have a dedicated chat, Q&A with upvoting
                capability, and a space to download any supporting documents. We
                also designed a picture-in-picture viewing option for watching
                live sessions for those who will undoubtably be multitasking.
              </div>
              <div className="flex flex-col w-full px-8 py-4 rounded-md  bg-[#5657971a]">
                <div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
                  <span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">
                    Work sample below:{" "}
                  </span>{" "}
                  Finalized designs for the conference agenda and filter/search
                  capabilities (left) and an example of a live session and Q&A
                  screen from an attendee's point of view (right)
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={keynote_features}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-16 text-center justify-center items-center">
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <div className="flex flex-col gap-6 ">
              <h3 className="text-2xl md:text-3xl">
                Exhibition Booths, Meetings, & Live Demos
              </h3>
              <div className="md:text-lg flex flex-col font-[300]">
                Happy exhibitors are key to a successful and profitable event
                experience, and achieving this is as simple as creating space
                for healthy interactions between them and attendees.
                <br />
                <br />
                We built the ConnectworX exhibitor booth as a funnel for
                qualifying and gathering leads.
                <br />
                <br />
                Booth staff can search attendee profiles for tag or keyword
                matches and then invite them to attendlive demos at their booth.
                Following the demo, the staff can then exchange virtual business
                cards with those who attend.
                <br />
                <br />
                We also built a dedicated analytics dashboard for exhibitors so
                they could view who came to their booth on a given day and what
                they interacted with.
              </div>
              <div className="flex flex-col w-full px-8 py-4 rounded-md  bg-[#5657971a]">
                <div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
                  <span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">
                    Work sample below:{" "}
                  </span>{" "}
                  Finalized designs for the Sponsor/Exhibitor booths including a
                  live booth demo (top left), an example of a user exchanging
                  virtual business cards with booth staff (top right), A
                  slide-out video window that contains a pre- recorded demo from
                  the exhibitor (bottom left), and the robust exhibitor page
                  analytics available to each exhibitor team (bottom right).
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={exhibition_features}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-16 text-center justify-center items-center">
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <div className="flex flex-col gap-6 ">
              <h3 className="text-2xl md:text-3xl">
                High Fidelity Designs:  ConnectworX Studio (B2B)
              </h3>
              <div className="md:text-lg flex flex-col font-[300]">
                The Studio is a flexible CMS for event organizers to build their
                event. It offers drag and drop widgets for easy page creation,
                customizable user roles, and dedicated live speaker/stage
                management tool.
                <br />
                <br />
                <div className="flex flex-col w-full px-8 py-4 rounded-md  bg-[#fff5e0]">
                  <div className="text-sm text-[#64583b] leading-tight font-['Montserrat']">
                    <span className="text-[#a3977c] text-sm font-medium font-['Montserrat'] leading-tight">
                      Work sample below:{" "}
                    </span>{" "}
                    The "Streams" control center where organizers can control
                    what is currently broadcasting live to each stage (left). To
                    the right you'll see a diagram we created to help our devs
                    understand how the Studio handles user authentication and
                    the transition between each speaking session.
                  </div>
                </div>
                <br />
                <span className="font-[400] text-xl">
                  Designing For Live Broadcasting Management
                </span>
                <br />
                Managing a live event can be a stressful experience whether
                digital or in- person. We designed the Studio experience to be
                flexible and full of customization pre-event, but a very simple
                experience once things went live.
                <br />
                <br />
                The "Streams" page (seen below) allows for switching between
                commercials, moderator introductions, and live speaking
                sessions. Organizers can see all possible video inputs on one
                screen and simply click a "Go Live" button on the stream that
                should be playing to users.
                <br />
                <br />
                This opened up a multi-stage, enterprise-level conference
                experience which could be run by a relatively small team.
              </div>

              <div className="flex flex-col w-full px-8 py-4 rounded-md  bg-[#5657971a]">
                <div className="text-sm text-[#565797] leading-tight font-['Montserrat']">
                  <span className="text-[#565797] text-sm font-medium font-['Montserrat'] leading-tight">
                    Work sample below:{" "}
                  </span>{" "}
                  The "Streams" control center where organizers can control what
                  is currently broadcasting live to each stage (left). To the
                  right you'll see a diagram we created to help our devs
                  understand how the Studio handles user authentication and the
                  transition between each speaking session.
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={studio_features}
          alt="full width"
          className="object-contain rounded-2xl"
        />

        <div className="my-10 md:my-24 text-center justify-center items-center">
          <h2 className="text-3xl md:text-4xl mb-18 md:mb-24 font-semibold ">
            Success & Top Wins
          </h2>
          <div className="flex flex-col md:max-w-[60%] w-full text-start md:mx-auto gap-24">
            <ul className="list-disc mx-10 md:mx-30 md:text-lg flex flex-col font-[300] gap-2">
              <li>Built a totally revolutionary enterprise product</li>
              <li>From napkin notes to revenue in 13 months</li>
              <li>Resulted in a 33% company-wide net revenue increase</li>
              <li>Michelle Obama gave a keynote on our platform!</li>
            </ul>
            <div className="flex flex-col gap-6">
              <p className="md:text-lg flex flex-col font-[300]">
                ConnectworX was an incredible race to create a product which
                could help people stay connected digitally during The Pandemic
                era.
                <br />
                <br />
                The MVP was finished in just 10 months thanks to long nights and
                early mornings from our team, and was being used by our first
                enterprise customer by month 13.
                <br />
                <br />
                We were especially proud of the work the team did on version 2
                of the software. We were able to collect a wealth of feedback
                from event organizers and attendees in real time. These
                improvements, coupled with a more robust infrastructure, allowed
                us to court much larger clients.
                <br />
                <br />
                V2 saw a whopping 2,150.00% increase in average users per event
                instance and drew a revenue increase of 33%.
                <br />
                <br />
                Notable speakers on events powered by ConnectworX V2 include:
                <br />
                <br />
                <ul className="list-disc mx-10 md:mx-30 md:text-lg flex flex-col font-[300] gap-2">
                  <li>Former First Lady Michelle Obama</li>
                  <li>Whitney Wolfe Heard (CEO, Bumble)</li>
                  <li>
                    Tacha Gregory (Enterprise Technology Director, StateFarm)
                  </li>
                  <li>And many more!</li>
                </ul>
                <br />
                Notable companies involved with events powered by ConnectworX
                include:
                <br />
                <br />
                <ul className="list-disc mx-10 md:mx-30 md:text-lg flex flex-col font-[300] gap-2">
                  <li>Google (Glass division)</li>
                  <li>Wells Fargo</li>
                  <li>The Home Depot</li>
                  <li>Qualcomm</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
