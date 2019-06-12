const exec = require('child_process').exec
const assert = require('assert')
const fs = require('fs-extra')
const hashOutput = 'https://storagecdn.xuetangx.com/public_assets/xuetangx/xtxs-test/c2927638aea072a1da8566db091ddd91.upload.test.js'
const noHashOutput = ' https://storagecdn.xuetangx.com/public_assets/xuetangx/xtxs-test/upload.test.js'

describe('Upload test', function() {
  describe('Without --no-md5 param', function() {
    it('should output hash filename', function(done) {
      exec(
        './bin/xtxs upload ./test/xtxs-test.js xtxs-test',
        (err, stdout, stderr) => {
          if(err) {
            done(err)
          } else {
            assert.notEqual(stdout.indexOf(hashOutput), -1)
            done()
          }
        }
      )
    })
    it('should output upload.log', function(done) {
      exec(
        './bin/xtxs upload ./test/xtxs-test.js xtxs-test --out=./test/upload.log',
        (err, stdout, stderr) => {
          if(err) {
            done(err)
          } else {
            const content = fs.readFileSync('./test/upload.log').toString()
            assert.notEqual(content.indexOf(hashOutput), -1)
            done()
          }
        }
      )
    })
    it('should output test.log', function(done) {
      exec(
        './bin/xtxs upload ./test/xtxs-test.js xtxs-test --out=./test/test.log',
        (err, stdout, stderr) => {
          if(err) {
            done(err)
          } else {
            const content = fs.readFileSync('./test/test.log').toString()
            assert.notEqual(content.indexOf(hashOutput), -1)
            done()
          }
        }
      )
    })

  })
  describe('With --no-md5 param', function() {
    it('should output no hash filename', function(done) {
      exec(
        './bin/xtxs upload ./test/xtxs-test.js xtxs-test --no-md5',
        (err, stdout, stderr) => {
          if(err) {
            done(err)
          } else {
            assert.notEqual(stdout.indexOf(noHashOutput), -1)
            done()
          }
        }
      )
    })
    it('should output upload.log', function(done) {
      exec(
        './bin/xtxs upload ./test/xtxs-test.js xtxs-test --no-md5 --out=./test/upload.log',
        (err, stdout, stderr) => {
          if(err) {
            done(err)
          } else {
            const content = fs.readFileSync('./test/upload.log').toString()
            assert.notEqual(content.indexOf(noHashOutput), -1)
            done()
          }
        }
      )
    })
    it('should output test.log', function(done) {
      exec(
        './bin/xtxs upload ./test/xtxs-test.js xtxs-test --no-md5 --out=./test/test.log',
        (err, stdout, stderr) => {
          if(err) {
            done(err)
          } else {
            const content = fs.readFileSync('./test/test.log').toString()
            assert.notEqual(content.indexOf(noHashOutput), -1)
            done()
          }
        }
      )
    })
  })
})
