module.exports = {
  "title": "笔记",
  "description": "李小花的笔记",
  "dest": "public",
  "base": '/blog/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "简历",
        "link": "/jlb/",
        "icon": "reco-home"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/XiaoTaoTaoJDC",
        "icon": "reco-github"
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "基础"
      },
    },
    "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    // "lastUpdated": "Last Updated",
    "author": "李小花",
    "record": "TJ University of Technology"
  },
  "markdown": {
    "lineNumbers": true
  }
}