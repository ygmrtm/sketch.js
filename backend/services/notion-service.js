const { Client } = require('@notionhq/client');
const NOTION_API_KEY = process.env.NOTION_API_KEY;

const notion = new Client({ auth: NOTION_API_KEY });

async function queryNotion(sketchType) {
  console.log(`Querying Notion for sketch type: ${sketchType}`);
  return { message: `Queried ${sketchType}` };
}

module.exports = { queryNotion };

