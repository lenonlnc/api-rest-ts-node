"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/companies', (req, res) => {
    res.send('hello world');
    return res.send(http_status_codes_1.StatusCodes.ACCEPTED).json();
});
router.get('/company/:id', (req, res) => {
    res.send('hello world');
});
// post
router.post('/company/insert', (req, res) => {
    res.send('hello world');
});
// put
router.put('/company/update/:id', (req, res) => {
    res.send('hello world');
});
// delete
router.delete('/company/delete/:id', (req, res) => {
    res.send('hello world');
});
