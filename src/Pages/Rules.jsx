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
            1. Eligibility
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>
              Participants: Open to students, professionals, and enthusiasts.
            </li>
            <li>
              Team Composition: Teams can consist of up to{" "}
              <strong>[insert number]</strong> participants.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            2. Project Requirements
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>
              All code and assets must be created during the hackathon period.
            </li>
            <li>
              Projects must be original and cannot replicate existing solutions
              directly.
            </li>
            <li>No inappropriate, offensive, or illegal content is allowed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            3. Teamwork
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>All team members must contribute meaningfully.</li>
            <li>
              Respectful communication is mandatory; harassment will not be
              tolerated.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            4. Development Guidelines
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>Teams are free to use any technology stack.</li>
            <li>Use GitHub, GitLab, or similar for version control.</li>
            <li>Prepare a brief demo of your project.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            5. Submission
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>
              All projects must be submitted by{" "}
              <strong>[insert deadline]</strong>.
            </li>
            <li>
              Submit your code repository link and any additional documents.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            6. Judging Criteria
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>
              Innovation, technical implementation, impact, and presentation
              will be evaluated.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            7. Code of Conduct
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>Respect all participants, mentors, and organizers.</li>
            <li>No harassment, discrimination, or harmful actions allowed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            8. Prizes and Awards
          </h2>
          <p className="">
            Prizes will be awarded to winning teams based on the judging
            criteria.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            9. Intellectual Property
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>
              Teams retain ownership of their projects, but organizers may
              showcase them.
            </li>
            <li>
              Provide attribution for any open-source libraries or assets used.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-secondaryPink mb-2">
            10. Additional Information
          </h2>
          <p className="">
            Contact [contact email] or visit our FAQ page for any additional
            questions.
          </p>
        </section>
      </div>
    </PageContainer>
  );
};

export default RulesPage;
