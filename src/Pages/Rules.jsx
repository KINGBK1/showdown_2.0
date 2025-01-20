import React from "react";
import PageContainer from "../Components/PageContainer";

const RulesPage = () => {
  return (
    <PageContainer>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primaryPink mb-8">
          Hackathon Rules and Guidelines
        </h1>
        <p className="text-lg mb-4">
          Welcome to our hackathon! To ensure a fair and enjoyable experience,
          please read through the rules and guidelines below carefully. By
          participating, you agree to adhere to these rules.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            1. Eligibility and Registration
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Registration for Showdownn is free for all eligible participants. However, selected teams for the offline hackathon will be required to pay the participation fee: ₹1000 as convenience charges for smooth conduction of offline hackathon.
            </li>
            <li>Team sizes must not exceed 4 members.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            2. Team Composition
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Teams can consist of participants from any background, with mixed-skill teams encouraged. However, each team must have a unique name.
            </li>
            <li>Changes in team composition are not permitted once registration has closed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            3. Problem Statement Selection
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Participants will have access to problem statements in two domains: Healthcare and Finance. Each domain includes three unique challenges.</li>
            <li>Teams must select one problem statement from either domain for the duration of the hackathon. Switching challenges mid-way is not allowed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            4. Submission Guidelines
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Initial submissions must include a PPT and a working prototype (optional) by the 10th Dec deadline. Only submissions meeting the deadline will be considered for evaluation.
            </li>
            <li>
              (Optional) The prototype should be functional and demonstrate the intended solution, even if not fully polished.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            5. Shortlisting and Payment
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Shortlisted teams will be announced on 14th Dec.</li>
            <li>To confirm their spot, shortlisted teams must pay the participation fee: ₹1000 as convenience charges. Payment must be completed by 17th Dec.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            6. Final Round Participation
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>The final shortlist for the offline hackathon will be announced on 20th Dec. Only these teams are eligible to participate in the on-site hackathon at NIT Durgapur.</li>
            <li>Teams must check their eligibility and arrive prepared for an intense 12-hour hackathon on 18th Jan.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            7. Code of Conduct
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Participants are expected to maintain professional behavior and respect for all team members, organizers, and judges.</li>
            <li>Plagiarism, hacking, or any form of cheating will result in immediate disqualification.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            8. Ownership and Intellectual Property
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Teams retain ownership of their projects but must credit any open-source tools or third-party libraries used in their work.</li>
            <li>By participating, teams agree to allow Showdownn to feature their projects for promotional purposes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            9. Judging Criteria
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Projects will be evaluated on creativity, technical execution, feasibility, and alignment with the problem statement.</li>
            <li>Judges’ decisions are final and non-negotiable.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            10. Awards and Celebration
          </h2>
          <p className="">
            Winning teams will be announced on 19th Jan during the closing ceremony. Prizes will be awarded based on performance and judges' evaluations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            11. Communication
          </h2>
          <p className="">
            All official announcements, including problem statement releases and shortlisting notifications, will be communicated through the registered email addresses. Ensure regular checking to stay updated.
          </p>
        </section>
      </div>
    </PageContainer>
  );
};

export default RulesPage;