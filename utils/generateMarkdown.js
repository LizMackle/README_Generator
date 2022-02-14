// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      license = "[![License](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)"
      return badge;

    case "The Unlicense":
      license = "[![License](https://img.shields.io/badge/License-Unlicense-blue)](https://unlicense.org/)"
      return badge;

    case "Mozilla":
      license = "[![License](https://img.shields.io/badge/License-Mozilla-yellow)](https://opensource.org/licenses/MPL-2.0)"
      return badge;

    case "Eclipse":
      license = "[![License](https://img.shields.io/badge/License-Eclipse-red)](https://opensource.org/licenses/EPL-2.0)"
      return badge;

    case "GPL":
      license = "[![License](https://img.shields.io/badge/License-GPL-lightgrey)](https://opensource.org/licenses/gpl-license)"
      return badge;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";
  switch (license) {
    case "MIT":
      licenseText =
        `Copyright < YEAR > <COPYRIGHT HOLDER>

          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
      return licenseText;

    case "The Unlicense":
      licenseText =
        `This is free and unencumbered software released into the public domain.

            Anyone is free to copy, modify, publish, use, compile, sell, or
            distribute this software, either in source code form or as a compiled
            binary, for any purpose, commercial or non-commercial, and by any
            means.
            
            In jurisdictions that recognize copyright laws, the author or authors
            of this software dedicate any and all copyright interest in the
            software to the public domain. We make this dedication for the benefit
            of the public at large and to the detriment of our heirs and
            successors. We intend this dedication to be an overt act of
            relinquishment in perpetuity of all present and future rights to this
            software under copyright law.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
            IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
            OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
            OTHER DEALINGS IN THE SOFTWARE.
            
            For more information, please refer to <http://unlicense.org/>`
      return licenseText;

    case "Mozilla":
      licenseText =
        `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`
      return licenseText;

    case "Eclipse":
      licenseText =
        `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
      return licenseText;

    case "GPL":
      licenseText =
        `Copyright (C) <year>  <name of author>
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`
      return licenseText;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title, license, description, installation,
    usage, contribution, test, email, github } = data;

  return `# 09 - NodeJS: ${title}⚙️

          ${renderLicenseBadge(license)}

          ## Description

          ${description}

          ## Table of Contents

          *  [Description](#description)
          *  [Installation](#installation)
          *  [Usage](#usage)
          *  [Contribution](#contribution)
          *  [License](#license)
          *  [Tests](#tests)
          *  [Questions](#questions)

          ## Installation

          ${installation}

          ## Usage

          ${usage}

          ## Contribution

          ${contribution}

          ## License

          ${renderLicenseSection(license)}

          ## Tests

          ${test}

          ## Questions
          If you have any questions, please contact me via [Email](mailto:${email}) or [GitHub](${github}).

          `;
}

module.exports = generateMarkdown;