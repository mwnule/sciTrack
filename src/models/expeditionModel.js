import { Schema, model } from 'mongoose';

const expeditionSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    participants: {
        type: [Schema.Types.ObjectId],
        ref: 'Explorer'
    },
    speciesFound: {
        type: [Schema.Types.ObjectId],
        ref: 'Specie'
    }
});

/* 
{
    "location": "",
    "date": "",
    "participants": "",
    "speciesFound" ""
}
*/

export default model ('Expedition', expeditionSchema);