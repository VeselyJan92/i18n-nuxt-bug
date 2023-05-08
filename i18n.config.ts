export default defineI18nConfig(async () => {
    return {
      legacy: false,
      seo: true,
  
      messages: {
        cs: await getLocale('cs'),
        de: await getLocale('en'),
      }
    }
  })
  
  async function getLocale(locale: string) {
    return {
        simple_key: "header",
        items:[
            { name: "item 1"},
            { name: "item 2"},
            { name: "item 3"}
        ]
    };
  }