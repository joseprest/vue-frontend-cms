export default ({ app }, inject) => {
  inject('richTextImageUrls', (text) => {
    const regex = /(<img src=")(\/.+")/gm
    return text.replace(regex, '$1' + process.env.CMS_URL + '$2')
  })
}
