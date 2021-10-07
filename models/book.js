const mongoose = require("mongoose")
const path = require("path")

const coverImageBasePath = "uploads/bookCovers"

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  pageCount: {
    type: String,
    required: true,
  },
  createAt: {
    type: String,
    required: true,
    default: Date.now,
  },
  coverImageName: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Author",
  },
})

// acts as a property in the schema but is derived from the existing property values
bookSchema.virtual("coverImagePath").get(function () {
  if (this.coverImageName != null) {
    return path.join("/", coverImageBasePath, this.coverImageName)
  }
})

module.exports = mongoose.model("Book", bookSchema)
module.exports.coverImageBasePath = coverImageBasePath
