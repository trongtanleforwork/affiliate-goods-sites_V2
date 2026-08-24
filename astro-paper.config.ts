import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://goods.okeyreview.com/",
    title: "OkeyReview Goods",
    description:
      "Expert, unbiased physical product reviews, hands-on tests, and curated buying guides for home living, beauty, automotive gear, and everyday lifestyle goods.",
    author: "Tan Le",
    profile: "https://goods.okeyreview.com/about/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "mail", url: "mailto:info.okeyreview@gmail.com" },
    { name: "facebook", url: "https://www.facebook.com/okeyreview/" },
    { name: "pinterest", url: "https://www.pinterest.com/infookeyreview/" },
  ],
  shareLinks: [
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
