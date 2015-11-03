import test from 'ava'
import childProcess from 'child_process'

test('github-status-cli', t => {
  t.plan(2)

  childProcess.execFile('./cli.js', { cwb: __dirname }, (err, stdout) => {
    t.ifError(err)
    t.true(stdout.trim().length > 0)
  })
})
