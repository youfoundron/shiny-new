export default (...args) => args.reduce((acc, name) => {
  acc[name] = name
  return acc
}, [])
