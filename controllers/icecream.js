// Import the necessary model
var icecream = require('../models/icecream');
 
// Controller function to list all icecreams
exports.icecream_list = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream list');
};
 
// Controller function to get details of a specific icecream
exports.icecream_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};
 
// Controller function to create a new icecream
exports.icecream_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream create POST');
};
 
// Controller function to delete a specific icecream
exports.icecream_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
 
// Controller function to update details of a specific icecream
exports.icecream_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream update PUT ' + req.params.id);
};


// List of all icecream

exports.icecream_list = async function(req, res) {
try{
theicecream = await icecream.find();
res.send(theicecream);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


exports.icecream_view_all_page = async function(req, res) {
    try{
        theicecream = await icecream.find();
        res.render('icecream', { title: 'icecream Search Results', results: theicecream });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };

// exports.icecream_list = async function(req, res) {
//     try {
//         const results = await icecream.find();
//         res.render('icecream', { results });
//     } catch(err) {
//         res.status(500).send({ error: err.message });
//     }
// };


exports.icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"icecream_type":"goat", "cost":12, "size":"large"}
    document.icecream_name = req.body.icecream_name;
    document.icecream_color = req.body.icecream_color;
    document.icecream_price = req.body.icecream_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    // exports.icecream_detail = async function(req, res) {
    //     console.log("detail" + req.params.id)
    //     try {
    //     result = await icecream.findById( req.params.id)
    //     res.send(result)
    //     } catch (error) {
    //     res.status(500)
    //     res.send(`{"error": document for id ${req.params.id} not found`);
    //     }
    //     };


    exports.icecream_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await icecream.findById( req.params.id)
        // Do updates of properties
        if(req.body.icecream_type)
        toUpdate.icecream_type = req.body.icecream_type;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
        };
        