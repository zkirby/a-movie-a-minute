import notion from "../features/shared/api/notionClient"
import { DATABASE_IDS } from "../features/shared/api/api.constants"
import { compact, map, pick, get } from "lodash"

export const transFormApiMovie = movie => {
  const getProp = accessor => get(movie, `properties.${accessor}`)
  return {
    ...pick(movie, ["id", "created_time", "last_edited_time", "properties"]),
    title: getProp("Title.title[0].plain_text"),
  }
}

const transFormApiMovies = apiMovies =>
  compact(map(apiMovies, transFormApiMovie))

export default async function handler(req, res) {
  const movies = []

  try {
    let hasMore = false
    let startCursor
    do {
      // eslint-disable-next-line no-await-in-loop
      const { results, has_more, next_cursor } = await notion.databases.query({
        database_id: DATABASE_IDS.MOVIES,
        start_cursor: startCursor,
      })
      hasMore = has_more
      startCursor = next_cursor
      movies.push(...results)
    } while (hasMore)
  } catch (error) {
    return res.status(500).json({ error })
  }

  return res.status(200).json(transFormApiMovies(movies))
}
