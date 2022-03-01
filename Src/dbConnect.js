const { initializeApp, cert, getApps } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const credentials = require('../Credentials.json')

exports.connectDb = () => {
  if(!getApps().length) {
    initializeApp({
      credential: cert(credentials)
    })
  }
  return getFirestore()
}