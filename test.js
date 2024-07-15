import {Readable} from 'node:stream'

const stream = Readable.from(['a', 'b', 'c'])

const iterate = async (readerName) => {
  for await (const chunk of stream) {
    console.log(readerName, chunk)
  }
}

await Promise.all([
  iterate('one'),
  iterate('two'),
])
