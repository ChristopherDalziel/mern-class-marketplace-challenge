// Mongoose handling our ORM
import mongoose from 'mongoose';
import shortid from 'shortid';

const {String, Number} = mongoose.Schema.Types;

// Creating the Products schema to go along with our DB
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  inventoryQuantity: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate()
  }
});

// if mongoose.models.Product doesn't exist > create it
export default mongoose.models.Product || mongoose.model('Product', ProductSchema)