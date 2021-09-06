import { get, map, pick } from "lodash"

import notion from "../features/shared/api/notionClient"

function transformApiPostContent(content) {
  return map(content, block => {
    const text = get(block, [block.type, "text", "0"], {})
    return {
      ...pick(block, ["id", "type"]),
      ...(text.annotations || {}),
      text: text.plain_text,
    }
  })
}

export default async function handler(req, res) {
  try {
    const [post, content] = await Promise.all([
      notion.pages.retrieve({ page_id: req.query.postId }),
      await notion.blocks.children.list({ block_id: req.query.postId }),
    ])

    post.content = transformApiPostContent(get(content, "results"))
    post.raw_content = get(content, "results")
    return res.status(200).json(post)
  } catch (_) {
    return res.status(500).json()
  }
}
