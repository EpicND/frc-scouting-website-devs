import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import App from './src/App';
import getFacts from './src/facts';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');


const app = express();
app.get('/test', (req, res) => {
    getFacts().then(facts =>{
        const html = renderToNodeStream(<App facts={facts} />);
        const finalHtml = index.replace('<!-- ::APP:: -->', html)
        res.set('Cache-Control', 'public, max-age=0, s-maxage=10')
        res.send(finalHtml)
    })
})


app.get('/team/:teamNumber', (req, res) => {
    
})

export let ssrapp = functions.https.onRequest(app)