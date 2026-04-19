import { createClient } from "microcms-js-sdk";

export type NewsItem = {
  id: string;
  title: string;
  body?: string;
  publishedAt?: string;
  revisedAt?: string;
};

export type DayoriItem = {
  id: string;
  title: string;
  body?: string;
  publishedAt?: string;
  revisedAt?: string;
};

const newsEndpoint = "news";
const dayoriEndpoint = "dayori";

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
      endpoint: newsEndpoint,
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

/** 公開日が新しい順の最新1件（トップの直近公開バナー用） */
export async function getLatestNewsPublished(): Promise<NewsItem | null> {
  const { contents } = await getNewsList(1, 0);
  return contents[0] ?? null;
}

/** 公開日が新しい順の最新1件（トップの直近公開バナー用） */
export async function getLatestDayoriPublished(): Promise<DayoriItem | null> {
  const { contents } = await getDayoriList(1, 0);
  return contents[0] ?? null;
}

export async function getNewsDetail(contentId: string): Promise<NewsItem | null> {
  try {
    const client = getClient();
    const res = await client.getListDetail<NewsItem>({
      endpoint: newsEndpoint,
      contentId,
    });
    return res;
  } catch {
    return null;
  }
}

export async function getDayoriList(limit = 10, offset = 0): Promise<{
  contents: DayoriItem[];
  totalCount: number;
}> {
  try {
    const client = getClient();
    const res = await client.getList<DayoriItem>({
      endpoint: dayoriEndpoint,
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

export async function getDayoriDetail(contentId: string): Promise<DayoriItem | null> {
  try {
    const client = getClient();
    const res = await client.getListDetail<DayoriItem>({
      endpoint: dayoriEndpoint,
      contentId,
    });
    return res;
  } catch {
    return null;
  }
}
