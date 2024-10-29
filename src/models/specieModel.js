import { Schema, model } from 'mongoose';

const specieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    discoveryLocation: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    documented: {
        type: Boolean,
        required: true
    }
});

/* 
{
    "name": "",
    "discoveryLocation": "",
    "rarity": "",
    "documented": ""
}
*/

export default model ('Specie', specieSchema);
