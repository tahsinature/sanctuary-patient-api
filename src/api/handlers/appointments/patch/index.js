export default (req, res) => {
    console.log(req.body);
    res.status(200).send({ success: true });
};
