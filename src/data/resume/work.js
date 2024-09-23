/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Intern',
    position: 'Pledge A Smile (Non-Government Organization)',
    url: 'https://promptfoo.dev',
    startDate: '2024-06-01',
    endDate: '2024-07-01',
    summary: '',
    highlights: [
      'Worked with Pledge A Smile (Non-Government Organization).',
      'My primary work included Fundraising, Social Media Marketing and Developing Projects.',
    ],
  },
  {
    name: 'Volunteer',
    position: 'Common Internship Test',
    url: '#',
    startDate: '2020-01-01',
    summary: 'Completed common internship assessment test demonstrating proficiency in problem solving, analytical thinking and project management.',
    highlights: [
    ],
  },
];

export default work;
