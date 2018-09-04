function feed(parent, args, context, info) {
  return context.db.query.links({}, info)
}

function info(parent, args, context, info) {
  return "I AM RTHE INFO STRING"
}

module.exports = {
  feed,
  info,
}
