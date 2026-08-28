const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const handoffDir = path.join(rootDir, 'TEMPLATE-REFERENCE-HANDOFF');

// Define directory structure
const dirs = [
  '00-START-HERE',
  '01-SHARED-FOUNDATIONS',
  '02-UNIVERSAL-STANDARDS',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/01-Architecture-Routing',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/02-Design-System',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/04-Components',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/05-Content-Model',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/06-SEO-Implementation',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/07-Responsive-Interaction',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/08-Accessibility-Performance',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/09-Technical-Architecture',
  '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review',
];

// Create all directories
dirs.forEach((d) => {
  const full = path.join(handoffDir, d);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
  }
});

// File copy mapping: source relative to root -> dest relative to handoffDir
const filesToCopy = [
  // 01-SHARED-FOUNDATIONS
  {
    src: 'ASTERRA/00_PROJECT_FOUNDATION/Template_01_Corporate_Authority.md',
    dest: '01-SHARED-FOUNDATIONS/Template_01_Corporate_Authority.md',
  },
  {
    src: 'ASTERRA/00_PROJECT_FOUNDATION/Template_02_Editorial_Expertise.md',
    dest: '01-SHARED-FOUNDATIONS/Template_02_Editorial_Expertise.md',
  },
  {
    src: 'ASTERRA/00_PROJECT_FOUNDATION/Template_03_Premium_Experience.md',
    dest: '01-SHARED-FOUNDATIONS/Template_03_Premium_Experience.md',
  },

  // 02-UNIVERSAL-STANDARDS
  {
    src: 'Universal DESIGN.md',
    dest: '02-UNIVERSAL-STANDARDS/Universal_Design_Analysis.md',
  },
  {
    src: 'UNIVERSAlSEO_ANALYTICS.md',
    dest: '02-UNIVERSAL-STANDARDS/Universal_SEO_Analytics_Playbook.md',
  },

  // 03-TEMPLATE-01-METHODOLOGY-EXAMPLES
  // 01-Architecture-Routing
  {
    src: 'ASTERRA/01_ARCHITECTURE/Asterra_Routing_Architecture.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/01-Architecture-Routing/Asterra_Routing_Architecture.md',
  },
  {
    src: 'ASTERRA/01_ARCHITECTURE/Asterra_Page_Architecture.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/01-Architecture-Routing/Asterra_Page_Architecture.md',
  },

  // 02-Design-System
  {
    src: 'ASTERRA/03_DESIGN/Asterra_Design_System.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/02-Design-System/Asterra_Design_System.md',
  },

  // 03-Page-Specifications
  {
    src: 'ASTERRA/02_PAGE_SPECIFICATIONS/Home/Homepage_Page_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/Homepage_Page_Specification.md',
  },
  {
    src: 'ASTERRA/02_PAGE_SPECIFICATIONS/About/About_Corporate_Story_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/About_Corporate_Story_Specification.md',
  },
  {
    src: 'ASTERRA/02_PAGE_SPECIFICATIONS/Business/Business_Unit_Detail_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/Business_Unit_Detail_Specification.md',
  },
  {
    src: 'ASTERRA/02_PAGE_SPECIFICATIONS/Projects/Project_Case_Study_Detailed_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/03-Page-Specifications/Project_Case_Study_Detailed_Specification.md',
  },

  // 04-Components
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_Component_Architecture.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/04-Components/Asterra_Component_Architecture.md',
  },

  // 05-Content-Model
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_Content & Data_Implementation_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/05-Content-Model/Asterra_Content_Data_Implementation_Specification.md',
  },

  // 06-SEO-Implementation
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_SEO_Implementation_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/06-SEO-Implementation/Asterra_SEO_Implementation_Specification.md',
  },

  // 07-Responsive-Interaction
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_Responsive_Behavior & Breakpoint_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/07-Responsive-Interaction/Asterra_Responsive_Behavior_Breakpoint_Specification.md',
  },
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_Interaction & Motion_Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/07-Responsive-Interaction/Asterra_Interaction_Motion_Specification.md',
  },

  // 08-Accessibility-Performance
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_Accessibility & Performance_Implementation_Specification  .md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/08-Accessibility-Performance/Asterra_Accessibility_Performance_Implementation_Specification.md',
  },

  // 09-Technical-Architecture
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_Implementation_Architecture.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/09-Technical-Architecture/Asterra_Implementation_Architecture.md',
  },

  // 10-QA-Acceptance-Review
  {
    src: 'ASTERRA/04_IMPLEMENTATION/Asterra_Final_Design QA & Implementation_Acceptance Specification.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/Asterra_Final_Design_QA_Acceptance_Specification.md',
  },
  {
    src: 'DECISIONS.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/DECISIONS.md',
  },
  {
    src: 'TRREVIEW.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/TRREVIEW.md',
  },
  {
    src: 'CHANGELOG.md',
    dest: '03-TEMPLATE-01-METHODOLOGY-EXAMPLES/10-QA-Acceptance-Review/CHANGELOG.md',
  },
];

console.log(`Copying ${filesToCopy.length} curated reference files...`);

filesToCopy.forEach(({ src, dest }) => {
  const fullSrc = path.join(rootDir, src);
  const fullDest = path.join(handoffDir, dest);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, fullDest);
    console.log(`Copied: ${src} -> ${dest}`);
  } else {
    console.error(`Missing source file: ${fullSrc}`);
  }
});

console.log('Finished copying curated reference files.');
