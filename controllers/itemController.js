const Item = require("../models/itemsSchema");

exports.addItem = async (req, res) => {
    try {
        var data = req.body;
        var item = await Item.create(data)
        console.log(item)

        res.status(200).json({
            msg: "from add item",
            item,
        })
    } catch (error) {
        res.status(200).json({
            error: error.msg
        })

    }
}
exports.updateItem = async (req, res) => {
    try {
        var { _id: itemId } = req.body;
        var data = req.body
        // console.log(Object.keys(data))
      
        //find item
        var item = await Item.findById(itemId)
        console.log(item)

        //update item => item.quantity = quantity;
        Object.keys(data).map(x=> item[x] = data[x]  )
        var updatedItem = await item.save();

        res.status(200).json({
            msg: "from update item",
            updatedItem,
        })
    } catch (error) {
        res.status(200).json({
            error: error.message
        })

    }
}
exports.getItem = async (req, res) => {
    try {
        var items = await Item.find();
        console.log(items)
        var length = items.length;
        res.status(200).json({
            msg: "from get item",
            length: length,
            items
        })
    } catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}