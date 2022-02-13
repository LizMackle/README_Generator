// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      license = "[![License](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)";
      return badge;

      case "The Unlicense":
        license = "[![License](https://img.shields.io/badge/License-Unlicense-blue)](https://unlicense.org/)";
        return badge;

        case "Mozilla":
        license = "[![License](https://img.shields.io/badge/License-Mozilla-yellow)](https://opensource.org/licenses/MPL-2.0)";
        return badge;

        case "Eclipse":
        license = "[![License](https://img.shields.io/badge/License-Eclipse-red)](https://opensource.org/licenses/EPL-2.0)";
        return badge;

        case "GPL":
        license = "[![License](https://img.shields.io/badge/License-GPL-lightgrey)](https://opensource.org/licenses/gpl-license)";
        return badge;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/License-MIT-brightgreen)
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  *  [Description](#description)
  *  [Installation](#installation)
  *  [Usage](#usage)
  *  [Contribution](#contribution)
  *  [License](#license)
  *  [Tests](#tests)
  *  [Questions](#questions)
      
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution
  
  ${data.contribution}
  
  ## License
  
  This project is created under the ${data.license} license.
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  If you have any questions, please contact me via [Email](mailto:${data.email}) or [GitHub](${data.github}).
  
`;
}

module.exports = generateMarkdown;
