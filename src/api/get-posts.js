import notion from "../features/shared/api/notionClient"
import { DATABASE_IDS } from "../features/shared/api/api.constants"
import { compact, map, pick, get } from "lodash"

// Convert the api posts to something more understandable
export const transFormApiPost = post => {
  const getProp = accessor => get(post, `properties.${accessor}`)
  return {
    ...pick(post, ["id", "created_time", "last_edited_time", "properties"]),
    title: getProp("Title.title[0].plain_text"),
    year: getProp("Year.rich_text[0].plain_text"),
    rating: getProp("Personally.number"),
    img: getProp("Image.url"),
  }
}

const transFormApiPosts = apiPosts => compact(map(apiPosts, transFormApiPost))

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_IDS.BLOGS,
      filter: {
        property: "Status",
        select: {
          equals: "published",
        },
      },
      sorts: [
        {
          property: "Personally",
          direction: "descending",
        },
      ],
    })

    return res.status(200).json(transFormApiPosts(response.results))
  } catch (error) {
    return res.status(500).json({ error })
  }
}
