import { createClient } from "microcms-js-sdk";

export type NewsItem = {
  id: string;
  title: string;
  body?: string;
  publishedAt?: string;
  revisedAt?: string;
};

const endpoint = "news";

function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;
  if (!serviceDomain || !apiKey) {
    throw new Error("MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY are required");
  }
  return createClient({ serviceDomain, apiKey });
}

export async function getNewsList(limit = 10, offset = 0): Promise<{
  contents: NewsItem[];
  totalCount: number;
}> {
  try {
    const client = getClient();
    const res = await client.getList<NewsItem>({
      endpoint,
      queries: {
        limit,
        offset,
        orders: "-publishedAt",
      },
    });
    return {
      contents: res.contents ?? [],
      totalCount: res.totalCount ?? 0,
    };
  } catch {
    return { contents: [], totalCount: 0 };
  }
}

export async function getNewsDetail(contentId: string): Promise<NewsItem | null> {
  try {
    const client = getClient();
    const res = await client.getListDetail<NewsItem>({
      endpoint,
      contentId,
    });
    return res;
  } catch {
    return null;
  }
}
