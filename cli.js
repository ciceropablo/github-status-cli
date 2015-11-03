#!/usr/bin/env node

const meow = require('meow'),
  ghStatus = require('github-status'),
  cli = meow(`
    Usage
      $ github-status

    Examples
      $ github-status
      Everything operating normally.
  `)

ghStatus().then(console.log)
