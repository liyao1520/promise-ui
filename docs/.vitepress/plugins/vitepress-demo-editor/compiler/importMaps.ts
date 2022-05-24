const importMaps = {}

export function addImportMap(key: string, value: string) {
  importMaps[key] = value
}

export function handleImportMaps(script: string) {
  script = handleDefault(script)
  script = script.replace(/import(.*?)from\s+['"](.*?)['"]/g, (match, p1, p2) => {
    const key = p2
    const value = importMaps[key]

    if (value) {
      if (!window[`_${key}`]) {
        window[`_${key}`] = value
      }

      return `const ${p1} = _${p2}`
    } else {
      return match
    }
  })
  return script
}

function handleDefault(script: string) {
  return script.replace(/import(.*?)from\s+['"]vue['"]/g, (match, p1) => {
    p1 = p1.replace(/as/g, ':')
    return `const ${p1} = _vue`
  })
}
