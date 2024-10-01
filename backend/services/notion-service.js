const { Client } = require('@notionhq/client');
const { NOTION_API_KEY } = require('../../config/secrets');

const notion = new Client({ auth: NOTION_API_KEY });

async function queryNotion(sketchType) {
  console.log(`Querying Notion for sketch type: ${sketchType}`);
  return { message: `Data for ${sketchType} from Notion` };
}

module.exports = { queryNotion };
