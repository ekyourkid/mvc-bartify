const fs = require('fs')
class SongModel {
  constructor(id, title, band, genre) {
    this.id = id
    this.title = title
    this.band = band
    this.genre = genre
  }
  static readFromJson() {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'))
  }
  static save() {
    // create new song `new SongModel('','','','')
    // push new song to data
    // write file
  }
}
module.exports = SongModel
