function renderLicenseBadge(license) {
  if (license) {
    return `https://img.shields.io/badge/license-${license}-green.svg`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
![license](${renderLicenseBadge(data.license)})

## Descriptions

${data.descriptions}

## Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.contribution}

## License

${data.license}

## Test

${data.test}

## Questions

If there are any questions here are my contacts:

[github.com/${data.user}](https://github.com/${data.user})

${data.email}
`;
}

module.exports = generateMarkdown;
